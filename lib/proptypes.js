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

var _react = require('react');

var array = _react.PropTypes.array;
var arrayOf = _react.PropTypes.arrayOf;
var bool = _react.PropTypes.bool;
var element = _react.PropTypes.element;
var func = _react.PropTypes.func;
var number = _react.PropTypes.number;
var object = _react.PropTypes.object;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;

var propTypes = {
  src: arrayOf(shape({
    type: string.isRequired,
    src: string.isRequired
  }).isRequired).isRequired,
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