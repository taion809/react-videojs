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

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videojs = require('videojs');

var _videojs2 = _interopRequireDefault(_videojs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createVideoJs = require('./create-video-js');

var _createVideoJs2 = _interopRequireDefault(_createVideoJs);

var _defaultVideoOptions = require('./default-video-options');

var _defaultVideoOptions2 = _interopRequireDefault(_defaultVideoOptions);

var _videoJsController = require('./video-js-controller');

var _videoJsController2 = _interopRequireDefault(_videoJsController);

var _renderUtilities = require('./render-utilities');

var _renderUtilities2 = _interopRequireDefault(_renderUtilities);

var _videoJsEndlessModeController = require('./video-js-endless-mode-controller');

var _videoJsEndlessModeController2 = _interopRequireDefault(_videoJsEndlessModeController);

var _videoJsInitializeController = require('./video-js-initialize-controller');

var _videoJsInitializeController2 = _interopRequireDefault(_videoJsInitializeController);

var _videoJsPlayerController = require('./video-js-player-controller');

var _videoJsPlayerController2 = _interopRequireDefault(_videoJsPlayerController);

var _videoJsResizingController = require('./video-js-resizing-controller');

var _videoJsResizingController2 = _interopRequireDefault(_videoJsResizingController);

var _videoJsSourceController = require('./video-js-source-controller');

var _videoJsSourceController2 = _interopRequireDefault(_videoJsSourceController);

var _videoJsControllerUtilities = require('./video-js-controller-utilities');

var _videoJsControllerUtilities2 = _interopRequireDefault(_videoJsControllerUtilities);

var _videoJsEventsController = require('./video-js-events-controller');

var _videoJsEventsController2 = _interopRequireDefault(_videoJsEventsController);

var controllerFactories = {
  getEndlessModeController: _videoJsEndlessModeController2['default'],
  getInitializeController: _videoJsInitializeController2['default'],
  getPlayerController: _videoJsPlayerController2['default'],
  getResizingController: _videoJsResizingController2['default'],
  getSourceController: _videoJsSourceController2['default'],
  getUtilities: _videoJsControllerUtilities2['default'],
  getEventsController: _videoJsEventsController2['default']
};

var controller = _videoJsController2['default']({ React: _react2['default'], window: window, document: document, vjs: _videojs2['default'],
  defaultVideoOptions: _defaultVideoOptions2['default'],
  controllerFactories: controllerFactories });

var renderUtilities = _renderUtilities2['default']({ React: _react2['default'] });

exports['default'] = _createVideoJs2['default']({ React: _react2['default'], controller: controller, renderUtilities: renderUtilities });
module.exports = exports['default'];