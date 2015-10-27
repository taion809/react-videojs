'use strict';

exports.__esModule = true;

var _jsdom = require('jsdom');

var createDocument = function createDocument() {

  var document = _jsdom.jsdom(undefined);
  var window = document.defaultView;
  global.document = document;
  global.window = window;
  return document;
};

exports['default'] = createDocument;
module.exports = exports['default'];