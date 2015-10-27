'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var getDomElementFromComponent = function getDomElementFromComponent(Component, properties, selector) {
  var el = _react2['default'].createElement(Component, properties);
  var $ = _cheerio2['default'].load(_react2['default'].renderToStaticMarkup(el));
  return $(selector);
};

exports['default'] = getDomElementFromComponent;
module.exports = exports['default'];