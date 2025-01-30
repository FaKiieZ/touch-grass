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

addMap('maps/test-map.gpx')