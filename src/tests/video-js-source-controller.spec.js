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

import controllerFactory from '../video-js-source-controller';
import test  from 'tape';

const getPlayer = () => {
  return {
    src(value) {
      this.source = value;
    },

    currentTime(value) {
      return {
        play() {
          this.time = value;
        }
      };
    }
  };
};

test('maybePlayNewSource() with current source same as new source', assert => {
  const player = getPlayer();
  const currentSrc = 'foo';
  const newSrc = 'foo';

  controllerFactory().maybePlayNewSource({player, currentSrc, newSrc});

  const actualSource = player.source;
  const expectedSource = undefined;
  const actualTime = player.time;
  const expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source not set');
  assert.equal(actualTime, expectedTime, 'Time not set');

  assert.end();
});


test('maybePlayNewSource() with current source different from new source', assert => {
  const player = getPlayer();
  const currentSrc = 'foo';
  const newSrc = 'bar';

  controllerFactory().maybePlayNewSource({player, currentSrc, newSrc});

  const actualSource = player.source;
  const expectedSource = 'bar';
  const actualTime = player.time;
  const expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source set');
  assert.equal(actualTime, expectedTime, 'Time not set');

  assert.end();
});

test('maybePlayNewSource() with current isEndless !== willBeEndless', assert => {
  const player = getPlayer();
  const currentSrc = 'foo';
  const newSrc = 'foo';

  controllerFactory().maybePlayNewSource({player, currentSrc, newSrc, true, false});

  const actualSource = player.source;
  const expectedSource = undefined;
  const actualTime = player.time;
  const expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source not set');
  assert.equal(actualTime, expectedTime, 'Time not set');

  assert.end();
});

test('maybePlayNewSource() with current isEndless === willBeEndless', assert => {
  const player = getPlayer();
  const currentSrc = 'foo';
  const newSrc = 'foo';

  controllerFactory().maybePlayNewSource({player, currentSrc, newSrc, true, true});

  const actualSource = player.source;
  const expectedSource = undefined;
  const actualTime = player.time;
  const expectedTime = undefined;
  assert.equal(actualSource, expectedSource, 'Source not set');
  assert.equal(actualTime, expectedTime, 'Time set');

  assert.end();
});
