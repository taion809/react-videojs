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