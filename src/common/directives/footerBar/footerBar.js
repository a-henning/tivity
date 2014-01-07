angular.module('footerBar', [])
  .directive('footerBar', function (){
    return {
      restrict: 'C',
      replace: true,
      //template: '',
      templateUrl: 'templates/footerBar.tpl.html'/*,
      controller: ['$scope', 'geolocation', 'foursquare', function( $scope, geolocation, foursquare ) {

      }],
      link: function(scope, element, attrs) {

      }*/
    };
  });