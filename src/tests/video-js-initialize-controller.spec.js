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

import controllerFactory from '../video-js-initialize-controller';
import test  from 'tape';

const getEndlessModeController = () => ({
  maybeSetEndlessMode() {}
});

const getResizingController = () => ({
  setResizeEventListener() {},
  removeResizeEventListener() {}
});

const getEventsController = () => ({
  listenForPlayerEvents() {}
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
  const eventsController = getEventsController();
  const endlessModeController = getEndlessModeController();
  const resizingController = getResizingController();
  const vjs = getVjs();
  const utilities = getUtilities();
  const controller = controllerFactory({
    reportingCallback:() => void 0,
    document: {},
    vjs,
    utilities,
    resizingController,
    eventsController,
    endlessModeController});

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
  const eventsController = getEventsController();
  const endlessModeController = getEndlessModeController();
  const resizingController = getResizingController();
  const vjs = getVjs();
  const utilities = getUtilities();
  const controller = controllerFactory({
    reportingCallback:() => void 0,
    document: {},
    vjs,
    utilities,
    resizingController,
    eventsController,
    endlessModeController});

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
