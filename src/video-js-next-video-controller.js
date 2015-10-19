const getNextVideoController = () => {

  const maybeHandleNextVideo = ({hasEnded, callback}) => {
    if (hasEnded) {
      callback();
    }
  };

  const handleNextVideo = function() {
    his.props.onNextVideo();
  };

  return {
    handleNextVideo,
    maybeHandleNextVideo
  };

};

export default getNextVideoController;
