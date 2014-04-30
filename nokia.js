$(document).on('ready', function(){

	// nokia.Settings.set("app_id", "YOUR_APPID");
	nokia.Settings.set('app_id', '');
  // nokia.Settings.set("app_code", "YOUR_TOKEN");
	nokia.Settings.set('app_code', '');

	var map = new nokia.maps.map.Display(document.getElementById('nokia'), {
		// Zoom level for the map
		zoomLevel: 10,
		// Map center coordinates
		center: [40.0079, -105.2348],
		// Activate satellite imagery on the display:
    baseMapType: nokia.maps.map.Display.SATELLITE
	});

});