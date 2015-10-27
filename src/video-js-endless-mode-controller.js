const getController = ({utilities}) => {

  const getHandleNextVideoCallback = props => () => {
      if (props.onNextVideo) {
        props.onNextVideo()
      };
  };

  const maybeSetEndlessMode = ({reactElement}) => {
    const player = reactElement.player;
    const callback = utilities.makeInstanceCallback({context:
        {props: reactElement.props},
        func: getHandleNextVideoCallback(reactElement.props)});
    if (reactElement.props.endlessMode) {
      addEndlessMode({player, callback});
    }
  };

  const maybeHandleNextVideo = ({hasEnded, callback}) => {
    if (hasEnded) {
        callback();
    }
  };

  const addEndlessMode = ({player, callback}) => {
    const hasEnded = player.ended();
    player.on('ended', callback);

    maybeHandleNextVideo({hasEnded, callback});
  };

  const removeEndlessMode = ({player, callback}) => {
    //player.off('ended', callback);
  };

  const setEndlessModeListener = ({player, willBeEndless, callback}) => {
    if (willBeEndless) {
      addEndlessMode(player, callback);
      return;
    }
    removeEndlessMode(player, callback);
  };

  const setEndlessMode = ({isEndless, willBeEndless, player, callback}) => {
    if (isEndless !== willBeEndless) {
      setEndlessModeListener({willBeEndless});
    }
  };

  return {
    maybeSetEndlessMode,
    setEndlessModeListener
  };
}

export default getController;
