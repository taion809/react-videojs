import React from 'react';
import getController from './video-js-controller';
import getRenderUtilities from './render-utilities';
import createVideoJs from './create-video-js';

const controller = getController({React, window});
const renderUtilities = getRenderUtilities({React});

export default createVideoJs({React, controller, renderUtilities});
