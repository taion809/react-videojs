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
  resizingController, eventsController, endlessModeController}) => {

  const dataReactId = 'dataReactId';

  const initializeEventListeners = (eventListeners, player) => {
    Object.keys(eventListeners).forEach(key => {
      player.on(key, eventListeners[key]);
    });
  };

  const initializePlugins = ({plugins, player}) => {
    if (plugins) {
      plugins.forEach((plugin) => {
        vjs.plugin(plugin.name, plugin.func);
          player[plugin.name]();
      });
    }
  };

  const removeReactIdFromData = ({reactElement}) => {
    utilities.getVideoPlayerEl(reactElement)
      .parentElement
      .removeAttribute(dataReactId);
  };

  //TODO: implement
  const handleVideoPlayerResize = () => void 0;

  const getResizeCallback = ({reactElement}) => {
    return utilities.makeInstanceCallback({context: reactElement,
      func: handleVideoPlayerResize});
  };

  const initPlayerResizeHandlers = ({reactElement}) => {
    if (reactElement.props.resize && reactElement.props.resizeOptions) {
      callback = getResizeCallback({reactElement});
      resizingController.addResizeEventListener({callback,
        resizeOptionsFromProps: reactElement.props.resizeOptions});
    }
  };

  const getHandleVideoPlayerReadyCallback = ({reactElement}) => {
    return () => {
      removeReactIdFromData({reactElement});
      initPlayerResizeHandlers({reactElement});

      if (reactElement.props.onReady) {
        reactElement.props.onReady();
      }
    };
  };

  const initializePlayer = ({reactElement, options}) => {
    reactElement.player = vjs(utilities.getVideoPlayerEl(reactElement), options);
    reactElement.player.ready(utilities.makeInstanceCallback({
      context: reactElement,
      func: getHandleVideoPlayerReadyCallback({reactElement})
    }));
  }

  const mountVideoPlayer = ({reactElement}) => {
    const src = reactElement.props.src;
    const options = utilities.getVideoPlayerOptions(reactElement.props);

    initializePlayer({reactElement, options});
    initializeEventListeners(reactElement.props.eventListeners);
    initializePlugins({plugins: reactElement.props.plugins,
      player: reactElement.player});
    reactElement.player.src(src);
    endlessModeController.maybeSetEndlessMode({reactElement,
      nextVideoCallback: reactElement.props.handleNextVideo});
    eventsController.listenForPlayerEvents({player: reactElement.player,
      reportingCallback});
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
