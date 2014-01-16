
angular.module( 'tivity.settings', [
    'ui.router.state',
    'foursquare',
    //'geolocation', TODO: Enable when doing gMaps Routes
    'ajoslin.promise-tracker'/*,
    'google-maps',
    'angular-carousel'*/
  ])

  //The dev controller will meddle a lot with the rootScope, just putting this here for the future.
  .run( function run ($rootScope) {
    /*$rootScope.$on('$stateChangeSuccess', function (event, currentState) {

    });*/
  })

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'settings', {
      url: '/settings',
      views: {
        "main": {
          controller: 'SettingsCtrl',
          templateUrl: 'settings/settings.tpl.html'
        }
      },
      data:{ pageTitle: 'Settings' }
    });
  })
  .controller( 'SettingsCtrl', function SettinsgController( $scope, geolocation, foursquare, $stateParams, $window, promiseTracker, $location, $anchorScroll ) {

  })
;