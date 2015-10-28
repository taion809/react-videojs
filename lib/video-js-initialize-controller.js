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

'use strict';

exports.__esModule = true;
var getController = function getController(_ref) {
  var reportingCallback = _ref.reportingCallback;
  var document = _ref.document;
  var vjs = _ref.vjs;
  var utilities = _ref.utilities;
  var resizingController = _ref.resizingController;
  var eventsController = _ref.eventsController;
  var endlessModeController = _ref.endlessModeController;

  var dataReactId = 'dataReactId';

  var initializeEventListeners = function initializeEventListeners(eventListeners, player) {
    Object.keys(eventListeners).forEach(function (key) {
      player.on(key, eventListeners[key]);
    });
  };

  var initializePlugins = function initializePlugins(_ref2) {
    var plugins = _ref2.plugins;
    var player = _ref2.player;

    if (plugins) {
      plugins.forEach(function (plugin) {
        vjs.plugin(plugin.name, plugin.func);
        player[plugin.name]();
      });
    }
  };

  var removeReactIdFromData = function removeReactIdFromData(_ref3) {
    var reactElement = _ref3.reactElement;

    utilities.getVideoPlayerEl(reactElement).parentElement.removeAttribute(dataReactId);
  };

  //TODO: implement
  var handleVideoPlayerResize = function handleVideoPlayerResize() {
    return void 0;
  };

  var getResizeCallback = function getResizeCallback(_ref4) {
    var reactElement = _ref4.reactElement;

    return utilities.makeInstanceCallback({ context: reactElement,
      func: handleVideoPlayerResize });
  };

  var initPlayerResizeHandlers = function initPlayerResizeHandlers(_ref5) {
    var reactElement = _ref5.reactElement;

    if (reactElement.props.resize && reactElement.props.resizeOptions) {
      callback = getResizeCallback({ reactElement: reactElement });
      resizingController.addResizeEventListener({ callback: callback,
        resizeOptionsFromProps: reactElement.props.resizeOptions });
    }
  };

  var getHandleVideoPlayerReadyCallback = function getHandleVideoPlayerReadyCallback(_ref6) {
    var reactElement = _ref6.reactElement;

    return function () {
      removeReactIdFromData({ reactElement: reactElement });
      initPlayerResizeHandlers({ reactElement: reactElement });

      if (reactElement.props.onReady) {
        reactElement.props.onReady();
      }
    };
  };

  var initializePlayer = function initializePlayer(_ref7) {
    var reactElement = _ref7.reactElement;
    var options = _ref7.options;

    reactElement.player = vjs(utilities.getVideoPlayerEl(reactElement), options);
    reactElement.player.ready(utilities.makeInstanceCallback({
      context: reactElement,
      func: getHandleVideoPlayerReadyCallback({ reactElement: reactElement })
    }));
  };

  var mountVideoPlayer = function mountVideoPlayer(_ref8) {
    var reactElement = _ref8.reactElement;

    var src = reactElement.props.src;
    var options = utilities.getVideoPlayerOptions(reactElement.props);

    initializePlayer({ reactElement: reactElement, options: options });
    initializeEventListeners(reactElement.props.eventListeners);
    initializePlugins({ plugins: reactElement.props.plugins,
      player: reactElement.player });
    reactElement.player.src(src);
    endlessModeController.maybeSetEndlessMode({ reactElement: reactElement,
      nextVideoCallback: reactElement.props.handleNextVideo });
    eventsController.listenForPlayerEvents({ player: reactElement.player,
      reportingCallback: reportingCallback });
  };

  var unmountVideoPlayer = function unmountVideoPlayer(_ref9) {
    var reactElement = _ref9.reactElement;

    reactElement.player.dispose();
  };

  return {
    mountVideoPlayer: mountVideoPlayer,
    unmountVideoPlayer: unmountVideoPlayer
  };
};

exports['default'] = getController;
module.exports = exports['default'];