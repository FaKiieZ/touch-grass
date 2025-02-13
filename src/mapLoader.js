var gpxLayer = new L.FeatureGroup();
var mapsElement = document.getElementById("maps")

function addMap(url)
{    
    gpxLayer = new L.FeatureGroup();

    const options = {
        async: true,
        polyline_options: { color: 'red' },
    };
    
    const gpx = new L.GPX(url, options)

    gpxLayer.addLayer(gpx);
    map.addLayer(gpxLayer);
}

function changeMap()
{
    var selectedMap = mapsElement.value
    console.log("map selected: " + selectedMap)
    map.removeLayer(gpxLayer);
    addMap('maps/' + selectedMap + '.gpx');
}

mapsElement.onchange = changeMap;
changeMap()