var turf = require('turf');
var fs = require('fs');
var bbox = [-71.6497,41.434,-70.4443,42.8886];
var cellSide = 1;
var pointGrid = turf.pointGrid(bbox,cellSide);
var triangleGrid = turf.triangleGrid(bbox,cellSide);
var squareGrid = turf.squareGrid(bbox,cellSide);
fs.writeFileSync('./boston_pointGrid.geojson', JSON.stringify(pointGrid));
fs.writeFileSync('./boston_trianleGrid.geojson', JSON.stringify(triangleGrid));
fs.writeFileSync('./boston_squareGrid.geojson', JSON.stringify(squareGrid));