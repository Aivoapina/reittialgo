var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request')

var index = require('./routes/index');
var users = require('./routes/users');

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA2H5SjYEcTDvaSQizYXYzhz9wDgVPXE4U'
});

googleMapsClient.geocode({
  address: 'Korkeakoulunkatu 1, Tampere, Finland'
}, function(err, response) {
  console.log(err, response)
  if (!err) {
    console.log(response.json.results[0].geometry);

  }
});

googleMapsClient.distanceMatrix({
  origins: ['61.4499803802915', '23.8562673802915'],
  destinations: ['62.59984', '29.751513']
}, function(err, response) {
  console.log('kusmuna'+JSON.Parse(response.json));
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
