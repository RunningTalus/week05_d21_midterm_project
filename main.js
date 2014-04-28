var map;
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.0079, -105.2348)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);



// (-34.397, 150.644)