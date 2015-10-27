'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJsController = require('../video-js-controller');

var _videoJsController2 = _interopRequireDefault(_videoJsController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var controllerFactories = {
  getEndlessModeController: function getEndlessModeController() {
    return { setEndlessModeListener: function setEndlessModeListener() {} };
  },
  getInitializeController: function getInitializeController() {
    return { mountVideoPlayer: function mountVideoPlayer() {},
      unmountVideoPlayer: function unmountVideoPlayer() {} };
  },
  getPlayerController: function getPlayerController() {
    return { doCommand: function doCommand() {} };
  },
  getResizingController: function getResizingController() {
    return { setResizeEventListener: function setResizeEventListener() {},
      removeResizeEventListener: function removeResizeEventListener() {} };
  },
  getSourceController: function getSourceController() {
    return { maybePlayNewSource: function maybePlayNewSource() {} };
  },
  getUtilities: function getUtilities() {
    return { makeInstanceCallback: function makeInstanceCallback() {} };
  }
};

_tape2['default']('controller', function (assert) {
  var controller = _videoJsController2['default']({
    React: {},
    window: {},
    document: {},
    vjs: {},
    defaultVideoOptions: {},
    controllerFactories: controllerFactories });

  var actual = Object.keys(controller).every(function (functionName) {
    return typeof controller[functionName] === 'function';
  });

  var expected = true;

  assert.equal(actual, expected, 'controller has functions');
  assert.end();
});