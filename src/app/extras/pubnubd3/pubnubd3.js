
angular.module( 'tivity.pubnubd3', [
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
        $stateProvider.state( 'pubnubd3', {
            url: '/extras/pubnubd3',
            views: {
                "main": {
                    controller: 'PubNubD3Ctrl',
                    templateUrl: 'pubnubd3/pubnubd3.tpl.html'
                }
            },
            data:{ pageTitle: 'PubNubD3' }
        });
    })

    .controller( 'PubNubD3Ctrl', function PubNubD3Controller( $scope, geolocation, foursquare, promiseTracker/*, localStorageService*/ ) {
        //Create / get our tracker with unique ID
        $scope.loadingTracker = promiseTracker('loadingTracker');

    })

;

