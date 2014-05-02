$(document).on('ready', function(){

	// nokia.Settings.set("app_id", "YOUR_APPID");
	nokia.Settings.set('app_id', '');
	// nokia.Settings.set("app_code", "YOUR_TOKEN");
	nokia.Settings.set('app_code', '');

	var map = new nokia.maps.map.Display(document.getElementById('nokia'), {
		
		baseMapType: nokia.maps.map.Display.SATELLITE,
		center: [40.0079, -105.2348],
		zoomLevel: 10
	});

	$('.maptype').on('click', function(){
		var mapType = $(this).attr('data-maptype'); 
		map.set("baseMapType", map[mapType]);  //HERE does NOT accept DOT notation
	});

});