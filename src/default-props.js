const noop = () => {};

const getDefaultProps = defaultVideoOptions => ({
  endlessMode: false,
  eventListeners: {},
  onNextVideo: noop,
  onReady: noop,
  options: defaultVideoOptions,
  resize: false,
  resizeOptions: {},
  vjsBigPlayCentered: true,
  vjsDefaultSkin: true
});

export default getDefaultProps;
