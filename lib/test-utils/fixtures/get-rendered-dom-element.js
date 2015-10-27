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