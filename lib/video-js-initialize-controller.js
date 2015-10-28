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
  var eventsController = _ref.eventsController;
  var endlessModeController = _ref.endlessModeController;

  console.log(222, eventsController);

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
    }
    reactElement.player.src(src);
    endlessModeController.maybeSetEndlessMode({ reactElement: reactElement,
      nextVideoCallback: reactElement.props.handleNextVideo });
    eventsController.listenForPlayerEvents({ player: reactElement.player, reportingCallback: reportingCallback });
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