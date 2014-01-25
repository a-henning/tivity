
angular.module( 'tivity.changelog', [
  'ui.router.state',
  'footerBar',
  'ajoslin.promise-tracker'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  .config(function config( $stateProvider ) {
    $stateProvider.state( 'changelog', {
      url: '/changelog',
      views: {
        "main": {
          controller: 'ChangelogCtrl',
          templateUrl: 'changelog/changelog.tpl.html'
        }
      },
      data:{ pageTitle: 'Changelog' }
    });
  })

  .controller( 'ChangelogCtrl', function ChangelogController( $scope, geolocation, foursquare, promiseTracker/*, localStorageService*/ ) {
    //Create / get our tracker with unique ID
    $scope.loadingTracker = promiseTracker('loadingTracker');

  })

;

