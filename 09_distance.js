var turf = require('turf');
var fs = require('fs');
var point1 = fs.readFileSync('./data/point1.geojson');
var point2 = fs.readFileSync('./data/point2.geojson');
point1 = JSON.parse(point1);
point2 = JSON.parse(point2);
var from = point1.features[0].geometry.coordinates;
var to = point2.features[0].geometry.coordinates;
var distance = turf.distance(from,to);
console.log(distance);
