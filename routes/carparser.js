/**
 * Created by anssi on 11/30/16.
 */
function checkAvailability(cars){
    var availableCars = [];
    for (var car in cars){
        if (car.availabilityData.available ){
            availableCars.push(car)
        }
    }
}