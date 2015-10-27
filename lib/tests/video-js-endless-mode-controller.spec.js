'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJsEndlessModeController = require('../video-js-endless-mode-controller');

var _videoJsEndlessModeController2 = _interopRequireDefault(_videoJsEndlessModeController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getUtilities = function getUtilities() {
  return {
    makeInstanceCallback: function makeInstanceCallback() {
      this.makeInstanceCallbackFunctionCalled = true;
    }
  };
};

var getReactElement = function getReactElement() {
  return {
    props: {},
    player: {}
  };
};

_tape2['default']('maybeSetEndlessMode()', function (assert) {
  var utilities = getUtilities();
  var controller = _videoJsEndlessModeController2['default']({ utilities: utilities });
  var reactElement = getReactElement();
  var actual = utilities.makeInstanceCallbackFunctionCalled;
  var expected = undefined;

  assert.equal(actual, expected, 'makeInstanceCallback not called');

  controller.maybeSetEndlessMode({ reactElement: reactElement });

  actual = utilities.makeInstanceCallbackFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'makeInstanceCallback called');

  assert.end();
});