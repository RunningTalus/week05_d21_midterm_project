$(document).on('ready', function(){

	/*An example of using the MQA.EventUtil to hook into the window load event and execute defined function
  passed in as the last parameter. You could alternatively create a plain function here and have it
  executed whenever you like (e.g. <body onload="yourfunction">).*/
 
  MQA.EventUtil.observe(window, 'load', function() {
    
    /*Create an object for options*/
    var options={
       elt:document.getElementById('mapquest'),       /*ID of element on the page where you want the map added*/
       zoom:3,                                  /*initial zoom level of the map*/
       latLng:{lat:40.0079, lng:-105.2348},  /*center of map in latitude/longitude */
       mtype:'sat',                              /*map type (map)*/
       zoomOnDoubleClick:false,										/*zoom in when double-clicking on map*/
       // size: {width: 100%, height: 512px}                  
     };
 
     /*Construct an instance of MQA.TileMap with the options object*/
     window.map = new MQA.TileMap(options);
   });


});


//MQA.TileMap
	// elt {Element} the parent DOM Element to initialize the map in
	// zoom {Number} the initial zoom level (between 2-18, inclusive)
	// latLng {MQA.LatLng} the initial map center as a lat/lng point
	// mtype {String} the initial map type to display (map, sat, hyb, osm)
	// bestFitMargin {Number} the margin offset from the map viewport to do a bestfit on shapes
	// useRightClick {Boolean} use the basic right click functionality
	// zoomOnDoubleClick {Boolean} controls default double click behavior (defaults to true)
	// collection {MQA.ShapeCollection} a prepopulated MQA.ShapeCollection that will be added to the map and bestfit on load