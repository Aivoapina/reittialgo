function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 61.44863139999999, lng: 23.8549184},
        scrollwheel: false,
        zoom: 12
    });
}
