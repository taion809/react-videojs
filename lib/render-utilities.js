"use strict";

exports.__esModule = true;
var getRenderUtilities = function getRenderUtilities(_ref) {
  var React = _ref.React;

  var vjsBaseCSSClass = "video-js";
  var vjsBigPlayCenteredCSSClass = "vjs-big-play-centered";
  var vjsDefaultSkinCSSClass = "vjs-default-skin";
  var vjsNoJsCSSClass = "vjs-no-js";

  var renderDefaultWarning = function renderDefaultWarning() {
    return React.createElement(
      "p",
      { className: vjsNoJsCSSClass },
      "To view this video please enable JavaScript, and consider upgrading to a web browser that",
      React.createElement(
        "a",
        { href: "http://videojs.com/html5-video-support/", target: "_blank" },
        "`supports HTML5 video"
      ),
      "."
    );
  };

  var getCSSClasses = function getCSSClasses(props) {
    var skinClass = props.vjsDefaultSkin ? vjsDefaultSkinCSSClass : '';
    var bigPlayButtonCenteredClass = props.vjsBigPlayCentered ? vjsBigPlayCenteredCSSClass : '';

    return [vjsBaseCSSClass, skinClass, bigPlayButtonCenteredClass].join(' ');
  };

  return {
    getCSSClasses: getCSSClasses,
    renderDefaultWarning: renderDefaultWarning
  };
};

exports["default"] = getRenderUtilities;
module.exports = exports["default"];