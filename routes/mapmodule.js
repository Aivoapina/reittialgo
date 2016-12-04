var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA2H5SjYEcTDvaSQizYXYzhz9wDgVPXE4U'
});
var lyhyin = 0;
var lyhyinOb;
module.exports = 
{

  etaisyys: function(origin1, destination1)
  {
    console.log('lyhyin on: ' + lyhyin)
    var origin = 'Insinöörinkatu 19';
    var destination = 'Annalankatu 10';
    googleMapsClient.distanceMatrix({
    origins: origin1,
    destinations: destination1
    }, function(err, response) {
      console.log('kusmuna');
      console.log(response.json.rows[0].elements[0].distance.value);
      console.log('lusmuna');
      if((response.json.rows[0].elements[0].distance.value < lyhyin) || lyhyin == 0){
        lyhyin = response.json.rows[0].elements[0].distance.value;
        lyhyinOb = response;
        console.log('lyhyin lisätty')
      }

    });
  },
  lyhyinMatka: function()
  {
    console.log(lyhyin);
    console.log(lyhyinOb.json);
  }
}
return module.exports;