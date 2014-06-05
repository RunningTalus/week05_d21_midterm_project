Forms/Search
	Add Address
	Add Lat/Long


Compare Map Vendor API's
-Bing
-ESRI
-Google
-Mapquest
-Nokia

NOTE: 
	
	Nav Bar
		-add About this Project/Why, About Me, References/Links/Resources...
	
	Style
		-add map vendor icons
		-add CSS neatline around maps
		-prepend h2 data-options-type into map-shell

	Remove MapQuest Pan Controls
		-disable internal controls (MQA.TileMap.removeControl) method
	
	Searchboxes
		-create placename search box
			-pipe search parameters into native API search
				-request geocodes
		-create lat/long search box
		-set location for mapOptions
	
	Zoom
		-determine zoom min-max per maptype
		-link pan/scroll

	Disable
		-vendor links in all maps

	Enable HTML5 geolocation
		-pipe into all 5 API's for initial view
	
	Create Dropdown to change maptypes
		-dropdown Handlebars.js subview, nested views, partial

Directions/Routing
-ESRI
-Google
-Mapquest
-Nokia
-Skobbler 
-TomTom

Geocoding
-ESRI
-Google
-Loqate
-Mapquest
-TomTom

// on complete or on ready for each map type
// asyncjs or other callback structure to delay loading each map until all maps are done.  
// static mapping options from all providers