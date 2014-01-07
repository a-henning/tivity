
angular.module( 'tivity.drinks', [
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
    $stateProvider.state( 'drinks', {
      url: '/drinks',
      views: {
        "main": {
          controller: 'DrinksCtrl',
          templateUrl: 'drinks/drinks.tpl.html'
        }
      },
      data:{ pageTitle: 'Drinks' }
    });
  })

  .controller( 'DrinksCtrl', function DrinksController( $scope, geolocation, foursquare ) {

  })

;

