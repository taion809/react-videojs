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

const getController = ({reportingCallback, document, vjs, utilities,
  eventsController, endlessModeController}) => {
  console.log(222, eventsController);

  const dataReactId = 'dataReactId';

  const initializeEventListeners = (eventListeners, player) => {
    Object.keys(eventListeners).forEach(key => {
      player.on(key, eventListeners[key]);
    });
  };

  const initializePlugins = (plugins, player) => {
    plugins.forEach((plugin) => {
      vjs.plugin(plugin.name, plugin.func);
        player[plugin.name]();
    });
  };

  const getHandleVideoPlayerReadyCallback = ({reactElement}) => {
      return () => {
        utilities.getVideoPlayerEl(reactElement)
        .parentElement
        .removeAttribute(dataReactId);

      if (reactElement.props.resize) {
        const callback = utilities.makeInstanceCallback({context: reactElement,
          func: handleVideoPlayerResize});
        const resizeOptionsFromProps = reactElement.props.resizeOptions;
        addResizeEventListener({callback, resizeOptionsFromProps});
      }

      if (reactElement.props.onReady) {
        reactElement.props.onReady();
      }
    };
  };

  const mountVideoPlayer = ({reactElement}) => {
    const src = reactElement.props.src;
    const options = utilities.getVideoPlayerOptions(reactElement.props);

    reactElement.player = vjs(utilities.getVideoPlayerEl(reactElement), options);
    reactElement.player.ready(utilities.makeInstanceCallback({
      context: reactElement,
      func: getHandleVideoPlayerReadyCallback({reactElement})
    }));
    initializeEventListeners(reactElement.props.eventListeners);
    if (reactElement.props.plugins) {
      initializePlugins(reactElement.props.plugins, reactElement.player);
    }
    reactElement.player.src(src);
    endlessModeController.maybeSetEndlessMode({reactElement,
      nextVideoCallback: reactElement.props.handleNextVideo});
    eventsController.listenForPlayerEvents({player: reactElement.player, reportingCallback});
  };

  const unmountVideoPlayer = ({reactElement}) => {
    reactElement.player.dispose();
  };

  return {
    mountVideoPlayer,
    unmountVideoPlayer
  };
}

export default getController;
