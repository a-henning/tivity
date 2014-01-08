angular.module('tivity', [
  'templates-app',
  'templates-common',
  'tivity.home',
  'tivity.section', //This should be the only listing of the sections, it's parametrized.
  /*'tivity.arts',
  'tivity.drinks',
  'tivity.food',
  'tivity.outdoors',
  'tivity.shops',*/
  'tivity.about',
  'ui.router.state',
  'ui.route',
  'geolocation',
  'fetchLocations'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $urlRouterProvider.otherwise( '/home' );
  })

  .run( function run () {
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | tivity' ;
      }
    });
  })

;

