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

