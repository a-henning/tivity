angular.module('tivity', [
  'ngAnimate',
  'templates-app',
  'templates-common',
  'tivity.home',
  'tivity.section',
  'tivity.search',
  'tivity.about',
  'tivity.settings',
  'ui.router.state',
  'ui.route',
  'ngTouch'
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

  .run( function run ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
      $rootScope.getCurrentLocation = function() {
        return currentState.name + '-page';
      };
      console.log(currentState.name);
    });
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location, $stateParams ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | tivity' ;
      }
    });
  })

;