// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================

var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
var config = require('./config.js');

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources

app.use(express.static(__dirname + '/public'));

// configure instagram app with client_id
ig.use(
  config.ig
);
//console.log(config);

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with client-id
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - popular images

// home page route - popular images
app.get('/', function(req, res) {

// use the instagram package to get popular media
  ig.media_popular(function(err, medias, remaining, limit) {
// render the home page and pass in the popular images
    res.render('pages/index', { grams: medias });

  });
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
