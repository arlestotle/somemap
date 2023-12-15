
newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;
let url = https://gbfs.citibikenyc.com/gbfs/en/station_information.json

// Create the createMap function.
let myMap = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [
    layers.lightmap,
    layers.bikeStations
  ]
});

  // Create the tile layer that will be the background of our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


  // Create a baseMaps object to hold the lightmap layer.

  // let baseMaps = {
  //   Lightmap: lightmap
  // };

  // let baseMaps = {ss
  //   "Light Maps": layers.lightmap
  // };

  // Create an overlayMaps object to hold the bikeStations layer.

  // let overlayMaps = {
  //   Bikestations: bikeStations
  // }; 

  // let overlayMaps = {
  //   "Overlay Maps": layers.bikeStations
  // };
  

  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);


// Create the createMarkers function.


  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
