"use strict";

exports.__esModule = true;
var getNextVideoController = function getNextVideoController() {
  //TODO: do we need this module? It's not currently used.

  var maybeHandleNextVideo = function maybeHandleNextVideo(_ref) {
    var hasEnded = _ref.hasEnded;
    var callback = _ref.callback;

    if (hasEnded) {
      callback();
    }
  };

  var getHandleNextVideoCallback = function getHandleNextVideoCallback(_ref2) {
    var reactElement = _ref2.reactElement;

    return function () {
      if (reactElement.props.onNextVideo) {
        reactElement.props.onNextVideo();
      }
    };
  };

  return {
    getHandleNextVideoCallback: getHandleNextVideoCallback,
    maybeHandleNextVideo: maybeHandleNextVideo
  };
};

exports["default"] = getNextVideoController;
module.exports = exports["default"];