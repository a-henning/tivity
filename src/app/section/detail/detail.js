
angular.module( 'tivity.detail', [
  'ui.router.state',
  'foursquare',
  'geolocation',
  'searchBar',
  'footerBar',
  'ajoslin.promise-tracker',
  'google-maps'
])

  .controller( 'DetailCtrl', function DetailController( $scope, geolocation, foursquare, $stateParams, $window, promiseTracker ) {
    $scope.name = $stateParams.venueDetail;


    /*$scope.map = {
      center: {
        latitude: '46.77910918189165',
        longitude: '23.609533309936523'
      },
      zoom: 11
    };*/
    /*geolocation.getLocation().then(function(data){
      //When location data is ready, we populate the scope.
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      var location = data.coords.latitude + ',' + data.coords.longitude;
      $scope.map = {
        center: {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        },
        zoom: 11
      };
    });*/



    //Create / get our tracker with unique ID
    $scope.loadingTracker = promiseTracker('loadingTracker');

    //With the location at hand, we're calling the foursquare service.
    foursquare.getVenue($stateParams.venueDetail).then(function(data){
      console.log(data[0].response.venue);
      $scope.venue = data[0].response.venue;
      $scope.image = data[0].response.venue.photos.groups[0].items[0].prefix + 'width' + $window.innerWidth + data[0].response.venue.photos.groups[0].items[0].suffix;
      $scope.icon =  data[0].response.venue.categories[0].icon.prefix + '88' + data[0].response.venue.categories[0].icon.suffix;

      //Prepare some iterative output
      var venue = data[0].response.venue;
      var categories = "";
      var venueImages = [];

      //Output all the categories
      for (var i = 0; i < venue.categories.length; i++) {
        categories += venue.categories[i].pluralName + ', ';
      }
      $scope.categories = categories;

      //Prepare an array with the images
      for (var j = 0; j < venue.photos.count; j++) {
        var theImage = venue.photos.groups[0].items[j].prefix + 'width' + $window.innerWidth + venue.photos.groups[0].items[j].suffix;
        venue.photos.groups[0].items[j].scaledImage = theImage;
        venueImages.push(venue.photos.groups[0].items[j]);
      }
      $scope.images = venueImages;

      //Google Maps
      $scope.map = {
        center: {
          latitude: data[0].response.venue.location.lat,
          longitude: data[0].response.venue.location.lng
        },
        zoom: 11
      };
    });
  })

;

