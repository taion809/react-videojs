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
