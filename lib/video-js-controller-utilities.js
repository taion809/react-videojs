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