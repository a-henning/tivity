
angular.module( 'tivity.extras', [
        'ui.router.state',
        'tivity.d3',
        'tivity.pubnub',
        'tivity.pubnubd3',
        'footerBar',
        'ajoslin.promise-tracker',
        'oc.lazyLoad'
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

    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
    }])

    .controller( 'ExtrasCtrl', function ExtrasController( $scope, geolocation, promiseTracker, $ocLazyLoad ) {
        //Create / get our tracker with unique ID
        $scope.loadingTracker = promiseTracker('loadingTracker');


        $script('onDemand/pubnub.min.js', function() {
            $scope.pubnubStatus = "has loaded";
        });

        $script('onDemand/d3.min.js', function() {
            $scope.d3Status = "has loaded";
        });

        $script('onDemand/nv.d3.min.js', function() {
            $scope.nvd3Status = "has loaded";
        });


        $script('onDemand/pubnub-crypto.min.js', function() {
            $scope.pubnubCryptoStatus = "has loaded";
        });


        setTimeout(function(){
            $script('onDemand/fisheye.js', function() {
                $scope.nvd3Status = "has loaded";
            });
            $ocLazyLoad.load({
                name: 'angularCharts',
                files:['onDemand/angular-charts.min.js']
            }).then(function() {
                    $scope.chartStatus = " 'angularCharts' has been injected";
                });

            $ocLazyLoad.load({
                name: 'nvd3ChartDirectives',
                files:['onDemand/angularjs-nvd3-directives.js']
            }).then(function() {
                    $scope.angularnvd3Status = " 'nvd3ChartDirectives' has been injected";
                });
            $ocLazyLoad.load({
                name: 'ngPubNub',
                files:['onDemand/angular-pubnub.js']
            }).then(function() {
                    $scope.angularpubnubStatus = " 'ngPubNub' module has been injected";
                });

        }, 2500);


        /*d3Status
        nvd3Status
        pubnubStatus
        pubnubCryptoStatus
        chartStatus
        dchartStatus
        angularnvd3Status
        angularpubnubStatus*/

    })

;

