angular.module( 'tivity.about', [
  'ui.router.state',
  'firebase'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope, $firebase ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

    /*var URL = "https://glowing-fire-4586.firebaseio.com";
    $scope.users = $firebase(new Firebase(URL + '/users'));
    //users.$add({cornelius: "ia a bastard"});
    //users.$add({foo: "bar"});
    $scope.users.$add({foo: "bar"});
    $scope.users.foo = "barza";
    $scope.users.$save('foo');
    //$scope.users.$remove("foo");*/

})

;
