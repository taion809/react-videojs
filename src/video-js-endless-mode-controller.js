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
