
angular.module( 'tivity.settings', [
    'ui.router.state',
    'foursquare',
    'storageManagement',
    'ajoslin.promise-tracker',
    'hmTouchEvents'

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

    //Console Debug Switch ========== DEMO FOR USAGE IN OTHER PARTS

    //ATTENTION: We need to expose to the scope the value of the status so it can be interpreted by ng-class
    //====== Like this the buttons will be active or not depending on the settings, how it should be...

    //Running the first check to set the button before clicking it.
    $scope.toggleDebugStatus = storageManagement.switchDebug().status();

    $scope.toggleDebug = function(){

      //Run the switch function back in storageManagement
      storageManagement.switchDebug().switch();

      //Running again to change the value so the dom is refreshed.
      $scope.toggleDebugStatus = storageManagement.switchDebug().status();

    };
    //Console Debug Switch END



  })
  .controller( 'ExperimentalSettingsCtrl', function ExperimentalSettinsgController( $scope, storageManagement ) {

  })
;