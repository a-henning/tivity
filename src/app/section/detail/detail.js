
angular.module( 'tivity.detail', [
  'ui.router.state',
  'foursquare',
  'geolocation',
  'fetchLocations',
  'footerBar'
])

  .controller( 'DetailCtrl', function DetailController( $scope, geolocation, foursquare, $stateParams, $window ) {
    $scope.name = $stateParams.venueDetail;

    //With the location at hand, we're calling the foursquare service.
    foursquare.getVenue($stateParams.venueDetail).then(function(data){
      console.log(data[0].response.venue);
      $scope.venue = data[0].response.venue;
      $scope.image = data[0].response.venue.photos.groups[0].items[0].prefix + 'width' + $window.innerWidth + data[0].response.venue.photos.groups[0].items[0].suffix;
      $scope.icon =  data[0].response.venue.categories[0].icon.prefix + '88' + data[0].response.venue.categories[0].icon.suffix;
    });
  })

;

