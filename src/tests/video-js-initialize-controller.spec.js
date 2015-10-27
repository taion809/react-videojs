import controllerFactory from '../video-js-initialize-controller';
import test  from 'tape';

const getEndlessModeController = () => ({
  maybeSetEndlessMode() {}
});

const getVjs = () => () => ({
  on() {},
  ready() {},
  src() {
    this.srcFunctionCalled = true;
  },
  dispose() {
    this.disposeFunctionCalled = true;
  }
});

const getUtilities = () => ({
  getVideoPlayerOptions(props) {},
  getVideoPlayerEl(reactElement) {},
  makeInstanceCallback() {}
});

const getReactElement = () => ({
  props: {
    src: 'foo',
    eventListeners: {},
    options: {},
    plugins: [],
  }
});

test('mountVideoPlayer()', assert => {
  const controller = controllerFactory({
    reportingCallback:() => void 0,
    document: {},
    vjs: getVjs(),
    utilities: getUtilities(),
    endlessModeController: getEndlessModeController()});

  const reactElement = getReactElement();

  let actual = typeof reactElement.player;
  let expected = 'undefined';

  assert.equal(actual, expected, 'player is undefined');

  controller.mountVideoPlayer({reactElement});

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

test('unmountVideoPlayer()', assert => {
  const controller = controllerFactory({
    reportingCallback:() => void 0,
    document: {},
    vjs: getVjs(),
    utilities: getUtilities(),
    endlessModeController: getEndlessModeController()});

  const reactElement = getReactElement();
  let actual;
  let expected;

  controller.mountVideoPlayer({reactElement});
  controller.unmountVideoPlayer({reactElement});

  actual = reactElement.player.disposeFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'dispose function was called');

  assert.end();
});
