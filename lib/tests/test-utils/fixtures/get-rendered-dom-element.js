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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createDocument = require('./create-document');

var _createDocument2 = _interopRequireDefault(_createDocument);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var renderIntoDocument = _reactAddons2['default'].addons.TestUtils.renderIntoDocument;

var getDomElementFromComponent = function getDomElementFromComponent(Component, properties) {
  var document = _createDocument2['default']();
  return renderIntoDocument(_react2['default'].createElement(Component, properties), document.body);
};

exports['default'] = getDomElementFromComponent;
module.exports = exports['default'];