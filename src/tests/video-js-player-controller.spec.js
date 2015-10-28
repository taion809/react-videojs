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

import controllerFactory from '../video-js-player-controller';
import test  from 'tape';

const getPlayer = () => ({
  foo(a, b) {
    this.sum = a + b;
  }
});

test('doCommand() runs a command on a player', assert => {
  const player = getPlayer();
  const commandName = 'foo';
  const controller = controllerFactory();
  let actual;
  let expected;

  controller.doCommand({player, commandFunctionName:'foo', commandArgs:[100, 5]});

  actual = player.sum;
  expected = 105;

  assert.equal(actual, expected, 'player ran command');

  assert.end();

});
