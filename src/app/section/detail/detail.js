
angular.module( 'tivity.detail', [
  'ui.router.state',
  'foursquare',
  //'geolocation', TODO: Enable when doing gMaps Routes
  'ajoslin.promise-tracker',
  'google-maps',
  'angular-carousel'
])

  .controller( 'DetailCtrl', function DetailController( $scope, geolocation, foursquare, $stateParams, $window, promiseTracker, $location, $anchorScroll ) {
    $scope.name = $stateParams.venueDetail;

    //Create / get our tracker with unique ID
    $scope.loadingTracker = promiseTracker('loadingTracker');

    //Some sizing functions with values returned to the view.
    $scope.getWindowHeight = function() {
      return {
        height: $window.innerHeight + 'px'
      };
    };
    $scope.getWindowWidth = function() {
      return {
        width: $window.innerWidth + 'px'
      };
    };

    //Make gMaps container the height of the screen size.
    $scope.runHeight = function() {
      var mapHeight = angular.element(document.querySelector( '.angular-google-map-container' ));
      mapHeight.css('height', ($window.innerHeight - 50) + 'px');
      var mapHeightOuter = angular.element(document.querySelector( 'div.angular-google-map' ));
      mapHeightOuter.css('height', ($window.innerHeight - 50) + 'px');
    };

    //Scroll to the map so it fits on the entire screen //TODO: Maybe a directive with this ?? :-?
    $scope.scrollMap = function() {
      if (!$scope.openMap) {
        $location.hash('');
        $anchorScroll();
      } else {
        $location.hash('map');
        $anchorScroll();
      }

    };

    // Call the foursquare service
    foursquare.getVenue($stateParams.venueDetail).then(function(data){
      console.log(data[0].response.venue);
      $scope.venue = data[0].response.venue;
      $scope.image = data[0].response.venue.photos.groups[0].items[0].prefix + $window.innerWidth + 'x' + $window.innerWidth + data[0].response.venue.photos.groups[0].items[0].suffix;
      $scope.icon =  data[0].response.venue.categories[0].icon.prefix + '88' + data[0].response.venue.categories[0].icon.suffix;

      //Prepare some iterative output
      var venue = data[0].response.venue;
      var categories = "";
      var venueImages = [];

      //Output all the categories
      for (var i = 0; i < venue.categories.length; i++) {
        categories += venue.categories[i].pluralName + ', ';
      }
      $scope.categories = categories;

      //Prepare an array with the images, if there are any
      if (venue.photos.count !== undefined) {
        //Iterate through the images and add them to venueImages object.
        for (var j = 0; j < venue.photos.groups[0].items.length; j++) {
          var theImage = venue.photos.groups[0].items[j].prefix + $window.innerWidth + 'x' + $window.innerWidth + venue.photos.groups[0].items[j].suffix;
          venue.photos.groups[0].items[j].scaledImage = theImage;
          venueImages.push(venue.photos.groups[0].items[j]);
        }
        $scope.images = venueImages;
      }

      //Google Maps directive controls.
      $scope.map = {
        center: {
          latitude: data[0].response.venue.location.lat,
          longitude: data[0].response.venue.location.lng
        },
        zoom: 16,
        options: {
          disableDefaultUI: true,
          panControl: false,
          navigationControl: false,
          scrollwheel: false,
          scaleControl: false
        },
        icons: {
          venueIcon: data[0].response.venue.categories[0].icon.prefix + '88' + data[0].response.venue.categories[0].icon.suffix
        }
      };
      $scope.marker = {
        latitude: data[0].response.venue.location.lat,
        longitude: data[0].response.venue.location.lng
      };

    });
  })

;

