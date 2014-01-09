angular.module('tivity', [
  'templates-app',
  'templates-common',
  'tivity.home',
  'tivity.section',
  'tivity.search',
  'tivity.about',
  'ui.router.state',
  'ui.route'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise( '/home' );
    $stateProvider.state( 'search', {
      url: '/search/:queryVenue',
      views: {
        "main": {
          controller: 'SearchCtrl',
          templateUrl: 'search/search.tpl.html'
        }
      },
      data:{ pageTitle: 'search' }
    });
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

