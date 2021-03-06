# Turf.js-Examples

The main objective of this repository is to understand and explaining each example of `Turf.js` this can be useful for me to get more familiarity with`Turf.js` and also I hope this can be useful to others to understand, how it is usefull and where we can apply for solving problems in spatial technology.

# Turf.js

`Turf.js` is a open-source JavaScript library for spatial analysis. It can be added to any websites as a client-side plugin or we can run in server-side with the helf of `Node.js`. `Turf.js` includes traditional spatial operations like Measuring area, distance and join points to polygon etc. 

## Many industries use Turfjs for

       - Finding nearest POIs like Restaurants, Coffee shops, Theaters etc.
       - Calculating distance and travel time
       - Buffer Analysis etc
       
       
## Running Examples in Node.js

For running these examples in Node.js, we need to clone this repository and install node modules from `package.json`.

```
git clone https://github.com/venkanna37/turfJS.git
cd turfJS
npm install
node < file name > (Ex. node 01_along.js)
```
when running these examples data will be taken from data folder and output saves in output folder. I used some randome points and `geojson` files as data for running examples.

## Examples

1. **along**

     * It takes a `LineString` from geojson or array of coordinates and returns a `Point` (LatLong values) at specified distance along a line from starting point.

       
  <p align="center">
  <img width="400" height="200" src="/images/along.png">
  </p>
  
2. **area**
     * It takes one or more features and calculates their area in square meters.
       
3. **bbox**

     * It takes a set of features, and calculates the bbox for input features, and returns a bbox.
  
4. **bearing**

     * It takes two `points` and finds the geographic bearing between them. ie. angle measured in degrees from the North line (0 degrees).
  
5. **center**

     * Takes `Feature` or a `FeatureCollection` and returns absolute center point of all features.
  
6. **centerOfMass**

     * Takes any `Feature` or a `FeatureCollection` and returns its center of mass using this formula: Center of Polygon.
  
7. **centroid**

     * Takes one or more features and calculates the centroid using the mean of all vertices. This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.
  
8. **destination**

     * Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees. This uses the Haversine formula to account for global curvature.


9. **distance**

     * Calculates the distance between two points in degrees, radians, miles, or kilometers. This uses the Haversine formula to account for global curvature.
  
10. **envelope**

      * It takes any number of features and returns a rectangular Polygon that encompasses all vertices

11. **length**

      * It takes a GeoJSON and measures its length in the specified units, (Multi)Point 's distance are ignored.
  
12. **midpoint**

      * It takes two points and returns a point midway between them. The midpoint is calculated geodesically, meaning the curvature of the earth is taken into account.
  
13. **pointOnFeature**

      * It takes a Feature or FeatureCollection and returns a Point guaranteed to be on the surface of the feature.
  
14. **polygonTangents**

      * Finds the tangents of a (Multi)Polygon from a Point.
  
15. **pointToLineDistance**

      * Returns the minimum distance between a Point and a LineString , being the distance from a line the minimum distance between the point and any segment of the LineString.
  
16. **convex**

      * Takes a Feature or a FeatureCollection and returns a convex hull Polygon.
  
17. **hexaGrid**

      * Takes a bounding box and the diameter of the cell and returns a FeatureCollection of flat-topped hexagons or triangles ( Polygon features) aligned in an "odd-q" vertical grid as described in Hexagonal Grids.
  
18. **pointTriangleSquareGrids**

      * These takes bounding box and cellSide, creates Point, Triangle, Square grids.
