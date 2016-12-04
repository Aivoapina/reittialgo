var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA2H5SjYEcTDvaSQizYXYzhz9wDgVPXE4U'
});
var lyhyin = 0;
var lyhyinOb;
module.exports = 
{

  etaisyys: function(origin1, destinations_list, callback)
  {
    console.log('lyhyin on: ' + lyhyin)
    for(var index in destinations_list){
      
      googleMapsClient.distanceMatrix({
      origins: origin1,
      destinations: destinations_list[index]
      }, function(err, response) {
        //console.log('kusmuna');
        //console.log(response.json.rows[0].elements[0].distance.value);
       // console.log('lusmuna');
        if((response.json.rows[0].elements[0].distance.value < lyhyin) || lyhyin == 0){
          lyhyin = response.json.rows[0].elements[0].distance.value;
          lyhyinOb = response;
          console.log('lyhyin lisätty')
          console.log(lyhyinOb.json.origin_addresses);

          callback (lyhyinOb.json);
        }

      });
    }

  },
  lyhyinMatka: function()
  {
    console.log(lyhyinOb);
    return lyhyinOb.json;
  },
  nollaaLyhyin: function()
  {
    lyhyin = 0;
  }
}
return module.exports;