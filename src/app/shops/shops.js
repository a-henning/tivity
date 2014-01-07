
angular.module( 'tivity.shops', [
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
    $stateProvider.state( 'shops', {
      url: '/shops',
      views: {
        "main": {
          controller: 'ShopsCtrl',
          templateUrl: 'shops/shops.tpl.html'
        }
      },
      data:{ pageTitle: 'Shops' }
    });
  })

  .controller( 'ShopsCtrl', function ShopsController( $scope, geolocation, foursquare ) {

  })

;

