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

var _videoJsPlayerController = require('../video-js-player-controller');

var _videoJsPlayerController2 = _interopRequireDefault(_videoJsPlayerController);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getPlayer = function getPlayer() {
  return {
    foo: function foo(a, b) {
      this.sum = a + b;
    }
  };
};

_tape2['default']('doCommand() runs a command on a player', function (assert) {
  var player = getPlayer();
  var commandName = 'foo';
  var controller = _videoJsPlayerController2['default']();
  var actual = undefined;
  var expected = undefined;

  controller.doCommand({ player: player, commandFunctionName: 'foo', commandArgs: [100, 5] });

  actual = player.sum;
  expected = 105;

  assert.equal(actual, expected, 'player ran command');

  assert.end();
});