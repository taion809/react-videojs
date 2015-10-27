import controllerFactory from '../video-js-resizing-controller';
import test  from 'tape';

const getWindow = () => {
  return {
    addEventListener(event, listener) {
      this.hasListener = true;
    },

    removeEventListener() {
      this.hasListener = false;
    }
  };
};

test('setResizeEventListener togglers setting and unsetting listener, depending on value of willBeResizeable', assert => {
  const propsResizeOptions = {};
  const setResizeEventListenerCallback = () => 'foo';
  const win = getWindow();
  const controller = controllerFactory({window: win});
  let actual;
  let expected;

  controller.setResizeEventListener({isResizable:false, willBeResizeable:true,
    propsResizeOptions, setResizeEventListenerCallback});

  actual = win.hasListener;
  expected = true;
  assert.equal(actual, expected, 'Listener is set');

  controller.setResizeEventListener({isResizable:true, willBeResizeable:false,
    propsResizeOptions, setResizeEventListenerCallback});

  actual = win.hasListener;
  expected = false;
  assert.equal(actual, expected, 'Listener is not set');

  assert.end();
});

test('setResizeEventListener() doesn\'t do anything if first isResizable and willBeResizeable are equal', assert => {
  const propsResizeOptions = {};
  const setResizeEventListenerCallback = () => 'foo';
  const win = getWindow();
  const controller = controllerFactory({window: win});
  let actual;
  let expected;

  controller.setResizeEventListener({isResizable: true, willBeResizeable: true,
    propsResizeOptions, setResizeEventListenerCallback});

  actual = win.hasListener;
  expected = undefined;
  assert.equal(actual, expected, 'Listener is not set');

  controller.setResizeEventListener({isResizable: false, willBeResizeable: false,
    propsResizeOptions, setResizeEventListenerCallback});

  actual = win.hasListener;
  expected = undefined;
  assert.equal(actual, expected, 'Listener is not set');

  assert.end();
});
