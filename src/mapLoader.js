function addMap(url)
{    
    const options = {
        async: true,
        polyline_options: { color: 'red' },
    };
    
    const gpx = new L.GPX(url, options).on('loaded', (e) => {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
}

addMap('https://github.com/FaKiieZ/touch-grass/tree/main/src/maps/test-map.gpx')