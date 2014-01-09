
angular.module( 'tivity.search', [
  'ui.router.state',
  'foursquare',
  'geolocation',
  'fetchLocations',
  'footerBar',
  'ajoslin.promise-tracker'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */

  .controller( 'SearchCtrl', function SearchController( $scope, geolocation, foursquare, $stateParams, promiseTracker ) {
    $scope.queryParam = $stateParams.queryVenue;

    //Create / get our tracker with unique ID
    $scope.loadingTracker = promiseTracker('loadingTracker');

    geolocation.getLocation().then(function(data){

      //When location data is ready, we populate the scope.
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      var location = data.coords.latitude + ',' + data.coords.longitude;

      //With the location at hand, we're calling the foursquare service.
      foursquare.searchVenue(location, $stateParams.queryVenue).then(function(data){

        //when the data is ready, populate the $scope variables.
        console.log(data[0].response.venues);
        $scope.locations = data[0].response.venues;

        console.log($scope.locations);

        //Check to see if the venue has a photo, if not display a default one.
        var nrLocations = data[0].response.venues.length;
        for( var i=0 ; i < nrLocations; i++ ) {
          var categoryName = data[0].response.venues[i].categories[0].shortName;
          data[0].response.venues[i].categories[0].categoryName = categoryName.toLowerCase();
          /*if (data[0].response.groups[0].items[i].venue.photos.groups[0] !== undefined) {
            var venuePhoto =  data[0].response.groups[0].items[i].venue.photos.groups[0].items[0];
            data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = venuePhoto.prefix + 'width200' + venuePhoto.suffix;
            data[0].response.groups[0].items[i].venue.picClass = 'picture';
          } else {
            data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = 'https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-1/32/location_geo_gps_cursor_arrow-512.png';
            data[0].response.groups[0].items[i].venue.picClass = 'no-picture';
          }*/
        }

      });
    });

  })

;

