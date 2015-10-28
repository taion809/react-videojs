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