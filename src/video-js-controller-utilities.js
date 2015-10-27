const defaultWidth = 640;
const defaultHeight = 480;

const getUtilities = ({React, document, defaultVideoOptions}) => {

  const getVideoPlayer = reactElement => reactElement.player;

  const getVideoPlayerEl = reactElement => document.
    getElementById(reactElement.idName);

  const getVideoPlayerOptions = props => {
    const height = props.resize ? auto : (props.height || defaultHeight);
    const width = props.resize ? auto : (props.width || defaultWidth);
    return {...props.options, ...{ width, height }, ...defaultVideoOptions};
  };

  const makeInstanceCallback = (context, func) => {
    return function() {
      if (context && func) {
        return func.call(context);
      }
      return () => void 0;
    };
  };

  return {
    getVideoPlayer,
    getVideoPlayerEl,
    getVideoPlayerOptions,
    makeInstanceCallback
  };
}

export default getUtilities;
