var express = require('express');
var request = require('request');
var carparser = require('./carparser.js')
var mapmodule = require('./mapmodule.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });

    request('https://backend.24rent.fi/api2/car/search?startTime=2016-12-20%2020:00:00&endTime=2016-12-30%2014:00:00&km=50', function (error, res, body){
      var cars = JSON.parse(body);
      //console.log(cars[0]);
    });
});
router.post('/', function(req, res, next) {
    console.log(req.body);
    request('https://backend.24rent.fi/api2/car/search?startTime=' + req.body.startdate + '%2020:00:00&endTime=' + req.body.enddate + '%2014:00:00&km=50', function (error, response, body) {
        //console.log(JSON.parse(body));
        var availableCars = carparser.checkAvailability(JSON.parse(body));
        mapmodule.etaisyys(req.body.address, carparser.getAddress(availableCars));
        res.render('index', {title: 'Pressi'});
    });
});
module.exports = router;
