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

const getRenderUtilities = ({React}) => {
  const vjsBaseCSSClass = `video-js`;
  const vjsBigPlayCenteredCSSClass = `vjs-big-play-centered`;
  const vjsDefaultSkinCSSClass = `vjs-default-skin`;
  const vjsNoJsCSSClass = `vjs-no-js`;

  const renderDefaultWarning = () => {
    return (
      <p className={vjsNoJsCSSClass}>
        To view this video please enable JavaScript,
        and consider upgrading to a web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">
        `supports HTML5 video
        </a>.
      </p>
    );
  };

  const getCSSClasses = props => {
    const skinClass = props.vjsDefaultSkin ? vjsDefaultSkinCSSClass : '';
    const bigPlayButtonCenteredClass = props.vjsBigPlayCentered ?
      vjsBigPlayCenteredCSSClass : '';

    return [vjsBaseCSSClass, skinClass, bigPlayButtonCenteredClass].join(' ');
  };

  return {
    getCSSClasses,
    renderDefaultWarning
  };
};

export default getRenderUtilities;
