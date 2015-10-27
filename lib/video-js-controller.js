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

  var initializeController = controllerFactories.getInitializeController({
    reportingCallback: receiveReport,
    document: document,
    vjs: vjs,
    utilities: utilities,
    endlessModeController: endlessModeController });

  var playerController = controllerFactories.getPlayerController();

  var resizingController = controllerFactories.getResizingController({ window: window });

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