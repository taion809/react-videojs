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
