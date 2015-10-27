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