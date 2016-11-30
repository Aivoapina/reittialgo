var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.method = 'POST'){

    }
    res.render('index', { title: 'Express' });

    request('https://backend.24rent.fi/api2/car/search?startTime=2016-12-20%2020:00:00&endTime=2016-12-30%2014:00:00&km=50', function (error, res, body){
      var cars = JSON.parse(body);
      console.log(cars[0]);
    });
});
module.exports = router;
