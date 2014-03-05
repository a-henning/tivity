/**
 * Created by ahenning on 3/3/14.
 */
angular.module( 'tivity.nearby', [
        'ui.router.state',
        'foursquare',
        'geolocation',
        'mongoService'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'nearby', {
        url: '/nearby',
        views: {
            "main": {
                controller: 'NearbyCtrl',
                templateUrl: 'nearby/nearby.tpl.html'
            }
        },
        data:{ pageTitle: 'Nearby places' }
    });
})

/**
 * Nearby places listing controller.
 */
.controller( 'NearbyCtrl', function NearbyCtrl( $scope, $q, $timeout, foursquare, geolocation, mongoService ) {

    // default radius of 500 meters
    $scope.radius = 500;

    //With the location at hand, we're calling the foursquare service nearby function.
    $scope.exposedFoursquare = function() {

        // set timeout
        //$timeout(this, 1000);

        // check input
        if ($scope.near === undefined || $scope.near === "") {
            console.log('First IF');
            var coord = "";

            // get latitude and longitude from geolocation
            geolocation.getLocation().then(function(data) {

                //When location data is ready, we populate the scope.
                coord = data.coords.latitude + ',' + data.coords.longitude;

                // get nearby locations using latitude, longitude and default radius of 100 meters
                foursquare.getNearbyCoordinates(coord, $scope.radius).then(function(data) {

                    // processing function for reading photos
                    process(data);
                    $scope.locations = data[0].response.groups[0].items;
                    $scope.locationName = data[0].response.headerFullLocation;
                });
            });

        } else if ($scope.near.length > 3) {
            console.log('Sdecond ELSE IF');
            console.log($scope.near.length);
            // check if parameters exist in mongoLab
            mongoService.listCollectionQuery("foursquare", $scope.near, $scope.radius).then(function(mongoData) {
                console.log("Mongo data length: " + mongoData.length + " , data: VVVV");
                 console.log(mongoData.length);

                if (mongoData.length === 0) {
                    console.log('Data not present, persisting what we have so far');
                    // get nearby locations using input values in scope
                    foursquare.getNearbyLocation($scope.near, $scope.radius).then(function(fourSquareData) {
                        console.log('foursquare nearby location');
                        console.log(fourSquareData);
                        // processing function for reading photos
                        process(fourSquareData);
                        $scope.locations = fourSquareData[0].response.groups[0].items;

                        // persist in mongoLab
                        console.log("Persisting new mongo data");
                        mongoService.createCollection("foursquare",
                            {"near": $scope.near, "radius": $scope.radius, "data": fourSquareData}).then(function(data) {
                                console.log("Collection created successfully");
                                // new collection successfully created
                                return;
                            });
                    });
                } else {
                    console.log("Reading mongo data that exists");
                    console.log(mongoData[0].data[0]);
                    $scope.locations = mongoData[0].data[0].response.groups[0].items;
                }
            }/*, function() {
                console.log("Reading mongo data");
                $scope.locations = mongoData.data[0].response.groups[0].items;
            }*/);
        }

    }
        // call foursquare function with initial scope values
        $scope.exposedFoursquare();
    });

/**
 * Function for processing response data in order to receive image info.
 * @param data the response data object
 */
function process(data) {
    var nrLocations = data[0].response.groups[0].items.length;
    for( var i=0 ; i < nrLocations; i++ ) {
        //create the extra name in URL
        var venueName = encodeURI(data[0].response.groups[0].items[i].venue.name.toLowerCase().replace(/ /g,"-").replace(/[&'<>"0123456789]/g,""));
        data[0].response.groups[0].items[i].venue.venueName = venueName;

        if (data[0].response.groups[0].items[i].venue.photos.groups[0] !== undefined) {
            var venuePhoto =  data[0].response.groups[0].items[i].venue.photos.groups[0].items[0];
            data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = venuePhoto.prefix + 'width200' + venuePhoto.suffix;
            data[0].response.groups[0].items[i].venue.picClass = 'picture';
        } else {
            data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = 'https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-1/32/location_geo_gps_cursor_arrow-512.png';
            data[0].response.groups[0].items[i].venue.picClass = 'no-picture';
        }
    }
}