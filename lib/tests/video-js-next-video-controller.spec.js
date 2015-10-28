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

var _videoJsNextVideoController = require('../video-js-next-video-controller');

var _videoJsNextVideoController2 = _interopRequireDefault(_videoJsNextVideoController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getReactElement = function getReactElement() {
  return {
    props: {
      onNextVideo: function onNextVideo() {
        this.onNextVideoFunctionCalled = true;
      }
    }
  };
};

_tape2['default']('getHandleNextVideoCallback()', function (assert) {
  var reactElement = getReactElement();
  var controller = _videoJsNextVideoController2['default']();
  var handler = controller.getHandleNextVideoCallback({ reactElement: reactElement });
  var actual = reactElement.props.onNextVideoFunctionCalled;
  var expected = undefined;

  assert.equal(actual, expected, 'onNextVideo hasn\'t been called');

  handler();

  actual = reactElement.props.onNextVideoFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'onNextVideo has been called');

  assert.end();
});

_tape2['default']('maybeHandleNextVideo', function (assert) {
  var called = false;
  var callback = function callback() {
    return called = true;
  };
  var controller = _videoJsNextVideoController2['default']();
  var actual = undefined;
  var expected = undefined;

  controller.maybeHandleNextVideo({ hasEnded: false, callback: callback });

  actual = called;
  expected = false;

  assert.equal(actual, expected, 'callback not called');

  controller.maybeHandleNextVideo({ hasEnded: true, callback: callback });

  actual = called;
  expected = true;

  assert.equal(actual, expected, 'callback called');

  assert.end();
});