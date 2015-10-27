const getController = ({React, window, document, vjs, defaultVideoOptions,
  controllerFactories}) => {

  let reportingCallback;

  const setReportingCallback = ({callback}) => reportingCallback = callback;

  const receiveReport = ({eventName, eventData}) => {
    if (reportingCallback) {
      reportingCallback({eventName, eventData})
    }
  };

  const utilities = controllerFactories.getUtilities({React, document,
    defaultVideoOptions});

  const endlessModeController = controllerFactories.
    getEndlessModeController({utilities});

  const initializeController = controllerFactories.getInitializeController({
    reportingCallback:receiveReport,
    document,
    vjs,
    utilities,
    endlessModeController});

  const playerController = controllerFactories.getPlayerController();

  const resizingController = controllerFactories.getResizingController({window});

  const sourceController = controllerFactories.getSourceController();

  const makeInstanceCallback = utilities.makeInstanceCallback;

  const maybePlayNewSource = sourceController.maybePlayNewSource;

  const mountVideoPlayer = initializeController.mountVideoPlayer;

  const removeResizeEventListener = resizingController.removeResizeEventListener;

  const setEndlessModeListener = endlessModeController.setEndlessModeListener;

  const setResizeEventListener = resizingController.setResizeEventListener;

  const unmountVideoPlayer = initializeController.unmountVideoPlayer;

  const doCommand = playerController.doCommand;

  return {
    doCommand,
    makeInstanceCallback,
    maybePlayNewSource,
    mountVideoPlayer,
    removeResizeEventListener,
    setEndlessModeListener,
    setReportingCallback,
    setResizeEventListener,
    unmountVideoPlayer
  };
}

export default getController;
