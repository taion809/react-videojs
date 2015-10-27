import React from 'react';
import dom from 'cheerio';

const getDomElementFromComponent = (Component, properties, selector) => {
  const el = React.createElement(Component, properties);
  const $ = dom.load(React.renderToStaticMarkup(el));
  return $(selector);
};

export default getDomElementFromComponent;
