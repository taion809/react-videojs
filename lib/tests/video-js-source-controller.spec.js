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

var _videoJsSourceController = require('../video-js-source-controller');

var _videoJsSourceController2 = _interopRequireDefault(_videoJsSourceController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getPlayer = function getPlayer() {
  return {
    src: function src(value) {
      this.source = value;
    },

    currentTime: function currentTime(value) {
      return {
        play: function play() {
          this.time = value;
        }
      };
    }
  };
};

_tape2['default']('maybePlayNewSource() with current source same as new source', function (assert) {
  var player = getPlayer();
  var currentSrc = 'foo';
  var newSrc = 'foo';

  _videoJsSourceController2['default']().maybePlayNewSource({ player: player, currentSrc: currentSrc, newSrc: newSrc });

  var actualSource = player.source;
  var expectedSource = undefined;
  var actualTime = player.time;
  var expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source not set');
  assert.equal(actualTime, expectedTime, 'Time not set');

  assert.end();
});

_tape2['default']('maybePlayNewSource() with current source different from new source', function (assert) {
  var player = getPlayer();
  var currentSrc = 'foo';
  var newSrc = 'bar';

  _videoJsSourceController2['default']().maybePlayNewSource({ player: player, currentSrc: currentSrc, newSrc: newSrc });

  var actualSource = player.source;
  var expectedSource = 'bar';
  var actualTime = player.time;
  var expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source set');
  assert.equal(actualTime, expectedTime, 'Time not set');

  assert.end();
});

_tape2['default']('maybePlayNewSource() with current isEndless !== willBeEndless', function (assert) {
  var player = getPlayer();
  var currentSrc = 'foo';
  var newSrc = 'foo';

  _videoJsSourceController2['default']().maybePlayNewSource({ player: player, currentSrc: currentSrc, newSrc: newSrc, 'true': true, 'false': false });

  var actualSource = player.source;
  var expectedSource = undefined;
  var actualTime = player.time;
  var expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source not set');
  assert.equal(actualTime, expectedTime, 'Time not set');

  assert.end();
});

_tape2['default']('maybePlayNewSource() with current isEndless === willBeEndless', function (assert) {
  var player = getPlayer();
  var currentSrc = 'foo';
  var newSrc = 'foo';

  _videoJsSourceController2['default']().maybePlayNewSource({ player: player, currentSrc: currentSrc, newSrc: newSrc, 'true': true, 'true': true });

  var actualSource = player.source;
  var expectedSource = undefined;
  var actualTime = player.time;
  var expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source not set');
  assert.equal(actualTime, expectedTime, 'Time set');

  assert.end();
});