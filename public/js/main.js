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
		center: new Microsoft.Maps.Location(36.1208,-115.1722),
		enableClickableLogo: false,
		enableSearchLogo: false,
		disableKeyboardInput: true,
		disableMouseInput: true,
		disablePanning: false,
		disableTouchInput: true,
		disableUserInput: false,
		disableZooming: false,
		showBreadcrumb: false,
		showCopyright: true,
		showDashboard: true,
		showMapTypeSelector: false,
		showScalebar: true,
		zoom: 18
	};

	$('.bing-type').each(function(){
		bingMapOptions.mapTypeId = Microsoft.Maps.MapTypeId[$(this).attr('data-options-type')];
		// bingMapOptions.center = new Microsoft.Maps.Location(40.0179,-105.2798);
		bingEl = $(this).get(0);
		var map = new Microsoft.Maps.Map(bingEl, bingMapOptions);
		// var title = $(this).attr('data-options-type');
		// console.log(title);

	});

	// $('.map-wrapper').hover( function () {
	// 	$(this).append( $( "title" ) );
	// },
	// 	function() {
	// 		$(this).find( "span:last" ).remove();
	// 	}
	// );

// esri

	require(['esri/map', "esri/dijit/Scalebar", 'dojo/domReady!'], function(Map, Scalebar) { 
	
		var esriMapOptions = {
			// basemap: 'national-geographic',
			center: [-115.1722, 36.1208],
			logo: true,
			nav: true,
			slider: true,
			smartNavigation: false,
			zoom: 15
		};

		$('.esri-type').each(function(){
			esriMapOptions.basemap = $(this).attr('data-options-type');
			var esriEl = $(this).get(0);
			// esriMapOptions.center = [-105.2798, 40.0179];
			var map = new Map(esriEl, esriMapOptions);

			var scalebar = new Scalebar({
			map: map,
				// "dual" displays both miles and kilmometers
				// "english" is the default, which displays miles
				// use "metric" for kilometers
				scalebarUnit: "dual"
			});

			map.on('load', function() {
				// map.disablePan();
				map.disableScrollWheelZoom();
				map.disableRubberBandZoom();
				map.disableClickRecenter();
				map.disableDoubleClickZoom();
				// map.disableShiftDoubleClickZoom();
				map.disableKeyboardNavigation();
				map.hidePanArrows();
				// map.hideZoomSlider();
				// map.disableMapNavigation();
			});
		});



	});


// google

	var googleMap = function () {
		google.maps.visualRefresh = true;

		var googleMapOptions = {
			center: new google.maps.LatLng(36.1208, -115.1722),
			keyboardShortcuts: false,
			disableDefaultUI: true,
			disableDoubleClickZoom: true,
			draggable: true,
			keyboardShortcuts: false,
			mapTypeControl: false,
			overViewMapControl: false,
			panControl: true,
			rotateControl: false,
			scaleControl: true,
			scrollwheel: false,
			streetViewControl: false,
			zoomControl: true,
			zoom: 18
		};

		$('.google-type').each(function() {
			googleMapOptions.mapTypeId = google.maps.MapTypeId[$(this).attr('data-options-type')];
			// googleMapOptions.center = new google.maps.LatLng(40.0179,-105.2798);
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
				lat:36.1208, lng:-115.1722 
			},  
			minimized: false,
			// mtype:'sat',
			setDraggable: true,
			useRightClick: false,
			zoom: 18,  
			zoomOnDoubleClick: true
		};

		$('.mapquest-type').each(function() {
			mapquestOptions.mtype = $(this).attr('data-options-type');
			mapquestOptions.elt = $(this).get(0);
			// mapquestOptions.latLng = {lat:40.0179, lng:-105.2798};
		
			window.map = new MQA.TileMap(mapquestOptions);
		});

	});

// nokia

	// nokia.Settings.set("app_id", "YOUR_APPID");
	nokia.Settings.set('app_id', '77VM5B8BjUkIb4tsZbhe');
	// nokia.Settings.set("app_code", "YOUR_TOKEN");
	nokia.Settings.set('app_code', 'X47sOlRqLiQfpL9wBk458Q');
	
	var nokiaMapOptions = {
		// baseMapType: nokia.maps.map.Display.SATELLITE,
		// components: [
		// 	new nokia.maps.map.component.ZoomBar(),
		// 	new nokia.maps.map.component.ScaleBar()
		// ],

		center: [36.1208, -115.1722],
		zoomLevel: 15,
	};

	$('.nokia-type').each(function() {
		var nokiaEl = $(this).get(0);
		nokiaMapOptions.baseMapType = nokia.maps.map.Display[$(this).attr('data-options-type')];
		// nokiaMapOptions.center = [40.0179,-105.2798];
		
		var map = new nokia.maps.map.Display(nokiaEl, nokiaMapOptions);
		map.addComponent( new nokia.maps.map.component.zoom.DoubleClick() );
		map.addComponent( new nokia.maps.map.component.panning.Drag() );
		map.addComponent( new nokia.maps.map.component.panning.Kinetic() );
		map.addComponent( new nokia.maps.map.component.ZoomBar() );
		map.addComponent( new nokia.maps.map.component.ScaleBar() );
	});

});

	// var vegas = function(){
	// 	esriMapOptions.center = [-105.2798, 40.0179];
	// 	googleMapOptions.center = new google.maps.LatLng(40.0179,-105.2798);
	// 	mapquestOptions.latLng = {lat:40.0179, lng:-105.2798};
	// 	nokiaMapOptions.center = [40.0179,-105.2798];
	// 	bingMapOptions.center = new Microsoft.Maps.Location(40.0179,-105.2798);
	// };