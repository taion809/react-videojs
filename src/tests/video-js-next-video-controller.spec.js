/*
Copyright 2015 by Grovo
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
