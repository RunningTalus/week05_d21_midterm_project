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

$('.map').height($('.map').width());
//sets the map height to the map width
//relies on bootstrap to do the heavy lifting

$(window).resize(function() {
	$('.map').height($('.map').width());
});
//on window resize the map height is set to the map width

//inject dropdown menu via Handlebars
// var dropdownTemplate = $('.dropdown-template');
// var dropdownTemplateText = dropdownTemplate.html();
// var renderDropdown = Handlebars.compile(dropdownTemplateText);


// bing


	var bingMapOptions = {
		credentials: "AolIIreghmvKtz03i4M5zN9beapbOskEupo1x96mBA5aO12592OezyL1bTmyKehg",
		center: new Microsoft.Maps.Location(40.0079,-105.2348),
		enableClickableLogo: false,
		enableSearchLogo: false,
		disableKeyboardInput: true,
		disableMouseInput: true,
		disablePanning: true,
		disableTouchInput: true,
		disableUserInput: true,
		disableZooming: true,
		showBreadcrumb: false,
		showCopyright: true,
		showDashboard: false,
		showMapTypeSelector: false,
		showScalebar: true,
		zoom: 18
	};

	$('.bing-type').each(function(){
		bingMapOptions.mapTypeId = Microsoft.Maps.MapTypeId[$(this).attr('data-options-type')];
		bingEl = $(this).get(0);
		var map = new Microsoft.Maps.Map(bingEl, bingMapOptions);
	});

// esri

	require(['esri/map',
	'dojo/domReady!'
	], function(Map) { 
	
		var esriMapOptions = {
			// basemap: 'national-geographic',
			center: [-105.2348, 40.0079],
			logo: true,
			nav: false,
			slider: false,
			smartNavigation: false,
			zoom: 17
		};

		$('.esri-type').each(function(){
			esriMapOptions.basemap = $(this).attr('data-options-type');
			var esriEl = $(this).get(0);
			var map = new Map(esriEl, esriMapOptions);

			map.on('load', function() {
				map.disablePan();
				map.disableScrollWheelZoom();
				map.disableRubberBandZoom();
				map.disableClickRecenter();
				map.disableDoubleClickZoom();
				map.disableShiftDoubleClickZoom();
				map.disableKeyboardNavigation();
				map.hidePanArrows();
				map.hideZoomSlider();
				map.disableMapNavigation();
			});
		});



	});


// google

	var googleMap = function () {
		google.maps.visualRefresh = true;

		var googleMapOptions = {
			center: new google.maps.LatLng(40.0079, -105.2348),
			keyboardShortcuts: false,
			disableDefaultUI: true,
			disableDoubleClickZoom: true,
			draggable: false,
			keyboardShortcuts: false,
			mapTypeControl: false,
			overViewMapControl: false,
			panControl: false,
			rotateControl: false,
			scaleControl: false,
			scrollwheel: false,
			streetViewControl: false,
			zoomControl: false,
			zoom: 18
		};

		$('.google-type').each(function() {
			googleMapOptions.mapTypeId = google.maps.MapTypeId[$(this).attr('data-options-type')];
			googleEl = $(this).get(0);
			var map = new google.maps.Map(googleEl, googleMapOptions);
		});

	};

	google.maps.event.addDomListener(window, 'load', googleMap);

// mapquest


	MQA.EventUtil.observe(window, 'load', function() {
		
		var mapquestOptions = {
			bestFitMargin: 0,
			// elt: document.getElementById('mapquest'),                                
			latLng: {
				lat:40.0079, lng:-105.2348 
			},  
			minimized: false,
			// mtype:'sat',
			setDraggable: false,
			useRightClick: false,
			zoom: 18,  
			zoomOnDoubleClick: false
		};

		$('.mapquest-type').each(function() {
			mapquestOptions.mtype = $(this).attr('data-options-type');
			mapquestOptions.elt = $(this).get(0);
		
			window.map = new MQA.TileMap(mapquestOptions);
		});

	});

// nokia

	// nokia.Settings.set("app_id", "YOUR_APPID");
	nokia.Settings.set('app_id', '77VM5B8BjUkIb4tsZbhe');
	// nokia.Settings.set("app_code", "YOUR_TOKEN");
	nokia.Settings.set('app_code', 'X47sOlRqLiQfpL9wBk458Q');
	
	var nokiaOptions = {
		// baseMapType: nokia.maps.map.Display.SATELLITE,
		center: [40.0079, -105.2348],
		zoomLevel: 10	
	};

	$('.nokia-type').each(function() {
		var nokiaEl = $(this).get(0);
		nokiaOptions.baseMapType = nokia.maps.map.Display[$(this).attr('data-options-type')];
		
		var map = new nokia.maps.map.Display(nokiaEl, nokiaOptions);
	});

});