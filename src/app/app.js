angular.module('tivity', [
  'ngAnimate',
  'ivpusic.cookie',
  'templates-app',
  'templates-common',
  'storageManagement',
  'searchBar',
  'footerBar',
  'tivity.home',
  'tivity.section',
  'tivity.search',
  'tivity.about',
  'tivity.settings',
  'tivity.extras',
  'tivity.changelog',
  'ui.router.state',
  'ui.route',
  'anim-in-out',
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

  .run( function run ($rootScope, ipCookie ) {
    //Create a rootScope variable telling us if the console debugging is enabled or not.

    var debugCookie = 'debugStatus';

    /*Given the switchDebug function, this seems a bit counter intuitive, but we need it
     **in this special scenarion to propragate through $rootScope to enable the logs. NEVER AGAIN.
     **/

    $rootScope.debugStatus = function() {
      if (ipCookie(debugCookie) === undefined) {
        ipCookie(debugCookie, '0', {expires: 30});
        return false;
      } else if (ipCookie(debugCookie) == '0') {
        return false;
      } else {
        return true;
      }
    };

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