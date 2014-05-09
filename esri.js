$(document).on('ready', function(){

	var map;
	require(['esri/map','dojo/domReady!'], function(Map) { 
		
		map = new Map('esri', {
			basemap: 'national-geographic',
			center: [-105.2348,40.0079],
			zoom: 9
		
		});

		// //get title of basemap
		// var currentBasemapName = webmapResponse.itemInfo.itemData.baseMap.title;
		// console.log(currentBasemapName);
		// var bmNameEqiv = bmDict[ currentBasemapName ];
		// console.log(bmNameEqiv);           
		// esriMap.removeLayer(webmapResponse.itemInfo.itemData.baseMap.baseMapLayers[0].layerObject);
		// //just reset the base map so we can use setBaseMap later
		// esriMap.setBasemap(bmNameEqiv);

		// $('.maptype').on('click', function(){
		// 	var mapType = $(this).attr('data-maptype'); 
		// 	// console.log(mapType);
			
		// });

	});

});	