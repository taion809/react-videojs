import controllerFactory from '../video-js-next-video-controller';
import test  from 'tape';

const getReactElement = () => {
  return {
    props: {
      onNextVideo: function() {
        this.onNextVideoFunctionCalled = true;
      }
    }
  };
};

test('getHandleNextVideoCallback()', assert => {
  const reactElement = getReactElement();
  const controller = controllerFactory();
  const handler = controller.getHandleNextVideoCallback({reactElement});
  let actual = reactElement.props.onNextVideoFunctionCalled;
  let expected = undefined;

  assert.equal(actual, expected, 'onNextVideo hasn\'t been called');

  handler();

  actual = reactElement.props.onNextVideoFunctionCalled;
  expected = true;

  assert.equal(actual, expected, 'onNextVideo has been called');

  assert.end();

});

test('maybeHandleNextVideo', assert => {
  let called = false;
  const callback = () => called = true;
  const controller = controllerFactory();
  let actual;
  let expected;

  controller.maybeHandleNextVideo({hasEnded: false, callback});

  actual = called;
  expected = false;

  assert.equal(actual, expected, 'callback not called');

  controller.maybeHandleNextVideo({hasEnded: true, callback});

  actual = called;
  expected = true;

  assert.equal(actual, expected, 'callback called');

  assert.end();

});
