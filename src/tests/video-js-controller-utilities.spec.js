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

import controllerFactory from '../video-js-controller-utilities';
import test  from 'tape';

const getReact = () => ({});

const getDocument = () => ({
  getElementById(idName) {
    return {id: idName};
  }
});

const getDefaultVideoOptions = () => ({});

const getReactElement = () => ({
  player: {},
  idName: 'foo'
});

test('getVideoPlayer()', assert => {
  const React = getReact;
  const document = getDocument();
  const defaultVideoOptions = getDefaultVideoOptions();
  const controller =  controllerFactory({React, document, defaultVideoOptions});
  const reactElement = getReactElement();
  let actual = typeof controller.getVideoPlayer(reactElement);
  let expected = 'object';

  assert.equal(actual, expected, 'player is an object');

  assert.end();
});

test('getVideoPlayer()', assert => {
  const React = getReact;
  const document = getDocument();
  const defaultVideoOptions = getDefaultVideoOptions();
  const controller =  controllerFactory({React, document, defaultVideoOptions});
  const reactElement = getReactElement();
  let actual = controller.getVideoPlayerEl(reactElement);
  let expected = {id: 'foo'};

  assert.deepEqual(actual, expected, 'getsVideoElement');

  assert.end();
});


test('getVideoPlayerOptions()', assert => {
  const React = getReact;
  const document = getDocument();
  const defaultVideoOptions = {height: 50};
  const controller =  controllerFactory({React, document, defaultVideoOptions});
  const reactElement = getReactElement();
  let actual = controller.getVideoPlayerOptions({options: {a:1}});
  let expected = {a: 1, width: 640, height: 50};

  assert.deepEqual(actual, expected, 'gets correct video options');

  assert.end();
});

test('makeInstanceCallback()', assert => {
  const React = getReact;
  const document = getDocument();
  const defaultVideoOptions = getDefaultVideoOptions();
  const controller =  controllerFactory({React, document, defaultVideoOptions});
  const reactElement = getReactElement();
  const context = {foo: 'bar'};
  const func = function() { return this.foo };
  let actual = controller.makeInstanceCallback(context, func)();
  let expected = 'bar'

  assert.equal(actual, expected, 'calls function with correct context');

  assert.end();
});

/*
const getVideoPlayer = reactElement => reactElement.player;

  const getVideoPlayerEl = reactElement => document.
    getElementById(reactElement.idName);

  const getVideoPlayerOptions = props => {
    const height = props.resize ? auto : (props.height || defaultHeight);
    const width = props.resize ? auto : (props.width || defaultWidth);
    return {...props.options, ...{ width, height }, ...defaultVideoOptions};
  };

  const makeInstanceCallback = ({context, func}) => {
    return () => {
      func.call(context);
    };
  };
*/
