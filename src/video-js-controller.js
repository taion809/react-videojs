import getEndlessModeController from './video-js-endless-mode-controller';
import getInitializeController from './video-js-initialize-controller';
import getPlayerController from './video-js-player-controller';
import getResizingController from './video-js-resizing-controller';
import getSourceController from './video-js-source-controller';
import getUtilities from './video-js-controller-utilities';

const getController = ({React, window}) => {
  let reportingCallback;

  const setReportingCallback = ({callback}) => reportingCallback = callback;

  const receiveReport = ({eventName, eventData}) => {
    if (reportingCallback) {
      reportingCallback({eventName, eventData})
    }
  };

  const endlessModeController = getEndlessModeController({React});
  const initializeController = getInitializeController({React,
    reportingCallback:receiveReport});
  const playerController = getPlayerController();
  const resizingController = getResizingController({window});
  const sourceController = getSourceController();
  const utilities = getUtilities({React});

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
