$(document).ready(function() {

	$('.all-maps').click(function(event) {
		if(this.checked) { 
			$('.bing').each(function() { 
				this.checked = true;                 
			});
			$('.esri').each(function() {
				this.checked = true;
			});
			$('.google').each(function() {
				this.checked = true;
			});
			$('.mapquest').each(function() {
				this.checked = true;
			});
			$('.nokia').each(function() {
				this.checked = true;
			});
		} else {
			$('.bing').each(function() { 
				this.checked = false;                       
			});
			$('.esri').each(function() {
				this.checked = false;
			});
			$('.google').each(function() {
				this.checked = false;
			});
			$('.mapquest').each(function() {
				this.checked = false;
			});
			$('.nokia').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-bing').click(function(event) {
		if(this.checked) {
			$('.bing').each(function() {
				this.checked = true;
			});
		} else {
			$('.bing').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-esri').click(function(event) {
		if(this.checked) {
			$('.esri').each(function() {
				this.checked = true;
			});
		} else {
			$('.esri').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-google').click(function(event) {
		if(this.checked) {
			$('.google').each(function() {
				this.checked = true;
			});
		} else {
			$('.google').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-mapquest').click(function(event) {
		if(this.checked) {
			$('.mapquest').each(function() {
				this.checked = true;
			});
		} else {
			$('.mapquest').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-nokia').click(function(event) {
		if(this.checked) {
			$('.nokia').each(function() {
				this.checked = true;
			});
		} else {
			$('.nokia').each(function() {
				this.checked = false;
			});
		}
	});



// bing
	var mapOptions;
	var map;
	var GetMap;

	window.onload = function(){

		var mapOptions = {
			credentials:"AolIIreghmvKtz03i4M5zN9beapbOskEupo1x96mBA5aO12592OezyL1bTmyKehg",
			center:new Microsoft.Maps.Location(40.0079,-105.2348),
			disableZooming:true,
			// mapTypeId: Microsoft.Maps.MapTypeId.aerial,
			zoom: 18,
		};

		$('.bing-type').each(function(){
			mapOptions.mapTypeId = Microsoft.Maps.MapTypeId[$(this).attr('data-options-type')];
			console.log($(this));
			console.log(mapOptions.mapTypeId);
			
			var map = new Microsoft.Maps.Map($(this).get(0), mapOptions);
		});

	};
	
	// Microsoft.Maps.Map.event.addDomListener(window, 'load', GetMap);

// esri

// require(['esri/map','dojo/domReady!'], function(Map) { 
	
// 	map = new Map('esri', {
// 		basemap: 'national-geographic',
// 		center: [-105.2348, 40.0079],
// 		zoom: 9
	
// 	});
// });


// google

	var initialMap;
	var map;
	var mapElement;
	var mapOptions;

	var initialMap = function (){
		google.maps.visualRefresh = true;

		var mapOptions = {
			center: new google.maps.LatLng(40.0079, -105.2348),
			disableDefaultUI: true,
			scrollwheel: false,
			zoom: 18
		};

		// console.log($('.google-type'));
		$('.google-type').each(function(){
			// console.log($(this).attr('data-options-type'));
			mapOptions.mapTypeId = google.maps.MapTypeId[$(this).attr('data-options-type')];
			var map = new google.maps.Map($(this).get(0), mapOptions);
		});

	};

	google.maps.event.addDomListener(window, 'load', initialMap);

// mapquest


	// MQA.EventUtil.observe(window, 'load', function() {
	  
	//   var options= {
	// 		elt: document.getElementById('mapquest'),
	// 		zoom: 3,                                  
	// 		latLng: {
	// 			lat:40.0079, lng:-105.2348 
	// 			},  
	// 		mtype:'sat',                              
	// 		zoomOnDoubleClick: true,										               
	//   };

	// 	window.map = new MQA.TileMap(options);

	// });

// nokia

	// // nokia.Settings.set("app_id", "YOUR_APPID");
	// nokia.Settings.set('app_id', '77VM5B8BjUkIb4tsZbhe');
	// // nokia.Settings.set("app_code", "YOUR_TOKEN");
	// nokia.Settings.set('app_code', 'X47sOlRqLiQfpL9wBk458Q');

	// var map = new nokia.maps.map.Display(document.getElementById('nokia'), {
		
	// 	baseMapType: nokia.maps.map.Display.SATELLITE,
	// 	center: [40.0079, -105.2348],
	// 	zoomLevel: 10
	// });

});