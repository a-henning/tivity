angular.module('searchBar', [])
  .directive('searchBar', function (){
    return {
      restrict: 'C',
      replace: true,
      //template: '',
      templateUrl: 'templates/searchBar.tpl.html'/*,
       controller: ['$scope', 'geolocation', 'foursquare', function( $scope, geolocation, foursquare ) {

       }],
       link: function(scope, element, attrs) {

       }*/
    };
  });