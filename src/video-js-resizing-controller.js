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

import debounce from 'lodash/function/debounce';

const getController = ({window}) => {
  const defaultAdjustedSize = 0;
  const defaultAspectRatio = (9 / 16);
  const defaultResizeDebounceTime = 500;
  const resize = `resize`;

  const windowHeight = () => window.innerHeight;

  const videoElementWidth = reactElement => getVideoPlayerEl(reactElement).
    parentElement.parentElement.offsetWidth;

  const getVideoResizeOptions = ({resizeOptionsFromProps}) => {
    return {...resizeOptionsFromProps, ...{
      aspectRatio: defaultAspectRatio,
      shortWindowVideoHeightAdjustment: defaultAdjustedSize,
      defaultVideoWidthAdjustment: defaultAdjustedSize,
      debounceTime: defaultResizeDebounceTime
    }};
  };

  const getResizedVideoPlayerMeasurements = (reactElement) => {
    const resizeOptionsFromProps = reactElement.props.resizeOptions;
    const resizeOptions = getVideoResizeOptions({resizeOptionsFromProps});
    const aspectRatio = resizeOptions.aspectRatio;
    const defaultVideoWidthAdjustment = resizeOptions.defaultVideoWidthAdjustment;
    const winHeight = windowHeight();
    const baseWidth = videoElementWidth(reactElement);
    const width = baseWidth - defaultVideoWidthAdjustment;
    const height = (winHeight < height) ?
      winHeight - resizeOptions.shortWindowVideoHeightAdjustment :
      width * aspectRatio;

    return {width, height};
  };

  const addResizeEventListener = ({callback, resizeOptionsFromProps}) => {
    const debounceTime = getVideoResizeOptions({resizeOptionsFromProps}).debounceTime;
    window.addEventListener(resize, debounce(callback, debounceTime));
  };

  const removeResizeEventListener = ({callback}) => {
    window.removeEventListener(resize, callback);
  };

  const addOrRemoveResizeEventListner = ({willBeResizeable, callback,
    propsResizeOptions}) => {
    if (willBeResizeable) {
      addResizeEventListener({callback, propsResizeOptions});
      return;
    }
    removeResizeEventListener({callback});
  };

  const setResizeEventListener = ({isResizable, willBeResizeable,
    propsResizeOptions, setResizeEventListenerCallback}) => {
      const callback = setResizeEventListenerCallback;
      if (isResizable !== willBeResizeable) {
        addOrRemoveResizeEventListner({willBeResizeable, callback,
          propsResizeOptions});
      }
  };

  return {
    removeResizeEventListener,
    setResizeEventListener
  };
}

export default getController;
