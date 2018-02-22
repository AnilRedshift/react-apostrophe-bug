require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});


const express = require('express');
const path = require('path');
const getHTML = require('./getHTML');


const app = express();

app.get('/', (req, res) => {
  const html = getHTML();
  res.send(html);
});
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
