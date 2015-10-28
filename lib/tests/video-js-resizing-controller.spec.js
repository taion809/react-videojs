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

var _videoJsResizingController = require('../video-js-resizing-controller');

var _videoJsResizingController2 = _interopRequireDefault(_videoJsResizingController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getWindow = function getWindow() {
  return {
    addEventListener: function addEventListener(event, listener) {
      this.hasListener = true;
    },

    removeEventListener: function removeEventListener() {
      this.hasListener = false;
    }
  };
};

_tape2['default']('setResizeEventListener togglers setting and unsetting listener, depending on value of willBeResizeable', function (assert) {
  var propsResizeOptions = {};
  var setResizeEventListenerCallback = function setResizeEventListenerCallback() {
    return 'foo';
  };
  var win = getWindow();
  var controller = _videoJsResizingController2['default']({ window: win });
  var actual = undefined;
  var expected = undefined;

  controller.setResizeEventListener({ isResizable: false, willBeResizeable: true,
    propsResizeOptions: propsResizeOptions, setResizeEventListenerCallback: setResizeEventListenerCallback });

  actual = win.hasListener;
  expected = true;
  assert.equal(actual, expected, 'Listener is set');

  controller.setResizeEventListener({ isResizable: true, willBeResizeable: false,
    propsResizeOptions: propsResizeOptions, setResizeEventListenerCallback: setResizeEventListenerCallback });

  actual = win.hasListener;
  expected = false;
  assert.equal(actual, expected, 'Listener is not set');

  assert.end();
});

_tape2['default']('setResizeEventListener() doesn\'t do anything if first isResizable and willBeResizeable are equal', function (assert) {
  var propsResizeOptions = {};
  var setResizeEventListenerCallback = function setResizeEventListenerCallback() {
    return 'foo';
  };
  var win = getWindow();
  var controller = _videoJsResizingController2['default']({ window: win });
  var actual = undefined;
  var expected = undefined;

  controller.setResizeEventListener({ isResizable: true, willBeResizeable: true,
    propsResizeOptions: propsResizeOptions, setResizeEventListenerCallback: setResizeEventListenerCallback });

  actual = win.hasListener;
  expected = undefined;
  assert.equal(actual, expected, 'Listener is not set');

  controller.setResizeEventListener({ isResizable: false, willBeResizeable: false,
    propsResizeOptions: propsResizeOptions, setResizeEventListenerCallback: setResizeEventListenerCallback });

  actual = win.hasListener;
  expected = undefined;
  assert.equal(actual, expected, 'Listener is not set');

  assert.end();
});