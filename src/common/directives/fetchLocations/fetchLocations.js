angular.module('fetchLocations', [])
  .directive('fetchLocations', function (){
    return {
      restrict: 'C',
      //scope: true, // With the scope enabled, we're actually isolating the scope to the current directive, without this we're still bleeing information to the outer scope.
      //TODO: Propagate city name and section outside of this scope in a cleaner way.
      replace: true,
      templateUrl: 'templates/fetchLocations.tpl.html',
      controller: ['$scope', 'geolocation', 'foursquare', function( $scope, geolocation, foursquare ) {
        //We're putting the code inside a fetch function with the LocationType argument so we can call it from the link with the custom locationType
        $scope.fetchTheFiles = function(locationType) {
          var section = locationType;

          //var section = 'food,drinks,shops,arts,outdoors';
          // We are asking the user for access to the location.
          geolocation.getLocation().then(function(data){
            //When location data is ready, we populate the scope.
            $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
            var location = data.coords.latitude + ',' + data.coords.longitude;

            //With the location at hand, we're calling the foursquare service.
            foursquare.getAllData(/*location*/'45.942171,25.02008', section).then(function(data){

              //when the data is ready, populate the $scope variables.
              $scope.locations = data[0].response.groups[0].items;
              $scope.locationName = data[0].response.headerFullLocation;
              console.log($scope.locations);

              //Check to see if the venue has a photo, if not display a default one.
              var nrLocations = data[0].response.groups[0].items.length;
              for( var i=0 ; i < nrLocations; i++ ) {
                if (data[0].response.groups[0].items[i].venue.photos.groups[0] !== undefined) {
                  var venuePhoto =  data[0].response.groups[0].items[i].venue.photos.groups[0].items[0];
                  data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = venuePhoto.prefix + 'width200' + venuePhoto.suffix;
                  data[0].response.groups[0].items[i].venue.picClass = 'picture';
                } else {
                  data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = 'https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-1/32/location_geo_gps_cursor_arrow-512.png';
                  data[0].response.groups[0].items[i].venue.picClass = 'no-picture';
                }
              }

            });
          });
        };
      }],
      link: function(scope, element, attrs) {
        //We're passing the sectionType attribute from the HTML to the directive so we know what to call for from foursquare
        scope.fetchTheFiles(attrs.sectionType);
      }
    };
  });