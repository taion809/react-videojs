import controllerFactory from '../video-js-endless-mode-controller';
import test  from 'tape';

const getUtilities = () => ({
  makeInstanceCallback() {
    this.makeInstanceCallbackFunctionCalled = true;
  }
});

const getReactElement = () => ({
  props: {},
  player: {}
});

test('maybeSetEndlessMode()', assert => {
  const utilities = getUtilities();
  const controller = controllerFactory({utilities});
  const reactElement = getReactElement();
  let actual = utilities.makeInstanceCallbackFunctionCalled;
  let expected = undefined;

  assert.equal(actual, expected, 'makeInstanceCallback not called');

  controller.maybeSetEndlessMode({reactElement});

  actual = utilities.makeInstanceCallbackFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'makeInstanceCallback called');

  assert.end();
});
