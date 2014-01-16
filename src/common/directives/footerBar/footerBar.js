angular.module('footerBar', [])
  .directive('footerBar', function (){
    return {
      restrict: 'C',
      replace: true,
      //template: '',
      templateUrl: 'templates/footerBar.tpl.html',
      controller: ['$scope', '$window', function( $scope, $window ) {
        //Putting window in scope
        $scope.$window = $window;
        //defining scope as false to begin with
        $scope.open = false;
        $scope.drawerState = function() {
          $scope.open = !$scope.open;
          //if the drawer is open add a global event listener
          if ($scope.open) {
            $scope.$window.onclick = function (event) {
              if (event.srcElement.id !== 'more-tab') {
                $scope.open = false;
                $scope.$apply();
              }
            };
          } else {
            $scope.open = false;
            $scope.$window.onclick = null;
          }
        };
      }],
      link: function(scope, element, attrs) {
      }
    };
  });