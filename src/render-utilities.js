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
