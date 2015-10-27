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
