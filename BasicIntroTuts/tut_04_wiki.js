// wiki.js - Wiki route module

// FOR PRACTICE, I required and used this module back in
// the tut_02.js practice app.


var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;
