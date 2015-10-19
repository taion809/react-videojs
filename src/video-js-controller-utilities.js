import defaultVideoOptions from './default-video-options';

const getUtilities = ({React}) => {
  const getVideoPlayer = reactElement => reactElement.player;

  const getVideoPlayerEl = reactElement => React.findDOMNode(reactElement.
    refs[reactElement.ref]);

  const getVideoPlayerOptions = props => {
    const height = props.resize ? auto : (props.height || defaultHeight);
    const width = props.resize ? auto : (props.width || defaultWidth);
    return {...props.options, ...{ width, height }, ...defaultVideoOptions};
  };

  const makeInstanceCallback = ({context, func}) => {
    return () => {
      func.call(context);
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
