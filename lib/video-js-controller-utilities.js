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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultWidth = 640;
var defaultHeight = 480;

var getUtilities = function getUtilities(_ref) {
  var React = _ref.React;
  var document = _ref.document;
  var defaultVideoOptions = _ref.defaultVideoOptions;

  var getVideoPlayer = function getVideoPlayer(reactElement) {
    return reactElement.player;
  };

  var getVideoPlayerEl = function getVideoPlayerEl(reactElement) {
    return document.getElementById(reactElement.idName);
  };

  var getVideoPlayerOptions = function getVideoPlayerOptions(props) {
    var height = props.resize ? auto : props.height || defaultHeight;
    var width = props.resize ? auto : props.width || defaultWidth;
    return _extends({}, props.options, { width: width, height: height }, defaultVideoOptions);
  };

  var makeInstanceCallback = function makeInstanceCallback(context, func) {
    return function () {
      if (context && func) {
        return func.call(context);
      }
      return function () {
        return void 0;
      };
    };
  };

  return {
    getVideoPlayer: getVideoPlayer,
    getVideoPlayerEl: getVideoPlayerEl,
    getVideoPlayerOptions: getVideoPlayerOptions,
    makeInstanceCallback: makeInstanceCallback
  };
};

exports["default"] = getUtilities;
module.exports = exports["default"];