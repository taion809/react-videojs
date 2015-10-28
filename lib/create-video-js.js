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

var _videoJsController = require('./video-js-controller');

var _videoJsController2 = _interopRequireDefault(_videoJsController);

var _defaultVideoOptions = require('./default-video-options');

var _defaultVideoOptions2 = _interopRequireDefault(_defaultVideoOptions);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _lodashUtilityUniqueid = require('lodash/utility/uniqueid');

var _lodashUtilityUniqueid2 = _interopRequireDefault(_lodashUtilityUniqueid);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var videoPlayerBaseRef = 'videoPlayer';

var createVideoJs = function createVideoJs(_ref) {
  var React = _ref.React;
  var controller = _ref.controller;
  var renderUtilities = _ref.renderUtilities;

  var reactObject = {
    propTypes: _propTypes2['default'],

    getDefaultProps: function getDefaultProps() {
      return _defaultProps2['default'](_defaultVideoOptions2['default']);
    },

    componentDidMount: function componentDidMount() {
      controller.setReportingCallback({ callback: this.props.reportingCallback });
      controller.mountVideoPlayer({ reactElement: this });
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      var _props = this.props;
      var endlessMode = _props.endlessMode;
      var resize = _props.resize;
      var src = _props.src;

      var isEndless = endlessMode;
      var willBeEndless = nextProps.endlessMode;
      var isResizable = resize;
      var willBeResizeable = nextProps.resize;
      var currentSrc = src;
      var newSrc = nextProps.src;
      var setEndlessModeCallback = controller.makeInstanceCallback({ context: { props: this.props },
        func: controller.handleNextVideo });
      var player = this.player;
      var propsResizeOptions = this.props.resizeOptions;
      //TODO: implement
      /* const setResizeEventListenerCallback = controller.makeInstanceCallback({
          context: this,
          func: controller.handleVideoPlayerResize});*/
      var commandFunctionName = nextProps.command;
      var commandArgs = nextProps.commandArgs || [];

      controller.setReportingCallback({ callback: this.props.reportingCallback });
      controller.setEndlessModeListener({ isEndless: isEndless, willBeEndless: willBeEndless, player: player,
        setEndlessModeCallback: setEndlessModeCallback });
      //TODO: implement
      /*controller.setResizeEventListener({isResizable, willBeResizeable,
        propsResizeOptions,
        setResizeEventListenerCallback});*/
      /*controller.maybePlayNewSource({player, currentSrc, newSrc, isEndless,
        willBeResizeable});*/

      if (commandFunctionName) {
        controller.doCommand({ player: player, commandFunctionName: commandFunctionName, commandArgs: commandArgs });
      }
    },

    shouldComponentUpdate: function shouldComponentUpdate() {
      return false;
    },

    componentWillUnmount: function componentWillUnmount() {
      //should pass callback parameter???
      controller.removeResizeEventListener({});
      controller.unmountVideoPlayer({ reactElement: this });
    },

    render: function render() {
      var getCSSClasses = renderUtilities.getCSSClasses;
      var renderDefaultWarning = renderUtilities.renderDefaultWarning;

      this.idName = _lodashUtilityUniqueid2['default'](videoPlayerBaseRef);
      return React.createElement(
        'video',
        { id: this.idName,
          className: getCSSClasses(this.props) },
        this.props.children || renderDefaultWarning()
      );
    }
  };

  return React.createClass(reactObject);
};

module.exports = createVideoJs;