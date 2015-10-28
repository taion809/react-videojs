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