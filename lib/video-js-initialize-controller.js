//TODO: arguments list suggests this module is doing too much
'use strict';

exports.__esModule = true;
var getController = function getController(_ref) {
  var reportingCallback = _ref.reportingCallback;
  var document = _ref.document;
  var vjs = _ref.vjs;
  var utilities = _ref.utilities;
  var endlessModeController = _ref.endlessModeController;

  var dataReactId = 'dataReactId';

  var initializeEventListeners = function initializeEventListeners(eventListeners, player) {
    Object.keys(eventListeners).forEach(function (key) {
      player.on(key, eventListeners[key]);
    });
  };

  var initializePlugins = function initializePlugins(plugins, player) {
    plugins.forEach(function (plugin) {
      vjs.plugin(plugin.name, plugin.func);
      player[plugin.name]();
    });
  };

  var getHandleVideoPlayerReadyCallback = function getHandleVideoPlayerReadyCallback(_ref2) {
    var reactElement = _ref2.reactElement;

    return function () {
      utilities.getVideoPlayerEl(reactElement).parentElement.removeAttribute(dataReactId);

      if (reactElement.props.resize) {
        var callback = utilities.makeInstanceCallback({ context: reactElement,
          func: handleVideoPlayerResize });
        var resizeOptionsFromProps = reactElement.props.resizeOptions;
        addResizeEventListener({ callback: callback, resizeOptionsFromProps: resizeOptionsFromProps });
      }

      if (reactElement.props.onReady) {
        reactElement.props.onReady();
      }
    };
  };

  //see http://docs.brightcove.com/en/perform/brightcove-player/reference/api/vjs.Player.html#methodsSection
  var listenForPlayerEvents = function listenForPlayerEvents(player) {
    player.on('firstplay', function (e) {
      return reportingCallback({ eventName: 'firstplay',
        eventData: { currentSrc: player.currentSrc() } });
    });
    player.on('play', function (e) {
      return reportingCallback({ eventName: 'play',
        eventData: { currentSrc: player.currentSrc() } });
    });
    player.on('pause', function (e) {
      return reportingCallback({ eventName: 'pause',
        eventData: { currentSrc: player.currentSrc() } });
    });
    player.on('progress', function (e) {
      return reportingCallback({ eventName: 'progress',
        eventData: { bufferd: player.buffered(),
          bufferedPercent: player.bufferedPercent() } });
    });
    player.on('resize', function (e) {
      return reportingCallback({ eventName: 'resize' });
    });
    player.on('seeking', function (e) {
      return reportingCallback({ eventName: 'seeking' });
    });
    player.on('seeked', function (e) {
      return reportingCallback({ eventName: 'seeked' });
    });
    player.on('ended', function (e) {
      return reportingCallback({ eventName: 'ended' });
    });
    player.on('waiting', function (e) {
      return reportingCallback({ eventName: 'waiting' });
    });
    //get duration
    player.on('durationchange', function (e) {
      return reportingCallback({ eventName: 'durationchange',
        eventData: { durration: player.duration() } });
    });
    player.on('fullscreenchange', function (e) {
      return reportingCallback({ eventName: 'fullscreenchange',
        eventData: { isFullScreen: player.isFullscreen() } });
    });
    player.on('mouseout', function (e) {
      return reportingCallback({ eventName: 'mouseout' });
    });
    player.on('mouseover', function (e) {
      return reportingCallback({ eventName: 'mouseover' });
    });
    player.on('click', function (e) {
      return reportingCallback({ eventName: 'click' });
    });
    player.on('error', function (e) {
      return reportingCallback({ eventName: 'error' });
    });
    //get data
    player.on('loadstart', function (e) {
      return reportingCallback({ eventName: 'loadedstart' });
    });
    player.on('loadeddata', function (e) {
      return reportingCallback({ eventName: 'loadeddata' });
    });
    player.on('loadedalldata', function (e) {
      return reportingCallback({ eventName: 'loadedalldata' });
    });
    player.on('loadedmetadata', function (e) {
      return reportingCallback({ eventName: 'loadedmetadata' });
    });
    player.on('timeupdate', function (e) {
      return reportingCallback({ eventName: 'timeupdate',
        eventData: { currentTime: player.currentTime(),
          remainingTime: player.remainingTime() } });
    });
    player.on('useractive', function (e) {
      return reportingCallback({ eventName: 'useractive' });
    });
    player.on('userinactive', function (e) {
      return reportingCallback({ eventName: 'userinactive' });
    });
    player.on('volumechange', function (e) {
      return reportingCallback({ eventName: 'volumechange',
        eventData: { volume: player.volume() } });
    });
  };

  var mountVideoPlayer = function mountVideoPlayer(_ref3) {
    var reactElement = _ref3.reactElement;

    var src = reactElement.props.src;
    var options = utilities.getVideoPlayerOptions(reactElement.props);

    reactElement.player = vjs(utilities.getVideoPlayerEl(reactElement), options);
    reactElement.player.ready(utilities.makeInstanceCallback({
      context: reactElement,
      func: getHandleVideoPlayerReadyCallback({ reactElement: reactElement })
    }));
    initializeEventListeners(reactElement.props.eventListeners);
    if (reactElement.props.plugins) {
      initializePlugins(reactElement.props.plugins, reactElement.player);
    };
    reactElement.player.src(src);
    endlessModeController.maybeSetEndlessMode({ reactElement: reactElement,
      nextVideoCallback: reactElement.props.handleNextVideo });
    listenForPlayerEvents(reactElement.player);
  };

  var unmountVideoPlayer = function unmountVideoPlayer(_ref4) {
    var reactElement = _ref4.reactElement;

    reactElement.player.dispose();
  };

  return {
    mountVideoPlayer: mountVideoPlayer,
    unmountVideoPlayer: unmountVideoPlayer
  };
};

exports['default'] = getController;
module.exports = exports['default'];