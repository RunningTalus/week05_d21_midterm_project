$(document).on('ready', function(){

	var map;
	require(['esri/map','dojo/domReady!'], function(Map) { 
		
		map = new Map('esri', {
			basemap: 'national-geographic',
			center: [-105.2348,40.0079],
			zoom: 2
		
		});

		// console.log(map);
		// console.log(typeof map);
		//console.log(map[basemap]);

	});

});	