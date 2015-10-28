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