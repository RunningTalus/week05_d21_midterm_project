$(document).on('ready', function(){

	var map;
	var mapOptions;

		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				var lat = position.coords.latitude;
				var lng = position.coords.longitude;
				var devCenter = new google.maps.LatLng(lat, lng);
				map.setCenter(devCenter);
				map.setZoom(16);
			});
	};

	var initialMap = function (){
		google.maps.visualRefresh = true;

		var mapOptions = {
			center: new google.maps.LatLng(40.0079, -105.2348),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		var mapTypeHybrid = "HYBRID";
		var mapTypeRoadmap = "ROADMAP";
		var mapTypeSatellite = "SATELLITE";
		var mapTypeTerrain = "TERRAIN";

		$('.hybrid-btn').on('click', function(){
			map.setMapTypeId(google.maps.MapTypeId[mapTypeHybrid]);
		});

		$('.roadmap-btn').on('click', function(){
			map.setMapTypeId(google.maps.MapTypeId[mapTypeRoadmap]);
		});

		$('.satellite-btn').on('click', function(){
			map.setMapTypeId(google.maps.MapTypeId[mapTypeSatellite]);
		});

		$('.terrain-btn').on('click', function(){
			map.setMapTypeId(google.maps.MapTypeId[mapTypeTerrain]);
		});
		
		var mapElement = document.getElementById('map-canvas');
		map = new google.maps.Map(mapElement, mapOptions);

	};

	google.maps.event.addDomListener(window, 'load', initialMap);

});


// var initialize = function() {
// 	mapOptions = {
// 		center: new google.maps.LatLng(40.0079, -105.2348),
// 		zoom: 14,
// 	};
	
// 	map = new google.maps.Map(document.getElementById('map-canvas'),
// 			mapOptions);
// }
// google.maps.event.addDomListener(window, 'ready', initialize);


//OR

// function initialize() {
//         var mapOptions = {
//           center: new google.maps.LatLng(40.0079, -105.2348),
//           zoom: 14,
//         };
//         var map = new google.maps.Map(document.getElementById('map-canvas'),
//             mapOptions);
//       }
//       google.maps.event.addDomListener(window, 'load', initialize);