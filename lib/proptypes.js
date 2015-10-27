'use strict';

exports.__esModule = true;

var _react = require('react');

var array = _react.PropTypes.array;
var bool = _react.PropTypes.bool;
var element = _react.PropTypes.element;
var func = _react.PropTypes.func;
var number = _react.PropTypes.number;
var object = _react.PropTypes.object;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;

var propTypes = {
  src: array.isRequired,
  height: number,
  width: number,
  endlessMode: bool,
  options: object,
  onReady: func,
  eventListeners: object,
  resize: bool,
  resizeOptions: shape({
    aspectRatio: number,
    shortWindowVideoHeightAdjustment: number,
    defaultVideoWidthAdjustment: number,
    debounceTime: number
  }),
  vjsDefaultSkin: bool,
  vjsBigPlayCentered: bool,
  children: element,
  dispose: bool,
  onNextVideo: func,
  reportingCallback: func
};

exports['default'] = propTypes;
module.exports = exports['default'];