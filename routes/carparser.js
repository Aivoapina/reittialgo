/**
 * Created by anssi on 11/30/16.
 */

module.exports =
{
    checkAvailability: function(cars) {
        var availableCars = [];
        for (var index in cars) {
            if (cars[index].availabilityData.available) {
                availableCars.push(cars[index]);
                console.log(index);
            }
        }
        return availableCars;
    },
    getAddress: function(cars) {
        var addresses = [];
        for (var index in cars){
            addresses.push(cars[index].homeLocationData.fullAddress);
        }
        return addresses;
    }
}
return module.exports;