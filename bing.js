$(document).on('load', function GetMap(){});

$(document).on('ready', function(){
			
	var map = new Microsoft.Maps.Map(document.getElementById('bing'), {
		// credentials: "Your Bing Maps Key",
		credentials: 'AolIIreghmvKtz03i4M5zN9beapbOskEupo1x96mBA5aO12592OezyL1bTmyKehg',
		center: new Microsoft.Maps.Location(40.0079, -105.2348),
		disableZooming: true,
		mapTypeId: Microsoft.Maps.MapTypeId.aerial,
		zoom: 15	
	});
	
	// console.log(map.getMapTypeId());
	

	// $('.maptype').on('click', function(){
	// 	var mapType = $(this).attr('data-maptype');
	// 	// console.log(mapType);
	// 	setMapType("mapTypeId", mapType);
	// });

	
});