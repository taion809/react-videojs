const getNextVideoController = () => {
  //TODO: do we need this module? It's not currently used.

  const maybeHandleNextVideo = ({hasEnded, callback}) => {
    if (hasEnded) {
      callback();
    }
  };

  const getHandleNextVideoCallback = ({reactElement}) => {
    return () => {
      if (reactElement.props.onNextVideo) {
        reactElement.props.onNextVideo();
      }
    };
  };

  return {
    getHandleNextVideoCallback,
    maybeHandleNextVideo
  };

};

export default getNextVideoController;
