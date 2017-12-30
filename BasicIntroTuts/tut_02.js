// dont' forget to npm init in the root folder to setup your package.json file for dependencies

const express = require('express');
const app = express();
const wiki = require('./tut_04_wiki.js');

app.use('/wiki', wiki);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!');
});
