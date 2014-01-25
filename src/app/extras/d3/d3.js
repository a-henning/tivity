
angular.module( 'tivity.d3', [
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
        $stateProvider.state( 'd3', {
            url: '/extras/d3',
            views: {
                "main": {
                    controller: 'D3Ctrl',
                    templateUrl: 'd3/d3.tpl.html'
                }
            },
            data:{ pageTitle: 'd3 Data visualization library' }
        });
    })

    .controller( 'D3Ctrl', function D3Controller( $scope, geolocation, foursquare, promiseTracker/*, localStorageService*/ ) {
        //Create / get our tracker with unique ID
        $scope.loadingTracker = promiseTracker('loadingTracker');

    })

;

