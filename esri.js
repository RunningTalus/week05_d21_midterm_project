$(document).on('ready', function(){

	var map;
	require(["esri/map", "dojo/domReady!"], function(Map) { 
		map = new Map("esri", {
		center: [-105.2348,40.0079],
		zoom: 2,
		basemap: "national-geographic"
		});
	});
});	