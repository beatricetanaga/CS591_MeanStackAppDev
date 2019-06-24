
var express = require('express');

var flickrAPI = require('./routes/PS4');

var app = express();

//send JSON object to angular app
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/ps4/:tag', function(req, res, next) {
  console.log(req);
  flickrAPI.getFlickr(req, res);
});
app.listen('3000');
