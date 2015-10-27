import vjs from 'videojs';
import React from 'react';
import createVideoJs from './create-video-js';
import defaultVideoOptions from './default-video-options';
import getController from './video-js-controller';
import getRenderUtilities from './render-utilities';
import getEndlessModeController from './video-js-endless-mode-controller';
import getInitializeController from './video-js-initialize-controller';
import getPlayerController from './video-js-player-controller';
import getResizingController from './video-js-resizing-controller';
import getSourceController from './video-js-source-controller';
import getUtilities from './video-js-controller-utilities';

const controllerFactories = {
  getEndlessModeController,
  getInitializeController,
  getPlayerController,
  getResizingController,
  getSourceController,
  getUtilities
};

const controller = getController({React, window, document, vjs,
  defaultVideoOptions,
  controllerFactories});

const renderUtilities = getRenderUtilities({React});

export default createVideoJs({React, controller, renderUtilities});
