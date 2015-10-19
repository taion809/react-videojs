import {PropTypes} from 'react';

const {array, bool, element, func, number, object, shape, string} = PropTypes;

const propTypes = {
  foo: string,
  src: array.isRequired,
  height: number,
  width: number,
  endlessMode: bool,
  options: object,
  onReady: func,
  eventListeners: object,
  resize: bool,
  resizeOptions: shape({
    aspectRatio: number,
    shortWindowVideoHeightAdjustment: number,
    defaultVideoWidthAdjustment: number,
    debounceTime: number
  }),
  vjsDefaultSkin: bool,
  vjsBigPlayCentered: bool,
  children: element,
  dispose: bool,
  onNextVideo: func,
  reportingCallback: func
};

export default propTypes;
