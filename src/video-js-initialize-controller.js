/*
Copyright 2015 Grovo Learning, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

//TODO: arguments list suggests this module is doing too much
const getController = ({reportingCallback, document, vjs, utilities, endlessModeController}) => {

  const dataReactId = 'dataReactId';

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

  const getHandleVideoPlayerReadyCallback = ({reactElement}) => {
      return () => {
        utilities.getVideoPlayerEl(reactElement)
        .parentElement
        .removeAttribute(dataReactId);

      if (reactElement.props.resize) {
        const callback = utilities.makeInstanceCallback({context: reactElement,
          func: handleVideoPlayerResize});
        const resizeOptionsFromProps = reactElement.props.resizeOptions;
        addResizeEventListener({callback, resizeOptionsFromProps});
      }

      if (reactElement.props.onReady) {
        reactElement.props.onReady();
      }
    };
  };

  //see http://docs.brightcove.com/en/perform/brightcove-player/reference/api/vjs.Player.html#methodsSection
  const listenForPlayerEvents = player => {
    player.on('firstplay', e => reportingCallback({eventName: 'firstplay',
      eventData:{currentSrc: player.currentSrc()}}));
    player.on('play', e => reportingCallback({eventName: 'play',
      eventData:{currentSrc: player.currentSrc()}}));
    player.on('pause', e => reportingCallback({eventName: 'pause',
      eventData:{currentSrc: player.currentSrc()}}));
    player.on('progress', e => reportingCallback({eventName: 'progress',
      eventData: {bufferd: player.buffered(),
                  bufferedPercent: player.bufferedPercent()}}));
    player.on('resize', e => reportingCallback({eventName: 'resize'}));
    player.on('seeking', e => reportingCallback({eventName: 'seeking'}));
    player.on('seeked', e => reportingCallback({eventName: 'seeked'}));
    player.on('ended', e => reportingCallback({eventName: 'ended'}));
    player.on('waiting', e => reportingCallback({eventName: 'waiting'}));
    //get duration
    player.on('durationchange', e => reportingCallback({eventName: 'durationchange',
      eventData:{durration: player.duration()}}));
    player.on('fullscreenchange', e => reportingCallback({eventName: 'fullscreenchange',
      eventData:{isFullScreen: player.isFullscreen()}}));
    player.on('mouseout', e => reportingCallback({eventName: 'mouseout'}));
    player.on('mouseover', e => reportingCallback({eventName: 'mouseover'}));
    player.on('click', e => reportingCallback({eventName: 'click'}));
    player.on('error', e => reportingCallback({eventName: 'error'}));
    //get data
    player.on('loadstart', e => reportingCallback({eventName: 'loadedstart'}));
    player.on('loadeddata', e => reportingCallback({eventName: 'loadeddata'}));
    player.on('loadedalldata', e => reportingCallback({eventName: 'loadedalldata'}));
    player.on('loadedmetadata', e => reportingCallback({eventName: 'loadedmetadata'}));
    player.on('timeupdate', e => reportingCallback({eventName: 'timeupdate',
      eventData: {currentTime: player.currentTime(),
                  remainingTime: player.remainingTime()}}));
    player.on('useractive', e => reportingCallback({eventName: 'useractive'}));
    player.on('userinactive', e => reportingCallback({eventName: 'userinactive'}));
    player.on('volumechange', e => reportingCallback({eventName: 'volumechange',
      eventData: {volume: player.volume()}}));
  };

  const mountVideoPlayer = ({reactElement}) => {
    const src = reactElement.props.src;
    const options = utilities.getVideoPlayerOptions(reactElement.props);

    reactElement.player = vjs(utilities.getVideoPlayerEl(reactElement), options);
    reactElement.player.ready(utilities.makeInstanceCallback({
      context: reactElement,
      func: getHandleVideoPlayerReadyCallback({reactElement})
    }));
    initializeEventListeners(reactElement.props.eventListeners);
    if (reactElement.props.plugins) {
      initializePlugins(reactElement.props.plugins, reactElement.player)
    };
    reactElement.player.src(src);
    endlessModeController.maybeSetEndlessMode({reactElement,
      nextVideoCallback: reactElement.props.handleNextVideo});
    listenForPlayerEvents(reactElement.player);
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
