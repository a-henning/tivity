
angular.module( 'tivity.home', [
  'ui.router.state',
  'foursquare',
  'geolocation',
  'fetchLocations',
  'footerBar',
  'ajoslin.promise-tracker',
  'LocalStorageModule'
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

  .controller( 'HomeCtrl', function HomeController( $scope, geolocation, foursquare, promiseTracker, localStorageService ) {
    //Create / get our tracker with unique ID
    $scope.loadingTracker = promiseTracker('loadingTracker');
    console.log(localStorageService.get('visits'));
    if (localStorageService.get('visits') === null ) {
      localStorageService.add('visits', '1');
      console.log(localStorageService.get('visits'));
    } else {
      var nrVisits = parseInt(localStorageService.get('visits'), 10);
      localStorageService.add('visits', nrVisits + 1);
      console.log(localStorageService.get('visits'));
    }
  })

;

