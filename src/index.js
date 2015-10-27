/*
Copyright 2015 by Grovo
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
