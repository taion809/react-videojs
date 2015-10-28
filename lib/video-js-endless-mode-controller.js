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
  var utilities = _ref.utilities;

  var getHandleNextVideoCallback = function getHandleNextVideoCallback(props) {
    return function () {
      if (props.onNextVideo) {
        props.onNextVideo();
      };
    };
  };

  var maybeSetEndlessMode = function maybeSetEndlessMode(_ref2) {
    var reactElement = _ref2.reactElement;

    var player = reactElement.player;
    var callback = utilities.makeInstanceCallback({ context: { props: reactElement.props },
      func: getHandleNextVideoCallback(reactElement.props) });
    if (reactElement.props.endlessMode) {
      addEndlessMode({ player: player, callback: callback });
    }
  };

  var maybeHandleNextVideo = function maybeHandleNextVideo(_ref3) {
    var hasEnded = _ref3.hasEnded;
    var callback = _ref3.callback;

    if (hasEnded) {
      callback();
    }
  };

  var addEndlessMode = function addEndlessMode(_ref4) {
    var player = _ref4.player;
    var callback = _ref4.callback;

    var hasEnded = player.ended();
    player.on('ended', callback);

    maybeHandleNextVideo({ hasEnded: hasEnded, callback: callback });
  };

  var removeEndlessMode = function removeEndlessMode(_ref5) {
    var player = _ref5.player;
    var callback = _ref5.callback;
  };

  //player.off('ended', callback);
  var setEndlessModeListener = function setEndlessModeListener(_ref6) {
    var player = _ref6.player;
    var willBeEndless = _ref6.willBeEndless;
    var callback = _ref6.callback;

    if (willBeEndless) {
      addEndlessMode(player, callback);
      return;
    }
    removeEndlessMode(player, callback);
  };

  var setEndlessMode = function setEndlessMode(_ref7) {
    var isEndless = _ref7.isEndless;
    var willBeEndless = _ref7.willBeEndless;
    var player = _ref7.player;
    var callback = _ref7.callback;

    if (isEndless !== willBeEndless) {
      setEndlessModeListener({ willBeEndless: willBeEndless });
    }
  };

  return {
    maybeSetEndlessMode: maybeSetEndlessMode,
    setEndlessModeListener: setEndlessModeListener
  };
};

exports['default'] = getController;
module.exports = exports['default'];