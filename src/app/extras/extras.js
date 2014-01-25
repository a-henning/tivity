
angular.module( 'tivity.extras', [
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
        $stateProvider.state( 'extras', {
            url: '/extras',
            views: {
                "main": {
                    controller: 'ExtrasCtrl',
                    templateUrl: 'extras/extras.tpl.html'
                }
            },
            data:{ pageTitle: 'Extras' }
        });
    })

    .controller( 'ExtrasCtrl', function ExtrasController( $scope, geolocation, foursquare, promiseTracker/*, localStorageService*/ ) {
        //Create / get our tracker with unique ID
        $scope.loadingTracker = promiseTracker('loadingTracker');

    })

;

