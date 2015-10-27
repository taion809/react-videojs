"use strict";

exports.__esModule = true;
var noop = function noop() {};

var getDefaultProps = function getDefaultProps(defaultVideoOptions) {
  return {
    endlessMode: false,
    eventListeners: {},
    onNextVideo: noop,
    onReady: noop,
    options: defaultVideoOptions,
    resize: false,
    resizeOptions: {},
    vjsBigPlayCentered: true,
    vjsDefaultSkin: true
  };
};

exports["default"] = getDefaultProps;
module.exports = exports["default"];