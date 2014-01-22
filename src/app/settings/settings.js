
angular.module( 'tivity.settings', [
    'ui.router.state',
    'foursquare',
    'storageManagement',
    'ajoslin.promise-tracker',
    'hmTouchEvents',
    'angular-carousel'

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
  .controller( 'SettingsCtrl', function SettingsController( $scope, storageManagement, $location, $anchorScroll ) {
    /*//Making the tabs
     var liElemsMenu = angular.element(document.querySelectorAll( 'ul.segmented-controller > li' ));
     var liElemsContent = angular.element(document.querySelectorAll( 'ul.settings > li' ));*/


  })
  .controller( 'AppSettingsCtrl', function AppSettinsgController( $scope, storageManagement ) {

  })
  .controller( 'DeveloperSettingsCtrl', function DeveloperSettinsgController( $scope, storageManagement, $firebase, $firebaseSimpleLogin ) {



    /*===========================
     * ==== DEBUG SWITCH
     * ===========================*/

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


    /*===========================
     * ==== DATABASE SWITCH
     * ===========================*/
    $scope.databaseStatus = storageManagement.switchDatabase().status();

    $scope.toggleDatabase = function(){

      //Run the switch function back in storageManagement
      storageManagement.switchDatabase().switch();

      //Running again to change the value so the dom is refreshed.
      $scope.databaseStatus = storageManagement.switchDatabase().status();

    };// Database switch END

    /*===========================
     * ==== FIREBASE LOGIN
     * ===========================*/

    var URL = "https://glowing-fire-4586.firebaseio.com";
    var users = new Firebase(URL);

    $scope.authfb = $firebaseSimpleLogin(users, function(error, user){});
    $scope.authemail = $firebaseSimpleLogin(users, function(error, user){});

    if ($scope.authfb.user == null) {
      //$scope.auth.$login('facebook');
    }
    console.log($scope.authfb);
    $scope.doLoginFB = function() {
      $scope.authfb.$login('facebook');
      $scope.$on("$firebaseSimpleLogin:login", function(evt, user) {
        storageManagement.runFirebase();
      });

      /* example of logging in while asking access to permissions like email, user_list, friends_list etc.
       * auth.$login('facebook', {
       rememberMe: true,
       scope: 'email,user_likes'
       });*/
    };
    console.log($scope.authemail);
    $scope.validStatus = true;
    $scope.doRegister = function() {
      //Check to see if the passwords match.
      if ($scope.thepass === $scope.therepeatpass) {

        $scope.authemail.$createUser($scope.useremail, $scope.thepass, function(error, user) {
          if (!error) {
            console.log(user);
            console.log('User Id: ' + user.id + ', Email: ' + user.email);
          }
        });

      } else {
        $scope.validStatus = false;
      }


      $scope.$on("$firebaseSimpleLogin:login", function(evt, user) {
        storageManagement.runFirebase();
      });

      /* example of logging in while asking access to permissions like email, user_list, friends_list etc.
       * auth.$login('facebook', {
       rememberMe: true,
       scope: 'email,user_likes'
       });*/
    };

    $scope.doLoginEmail = function() {
      $scope.authemail.$login('password', {
        email: $scope.useremail,
        password: $scope.thepass,
        rememberMe: true
      });

      $scope.$on("$firebaseSimpleLogin:login", function(evt, user) {
        storageManagement.runFirebase();
      });

      /* example of logging in while asking access to permissions like email, user_list, friends_list etc.
       * auth.$login('facebook', {
       rememberMe: true,
       scope: 'email,user_likes'
       });*/
    };

    $scope.emailStatus = false;
    $scope.doEmailReg = function(){
      if($scope.emailStatus === false) {
        $scope.emailStatus = true;
      } else {
        $scope.emailStatus = false;
      }
    };







  })
  .controller( 'ExperimentalSettingsCtrl', function ExperimentalSettinsgController( $scope, storageManagement ) {

  })
;