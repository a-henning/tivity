
angular.module( 'tivity.food', [
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
    $stateProvider.state( 'food', {
      url: '/food',
      views: {
        "main": {
          controller: 'FoodCtrl',
          templateUrl: 'food/food.tpl.html'
        }
      },
      data:{ pageTitle: 'Food' }
    });
  })

  .controller( 'FoodCtrl', function FoodController( $scope, geolocation, foursquare ) {

  })

;

