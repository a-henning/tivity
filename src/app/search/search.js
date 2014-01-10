
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
          //Create a category name in the scope for each venue to add it in the link
          var categoryName = data[0].response.venues[i].categories[0].shortName;
          data[0].response.venues[i].categories[0].categoryName = categoryName.toLowerCase();

          //Call for each venue foursquare for the image
          /*var venueID = data[0].response.venues[i].id;

          foursquare.getImage(venueID).then(function(data){
            console.log('image data');
            console.log(data);
          });*/
          //TODO: need to rewrite this in a different way so I can fetch images for all the venues in the search result.

        }

      });
    });

  })

;

