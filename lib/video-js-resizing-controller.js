'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashFunctionDebounce = require('lodash/function/debounce');

var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);

var getController = function getController(_ref) {
  var window = _ref.window;

  var defaultAdjustedSize = 0;
  var defaultAspectRatio = 9 / 16;
  var defaultResizeDebounceTime = 500;
  var resize = 'resize';

  var windowHeight = function windowHeight() {
    return window.innerHeight;
  };

  var videoElementWidth = function videoElementWidth(reactElement) {
    return getVideoPlayerEl(reactElement).parentElement.parentElement.offsetWidth;
  };

  var getVideoResizeOptions = function getVideoResizeOptions(_ref2) {
    var resizeOptionsFromProps = _ref2.resizeOptionsFromProps;

    return _extends({}, resizeOptionsFromProps, {
      aspectRatio: defaultAspectRatio,
      shortWindowVideoHeightAdjustment: defaultAdjustedSize,
      defaultVideoWidthAdjustment: defaultAdjustedSize,
      debounceTime: defaultResizeDebounceTime
    });
  };

  var getResizedVideoPlayerMeasurements = function getResizedVideoPlayerMeasurements(reactElement) {
    var resizeOptionsFromProps = reactElement.props.resizeOptions;
    var resizeOptions = getVideoResizeOptions({ resizeOptionsFromProps: resizeOptionsFromProps });
    var aspectRatio = resizeOptions.aspectRatio;
    var defaultVideoWidthAdjustment = resizeOptions.defaultVideoWidthAdjustment;
    var winHeight = windowHeight();
    var baseWidth = videoElementWidth(reactElement);
    var width = baseWidth - defaultVideoWidthAdjustment;
    var height = winHeight < height ? winHeight - resizeOptions.shortWindowVideoHeightAdjustment : width * aspectRatio;

    return { width: width, height: height };
  };

  //TODO: this isn't currently used. Is it necessary?

  /*const handleVideoPlayerResize = function() {
    const videoMeasurements = getResizedVideoPlayerMeasurements(this);
     this.player.dimensions(videoMeasurements.width, videoMeasurements.height);
  };*/

  var addResizeEventListener = function addResizeEventListener(_ref3) {
    var callback = _ref3.callback;
    var resizeOptionsFromProps = _ref3.resizeOptionsFromProps;

    var debounceTime = getVideoResizeOptions({ resizeOptionsFromProps: resizeOptionsFromProps }).debounceTime;
    window.addEventListener(resize, _lodashFunctionDebounce2['default'](callback, debounceTime));
  };

  var removeResizeEventListener = function removeResizeEventListener(_ref4) {
    var callback = _ref4.callback;

    window.removeEventListener(resize, callback);
  };

  var addOrRemoveResizeEventListner = function addOrRemoveResizeEventListner(_ref5) {
    var willBeResizeable = _ref5.willBeResizeable;
    var callback = _ref5.callback;
    var propsResizeOptions = _ref5.propsResizeOptions;

    if (willBeResizeable) {
      addResizeEventListener({ callback: callback, propsResizeOptions: propsResizeOptions });
      return;
    }
    removeResizeEventListener({ callback: callback });
  };

  var setResizeEventListener = function setResizeEventListener(_ref6) {
    var isResizable = _ref6.isResizable;
    var willBeResizeable = _ref6.willBeResizeable;
    var propsResizeOptions = _ref6.propsResizeOptions;
    var setResizeEventListenerCallback = _ref6.setResizeEventListenerCallback;

    var callback = setResizeEventListenerCallback;
    if (isResizable !== willBeResizeable) {
      addOrRemoveResizeEventListner({ willBeResizeable: willBeResizeable, callback: callback,
        propsResizeOptions: propsResizeOptions });
    }
  };

  return {
    removeResizeEventListener: removeResizeEventListener,
    setResizeEventListener: setResizeEventListener
  };
};

exports['default'] = getController;
module.exports = exports['default'];