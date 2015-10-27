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

