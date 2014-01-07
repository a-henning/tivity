
angular.module( 'tivity.arts', [
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
    $stateProvider.state( 'arts', {
      url: '/arts',
      views: {
        "main": {
          controller: 'ArtsCtrl',
          templateUrl: 'arts/arts.tpl.html'
        }
      },
      data:{ pageTitle: 'Arts' }
    });
  })

  .controller( 'ArtsCtrl', function ArtsController( $scope, geolocation, foursquare ) {

  })

;

