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

import getController from './video-js-controller';
import defaultVideoOptions from './default-video-options';
import getDefaultProps from './default-props';
import getUniqueId from 'lodash/utility/uniqueid';
import propTypes from './propTypes'
import React from 'react';

const videoPlayerBaseRef = `videoPlayer`;

const createVideoJs = ({React, controller, renderUtilities}) => {

  const reactObject = {
    propTypes,

    getDefaultProps() {
      return getDefaultProps(defaultVideoOptions);
    },

    componentDidMount() {
       controller.setReportingCallback({callback: this.props.reportingCallback});
       controller.mountVideoPlayer({reactElement:this});
    },

    componentWillReceiveProps(nextProps) {
      const {endlessMode, resize, src} = this.props;
      const isEndless = endlessMode;
      const willBeEndless = nextProps.endlessMode;
      const isResizable = resize;
      const willBeResizeable = nextProps.resize;
      const currentSrc = src;
      const newSrc = nextProps.src;
      const setEndlessModeCallback = controller.makeInstanceCallback({context:
        {props: this.props},
        func: controller.handleNextVideo});
      const player = this.player;
      const propsResizeOptions = this.props.resizeOptions;
      const setResizeEventListenerCallback = controller.makeInstanceCallback({
          context: this,
          func: controller.handleVideoPlayerResize});
      const commandFunctionName = nextProps.command;
      const commandArgs = nextProps.commandArgs || [];

      controller.setReportingCallback({callback: this.props.reportingCallback});
      controller.setEndlessModeListener({isEndless, willBeEndless, player,
        setEndlessModeCallback})
      controller.setResizeEventListener({isResizable, willBeResizeable,
        propsResizeOptions,
        setResizeEventListenerCallback});
      /*controller.maybePlayNewSource({player, currentSrc, newSrc, isEndless,
        willBeResizeable});*/

      if(commandFunctionName) {
        controller.doCommand({player, commandFunctionName, commandArgs})
      }

    },

    shouldComponentUpdate() {
      return false;
    },

    componentWillUnmount() {
      //should pass callback parameter???
      controller.removeResizeEventListener({});
      controller.unmountVideoPlayer({reactElement: this});
    },

    render() {
      const {getCSSClasses, renderDefaultWarning} = renderUtilities;
      this.idName = getUniqueId(videoPlayerBaseRef);
      return (
        <video id={this.idName}
               className={getCSSClasses(this.props)}>
          {this.props.children || renderDefaultWarning()}
        </video>
      );
    }
  };

  return React.createClass(reactObject);
}

module.exports = createVideoJs;
