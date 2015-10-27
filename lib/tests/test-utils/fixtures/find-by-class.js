'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

var findByClass = function findByClass(dom, selector) {
  var subject = selector.slice(1);

  return TestUtils.findRenderedDOMComponentWithClass(dom, subject);
};

exports['default'] = findByClass;
module.exports = exports['default'];