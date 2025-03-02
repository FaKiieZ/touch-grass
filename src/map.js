var map = L.map("map");

// Disable zooming
map.zoomControl.remove();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();

// Disable dragging
map.dragging.disable();

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var visitedAreas = L.layerGroup().addTo(map);

// Define the initial mask covering the entire map
var maskBounds = [
    [-90, -180],
    [90, 180],
];
var mask = L.rectangle(maskBounds, {
    color: "#000",
    weight: 0,
    fillOpacity: 1,
}).addTo(map);

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        (position) => {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var marker = L.marker([lat, lon]).addTo(map);
            map.setView([lat, lon], 13);

            // Define the visible area as a rectangle around the current position
            var visibleBounds = [
                [lat - 0.05, lon - 0.05],
                [lat + 0.05, lon + 0.05],
            ];
            var visitedArea = L.rectangle(visibleBounds, {
                color: "#ff7800",
                weight: 1,
            }).addTo(visitedAreas);

            // Remove the mask from the visible area
            updateMask(visibleBounds);
        },
        (error) => {
            switch (error.code) {
                case 1:
                    alert("Permission denied");
                    break;
                case 2:
                    alert("Position unavailable");
                    break;
                case 3:
                    alert("Request timeout");
                    break;
                default:
                    alert("Unknown error");
                    break;
            }
        }
    );
}

function updateMask(bounds) {
    map.eachLayer(function (layer) {
        if (layer.options && layer.options.fillOpacity === 1) {
            map.removeLayer(layer);
        }
    });

    // Create a new mask excluding the visible area
    var maskParts = [
        [
            [-90, -180],
            [90, bounds[0][1]],
        ],
        [
            [-90, bounds[1][1]],
            [90, 180],
        ],
        [
            [-90, bounds[0][1]],
            [bounds[0][0], bounds[1][1]],
        ],
        [
            [bounds[1][0], bounds[0][1]],
            [90, bounds[1][1]],
        ],
    ];

    maskParts.forEach(function (part) {
        L.rectangle(part, {
            color: "#000",
            weight: 0,
            fillOpacity: 1,
        }).addTo(map);
    });
}
