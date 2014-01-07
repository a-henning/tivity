
angular.module( 'tivity.outdoors', [
  'ui.router.state',
  'foursquare',
  'geolocation',
  'fetchLocations',
  'footerBar'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'outdoors', {
      url: '/outdoors',
      views: {
        "main": {
          controller: 'OutdoorsCtrl',
          templateUrl: 'outdoors/outdoors.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    });
  })

  .controller( 'OutdoorsCtrl', function OutdoorsController( $scope, geolocation, foursquare ) {

  })

;

