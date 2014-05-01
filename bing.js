$(document).on('load', function GetMap(){});

$(document).on('ready', function(){
			
	var map = new Microsoft.Maps.Map(document.getElementById('bing'), {
		// credentials: "Your Bing Maps Key",
		credentials: '',
		center: new Microsoft.Maps.Location(40.0079, -105.2348),
		disableZooming: true,
		mapTypeId: Microsoft.Maps.MapTypeId.aerial,
		zoom: 3

	});

	

});

//map = new Microsoft.Maps.Map(document.getElementById('SDKmap'), {credentials: 'Your Bing Maps Key', disableZooming: true });