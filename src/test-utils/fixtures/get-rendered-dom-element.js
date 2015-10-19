import createDocument from './create-document';
import React from 'react';
import ReactWithAddons from 'react/addons';
const {renderIntoDocument} = ReactWithAddons.addons.TestUtils;

const getDomElementFromComponent = (Component, properties) => {
  const document = createDocument();
  return renderIntoDocument(React.createElement(Component, properties),
    document.body);
}

export default getDomElementFromComponent;


