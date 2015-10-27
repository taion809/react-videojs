'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJsInitializeController = require('../video-js-initialize-controller');

var _videoJsInitializeController2 = _interopRequireDefault(_videoJsInitializeController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getEndlessModeController = function getEndlessModeController() {
  return {
    maybeSetEndlessMode: function maybeSetEndlessMode() {}
  };
};

var getVjs = function getVjs() {
  return function () {
    return {
      on: function on() {},
      ready: function ready() {},
      src: function src() {
        this.srcFunctionCalled = true;
      },
      dispose: function dispose() {
        this.disposeFunctionCalled = true;
      }
    };
  };
};

var getUtilities = function getUtilities() {
  return {
    getVideoPlayerOptions: function getVideoPlayerOptions(props) {},
    getVideoPlayerEl: function getVideoPlayerEl(reactElement) {},
    makeInstanceCallback: function makeInstanceCallback() {}
  };
};

var getReactElement = function getReactElement() {
  return {
    props: {
      src: 'foo',
      eventListeners: {},
      options: {},
      plugins: []
    }
  };
};

_tape2['default']('mountVideoPlayer()', function (assert) {
  var controller = _videoJsInitializeController2['default']({
    reportingCallback: function reportingCallback() {
      return void 0;
    },
    document: {},
    vjs: getVjs(),
    utilities: getUtilities(),
    endlessModeController: getEndlessModeController() });

  var reactElement = getReactElement();

  var actual = typeof reactElement.player;
  var expected = 'undefined';

  assert.equal(actual, expected, 'player is undefined');

  controller.mountVideoPlayer({ reactElement: reactElement });

  actual = typeof reactElement.player;
  expected = 'object';

  assert.equal(actual, expected, 'player is defined');

  actual = reactElement.player.srcFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'src function was called');

  actual = reactElement.player.disposeFunctionCalledFunctionCalled;
  expected = undefined;

  assert.equal(actual, expected, 'dispose function was not called');

  assert.end();
});

_tape2['default']('unmountVideoPlayer()', function (assert) {
  var controller = _videoJsInitializeController2['default']({
    reportingCallback: function reportingCallback() {
      return void 0;
    },
    document: {},
    vjs: getVjs(),
    utilities: getUtilities(),
    endlessModeController: getEndlessModeController() });

  var reactElement = getReactElement();
  var actual = undefined;
  var expected = undefined;

  controller.mountVideoPlayer({ reactElement: reactElement });
  controller.unmountVideoPlayer({ reactElement: reactElement });

  actual = reactElement.player.disposeFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'dispose function was called');

  assert.end();
});