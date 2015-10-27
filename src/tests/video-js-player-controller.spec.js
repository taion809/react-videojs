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
