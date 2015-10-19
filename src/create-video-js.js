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
       controller.mountVideoPlayer.call(this);
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
      this.ref = getUniqueId(videoPlayerBaseRef);
      return (
        <video ref={this.ref} className={getCSSClasses(this.props)}>
          {this.props.children || renderDefaultWarning()}
        </video>
      );
    }
  };

  return React.createClass(reactObject);
}

module.exports = createVideoJs;
