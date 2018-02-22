const fs = require('fs');
const path = require('path');
const React = require('react');
const {renderToString} = require('react-dom/server');
const {default: App} = require('../src/App');
const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

module.exports = () => {
  const html = fs.readFileSync (filePath, 'utf8');
  const markup = renderToString(<App />);
  return html.replace('{{SSR}}', markup);
};
