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

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJsControllerUtilities = require('../video-js-controller-utilities');

var _videoJsControllerUtilities2 = _interopRequireDefault(_videoJsControllerUtilities);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var getReact = function getReact() {
  return {};
};

var getDocument = function getDocument() {
  return {
    getElementById: function getElementById(idName) {
      return { id: idName };
    }
  };
};

var getDefaultVideoOptions = function getDefaultVideoOptions() {
  return {};
};

var getReactElement = function getReactElement() {
  return {
    player: {},
    idName: 'foo'
  };
};

_tape2['default']('getVideoPlayer()', function (assert) {
  var React = getReact;
  var document = getDocument();
  var defaultVideoOptions = getDefaultVideoOptions();
  var controller = _videoJsControllerUtilities2['default']({ React: React, document: document, defaultVideoOptions: defaultVideoOptions });
  var reactElement = getReactElement();
  var actual = typeof controller.getVideoPlayer(reactElement);
  var expected = 'object';

  assert.equal(actual, expected, 'player is an object');

  assert.end();
});

_tape2['default']('getVideoPlayer()', function (assert) {
  var React = getReact;
  var document = getDocument();
  var defaultVideoOptions = getDefaultVideoOptions();
  var controller = _videoJsControllerUtilities2['default']({ React: React, document: document, defaultVideoOptions: defaultVideoOptions });
  var reactElement = getReactElement();
  var actual = controller.getVideoPlayerEl(reactElement);
  var expected = { id: 'foo' };

  assert.deepEqual(actual, expected, 'getsVideoElement');

  assert.end();
});

_tape2['default']('getVideoPlayerOptions()', function (assert) {
  var React = getReact;
  var document = getDocument();
  var defaultVideoOptions = { height: 50 };
  var controller = _videoJsControllerUtilities2['default']({ React: React, document: document, defaultVideoOptions: defaultVideoOptions });
  var reactElement = getReactElement();
  var actual = controller.getVideoPlayerOptions({ options: { a: 1 } });
  var expected = { a: 1, width: 640, height: 50 };

  assert.deepEqual(actual, expected, 'gets correct video options');

  assert.end();
});

_tape2['default']('makeInstanceCallback()', function (assert) {
  var React = getReact;
  var document = getDocument();
  var defaultVideoOptions = getDefaultVideoOptions();
  var controller = _videoJsControllerUtilities2['default']({ React: React, document: document, defaultVideoOptions: defaultVideoOptions });
  var reactElement = getReactElement();
  var context = { foo: 'bar' };
  var func = function func() {
    return this.foo;
  };
  var actual = controller.makeInstanceCallback(context, func)();
  var expected = 'bar';

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