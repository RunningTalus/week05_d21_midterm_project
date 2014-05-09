$(document).on('ready', function(){

	// nokia.Settings.set("app_id", "YOUR_APPID");
	nokia.Settings.set('app_id', '77VM5B8BjUkIb4tsZbhe');
	// nokia.Settings.set("app_code", "YOUR_TOKEN");
	nokia.Settings.set('app_code', 'X47sOlRqLiQfpL9wBk458Q');

	var map = new nokia.maps.map.Display(document.getElementById('nokia'), {
		
		baseMapType: nokia.maps.map.Display.SATELLITE,
		center: [40.0079, -105.2348],
		zoomLevel: 10
	});

	$('.maptype').on('click', function(){
		var mapType = $(this).attr('data-maptype'); 
		map.set("baseMapType", map[mapType]);  //HERE is having problems with DOT notation?
	});

});