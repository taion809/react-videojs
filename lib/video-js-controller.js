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

"use strict";

exports.__esModule = true;
var getController = function getController(_ref) {
  var React = _ref.React;
  var window = _ref.window;
  var document = _ref.document;
  var vjs = _ref.vjs;
  var defaultVideoOptions = _ref.defaultVideoOptions;
  var controllerFactories = _ref.controllerFactories;

  var reportingCallback = undefined;

  var setReportingCallback = function setReportingCallback(_ref2) {
    var callback = _ref2.callback;
    return reportingCallback = callback;
  };

  var receiveReport = function receiveReport(_ref3) {
    var eventName = _ref3.eventName;
    var eventData = _ref3.eventData;

    if (reportingCallback) {
      reportingCallback({ eventName: eventName, eventData: eventData });
    }
  };

  var utilities = controllerFactories.getUtilities({ React: React, document: document,
    defaultVideoOptions: defaultVideoOptions });

  var endlessModeController = controllerFactories.getEndlessModeController({ utilities: utilities });

  var eventsController = controllerFactories.getEventsController();

  var resizingController = controllerFactories.getResizingController({ window: window });

  var initializeController = controllerFactories.getInitializeController({
    reportingCallback: receiveReport,
    document: document,
    vjs: vjs,
    utilities: utilities,
    resizingController: resizingController,
    eventsController: eventsController,
    endlessModeController: endlessModeController });

  var playerController = controllerFactories.getPlayerController();

  var sourceController = controllerFactories.getSourceController();

  var makeInstanceCallback = utilities.makeInstanceCallback;

  var maybePlayNewSource = sourceController.maybePlayNewSource;

  var mountVideoPlayer = initializeController.mountVideoPlayer;

  var removeResizeEventListener = resizingController.removeResizeEventListener;

  var setEndlessModeListener = endlessModeController.setEndlessModeListener;

  var setResizeEventListener = resizingController.setResizeEventListener;

  var unmountVideoPlayer = initializeController.unmountVideoPlayer;

  var doCommand = playerController.doCommand;

  return {
    doCommand: doCommand,
    makeInstanceCallback: makeInstanceCallback,
    maybePlayNewSource: maybePlayNewSource,
    mountVideoPlayer: mountVideoPlayer,
    removeResizeEventListener: removeResizeEventListener,
    setEndlessModeListener: setEndlessModeListener,
    setReportingCallback: setReportingCallback,
    setResizeEventListener: setResizeEventListener,
    unmountVideoPlayer: unmountVideoPlayer
  };
};

exports["default"] = getController;
module.exports = exports["default"];