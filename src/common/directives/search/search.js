angular.module('searchBar', [])
  .directive('searchBar', function (){
    return {
      restrict: 'C',
      replace: true,
      scope: { ngModel : '=searchTerm' },
      //template: '<form ng-submit="searchVenue()" action=""><input type="search" placeholder="Search" ng-model="searchTerm"><input type="submit" value="go"></form>',
      templateUrl: 'templates/searchBar.tpl.html',
      controller: ['$scope', function( $scope) {
        $scope.searchVenue = function(){
          window.location = 'search/' + $scope.searchTerm;
        };
      }]/*,
      link: function(scope, element, attrs) {
        //Doing search
        scope.searchVenue = function(){
          window.location = 'search/' + $scope.searchTerm;
        };
      }*/
    };
  });