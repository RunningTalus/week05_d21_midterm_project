$(document).on('load', function GetMap(){});

$(document).on('ready', function(){
			
	var map = new Microsoft.Maps.Map(document.getElementById('bing'), {
		// credentials: "Your Bing Maps Key",
		credentials: '',
    center: new Microsoft.Maps.Location(40.0079, -105.2348),
    zoom: 2,
    mapTypeId: Microsoft.Maps.MapTypeId.aerial
  });

  

});

//GOOGLE

// $(document).on('ready', function(){

// 	var map;
// 	var mapOptions;

// 	// if (navigator.geolocation) {
// 	// 	navigator.geolocation.getCurrentPosition(function(position) {
// 	// 		var lat = position.coords.latitude;
// 	// 		var lng = position.coords.longitude;
// 	// 		var devCenter = new google.maps.LatLng(lat, lng);
// 	// 		map.setCenter(devCenter);
// 	// 		map.setZoom(16);
// 	// 	});
// 	// };

// 	var initialMap = function (){
// 		google.maps.visualRefresh = true;

// 		var mapOptions = {
// 			center: new google.maps.LatLng(40.0079, -105.2348),
// 			zoom: 2,
// 			mapTypeId: google.maps.MapTypeId.SATELLITE
// 		};

// 		$('.maptype').on('click', function(){
// 			var mapType = $(this).attr('data-maptype');
// 			map.setMapTypeId(google.maps.MapTypeId[mapType]);
// 		});
		
// 		var mapElement = document.getElementById('google');
// 		map = new google.maps.Map(mapElement, mapOptions);

// 	};

// 	google.maps.event.addDomListener(window, 'load', initialMap);

// });

