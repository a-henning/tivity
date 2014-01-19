angular.module('tivity', [
  'ngAnimate',
  'templates-app',
  'templates-common',
  'mongoService',
  'firebaseService',
  'storageManagement',
  'searchBar',
  'footerBar',
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
    $urlRouterProvider.otherwise( '/section/food' );
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

  .run( function run ($rootScope, storageManagement) {
    //Create a rootScope variable telling us if the console debugging is enabled or not.
    $rootScope.debugStatus = storageManagement.consoleDebugStatus();

    //Set body class for individual route pages.
    $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
      $rootScope.getCurrentLocation = function() {
        return currentState.name + '-page';
      };
      if ($rootScope.debugStatus === true) {
        console.log('We are on the "' + currentState.name + '" page.');
      }
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