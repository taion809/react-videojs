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

var getResizingController = function getResizingController() {
  return {
    setResizeEventListener: function setResizeEventListener() {},
    removeResizeEventListener: function removeResizeEventListener() {}
  };
};

var getEventsController = function getEventsController() {
  return {
    listenForPlayerEvents: function listenForPlayerEvents() {}
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
  var eventsController = getEventsController();
  var endlessModeController = getEndlessModeController();
  var resizingController = getResizingController();
  var vjs = getVjs();
  var utilities = getUtilities();
  var controller = _videoJsInitializeController2['default']({
    reportingCallback: function reportingCallback() {
      return void 0;
    },
    document: {},
    vjs: vjs,
    utilities: utilities,
    resizingController: resizingController,
    eventsController: eventsController,
    endlessModeController: endlessModeController });

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
  var eventsController = getEventsController();
  var endlessModeController = getEndlessModeController();
  var resizingController = getResizingController();
  var vjs = getVjs();
  var utilities = getUtilities();
  var controller = _videoJsInitializeController2['default']({
    reportingCallback: function reportingCallback() {
      return void 0;
    },
    document: {},
    vjs: vjs,
    utilities: utilities,
    resizingController: resizingController,
    eventsController: eventsController,
    endlessModeController: endlessModeController });

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