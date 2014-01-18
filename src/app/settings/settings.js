
angular.module( 'tivity.settings', [
    'ui.router.state',
    'foursquare',
    'storageManagement',
    'ajoslin.promise-tracker'

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
  .controller( 'SettingsCtrl', function SettinsgController( $scope, storageManagement ) {

  })
  .controller( 'AppSettingsCtrl', function AppSettinsgController( $scope, storageManagement ) {

  })
  .controller( 'DeveloperSettingsCtrl', function DeveloperSettinsgController( $scope, storageManagement ) {

  })
  .controller( 'ExperimentalSettingsCtrl', function ExperimentalSettinsgController( $scope, storageManagement ) {

  })
;