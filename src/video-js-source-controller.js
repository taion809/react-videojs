const getController = () => {

  const setVideoPlayerSrc = (player, src) => {
      player.src(src);
  };

  const restartVideo = player => {
    player.currentTime(0).play();
  };

  const maybePlayNewSource = ({player, currentSrc, newSrc, isEndless,
    willBeEndless}) => {
    if (currentSrc !== newSrc) {
      setVideoPlayerSrc(player, newSrc);
      return;
    }

    if (isEndless === willBeEndless) {
      restartVideo(player);
    }
  };

  return {
    maybePlayNewSource
  };
};

export default getController;
