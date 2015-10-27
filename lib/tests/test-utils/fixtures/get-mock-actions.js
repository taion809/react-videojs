'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getMockActions = function getMockActions() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (actions, action) {
    var _extends2;

    if (typeof action === 'object') {
      return _extends({}, actions, action);
    }
    return _extends({}, actions, (_extends2 = {}, _extends2[action] = function () {}, _extends2));
  }, {});
};

exports['default'] = getMockActions;
module.exports = exports['default'];