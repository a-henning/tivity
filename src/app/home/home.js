/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representi`ng
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'tivity.home', [
  'ui.router.state',
  'foursquare',
  'geolocation',
  'fetchLocations'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    });
  })

  .controller( 'HomeCtrl', function HomeController( $scope, geolocation, foursquare ) {
    /*var section = 'food';
    $scope.section = 'food';
    //var section = 'food,drinks,shops,arts,outdoors';

    // We are asking the user for access to the location.
    geolocation.getLocation().then(function(data){

      //When location data is ready, we populate the scope.
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      var location = data.coords.latitude + ',' + data.coords.longitude;

      //With the location at hand, we're calling the foursquare service.
      foursquare.getAllData(location, section).then(function(data){

        //when the data is ready, populate the $scope variables.
        $scope.locations = data[0].response.groups[0].items;
        $scope.locationName = data[0].response.headerFullLocation;
        console.log($scope.locations);

        //Check to see if the venue has a photo, if not search one of the tips, if that hasn't a photo either display a default one.
        var nrLocations = data[0].response.groups[0].items.length -1;
        for( var i=0 ; i < nrLocations; i++ ) {
          var venuePhoto =  data[0].response.groups[0].items[i].venue.photos.groups[0];
          if ( data[0].response.groups[0].items[i].tips !== undefined ) {
            var tipsPhoto =  data[0].response.groups[0].items[i].tips[0].photourl;
            if ( tipsPhoto !== undefined ) {
              data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = tipsPhoto;
              data[0].response.groups[0].items[i].venue.picClass = 'picture';
            } else if (venuePhoto !== undefined) {
              data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = venuePhoto;
              data[0].response.groups[0].items[i].venue.picClass = 'picture';
            } else {
              data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = 'https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-1/32/location_geo_gps_cursor_arrow-512.png';
              data[0].response.groups[0].items[i].venue.picClass = 'no-picture';
            }
          } else {
            if (venuePhoto !== undefined) {
              data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = venuePhoto;
              data[0].response.groups[0].items[i].venue.picClass = 'picture';
            } else {
              data[0].response.groups[0].items[i].venue.photos.groups.thePhoto = 'https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-1/32/location_geo_gps_cursor_arrow-512.png';
              data[0].response.groups[0].items[i].venue.picClass = 'no-picture';
            }
          }

        }

      });
    });*/

  })

;

