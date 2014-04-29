function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(40.0079, -105.2348),
          zoom: 14,
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);