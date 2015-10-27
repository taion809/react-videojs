"use strict";

exports.__esModule = true;
var getController = function getController() {

  var setVideoPlayerSrc = function setVideoPlayerSrc(player, src) {
    player.src(src);
  };

  var restartVideo = function restartVideo(player) {
    player.currentTime(0).play();
  };

  var maybePlayNewSource = function maybePlayNewSource(_ref) {
    var player = _ref.player;
    var currentSrc = _ref.currentSrc;
    var newSrc = _ref.newSrc;
    var isEndless = _ref.isEndless;
    var willBeEndless = _ref.willBeEndless;

    if (currentSrc !== newSrc) {
      setVideoPlayerSrc(player, newSrc);
      return;
    }

    if (isEndless === willBeEndless) {
      restartVideo(player);
    }
  };

  return {
    maybePlayNewSource: maybePlayNewSource
  };
};

exports["default"] = getController;
module.exports = exports["default"];