import getEndlessModeController from './video-js-endless-mode-controller';
import getUtilities from './video-js-controller-utilities';
import vjs from 'videojs';

const getController = ({React, reportingCallback}) => {

  const dataReactId = 'dataReactId';

  const endlessModeController = getEndlessModeController({React});

  const utilities = getUtilities({React});

  const initializeEventListeners = (eventListeners, player) => {
    Object.keys(eventListeners).forEach(key => {
      player.on(key, eventListeners[key]);
    });
  };

  const initializePlugins = (plugins, player) => {
    plugins.forEach((plugin) => {
      vjs.plugin(plugin.name, plugin.func);
        player[plugin.name]();
    });
  };

  const handleVideoPlayerReady = function() {
      utilities.getVideoPlayerEl(this)
      .parentElement
      .removeAttribute(dataReactId);

    if (this.props.resize) {
      const callback = utilities.makeInstanceCallback({context: this,
        func: handleVideoPlayerResize});
      const resizeOptionsFromProps = this.props.resizeOptions;
      addResizeEventListener({callback, resizeOptionsFromProps});
    }

    this.props.onReady();
  };

  const listenForPlayerEvents = player => {
    player.on('error', e => reportingCallback({eventName: 'error'}));
    player.on('loadeddata', e => reportingCallback({eventName: 'loadeddata'}));
    player.on('loadedmetadata', e => reportingCallback({eventName: 'loadedmetadata'}));
    player.on('timeupdate', e => reportingCallback({eventName: 'timeupdate',
      eventData: {currentTime: player.currentTime()}}));
    player.on('useractive', e => reportingCallback({eventName: 'useractive'}));
    player.on('userinactive', e => reportingCallback({eventName: 'userinactive'}));
    player.on('volumechange', e => reportingCallback({eventName: 'volumechange',
      eventData: {volume: player.volume()}}));
  };

  const mountVideoPlayer = function() {
    const src = this.props.src;
    const options = utilities.getVideoPlayerOptions(this.props);

    this.player = vjs(utilities.getVideoPlayerEl(this), options);
    this.player.ready(utilities.makeInstanceCallback({context: this,
      func: handleVideoPlayerReady}));
    initializeEventListeners(this.props.eventListeners);
    initializePlugins(this.props.plugins, this.player);
    this.player.src(src);
    endlessModeController.maybeSetEndlessMode({reactElement: this});
    listenForPlayerEvents(this.player);
  };

  const unmountVideoPlayer = ({reactElement}) => {
    reactElement.player.dispose();
  };

  return {
    mountVideoPlayer,
    unmountVideoPlayer
  };
}

export default getController;
