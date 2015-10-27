import controllerFactory from '../video-js-controller';
import test  from 'tape';

const controllerFactories = {
  getEndlessModeController: () => ({ setEndlessModeListener() {} }),
  getInitializeController: () => ({ mountVideoPlayer() {},
    unmountVideoPlayer() {} }),
  getPlayerController: () => ({ doCommand() {} }),
  getResizingController: () => ({ setResizeEventListener() {},
    removeResizeEventListener() {} }),
  getSourceController: () => ({ maybePlayNewSource() {} }),
  getUtilities:() => ({ makeInstanceCallback() {} })
}

test('controller', assert => {
  const controller = controllerFactory({
    React:{},
    window: {},
    document: {},
    vjs: {},
    defaultVideoOptions: {},
    controllerFactories});

  const actual = Object.keys(controller).every(functionName => {
    return typeof controller[functionName] === 'function';
  });

  const expected = true;

  assert.equal(actual, expected, 'controller has functions');
  assert.end();
});

