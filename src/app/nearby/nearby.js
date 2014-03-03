/**
 * Created by ahenning on 3/3/14.
 */
angular.module( 'tivity.nearby', [
        'ui.router.state',
        'firebase'
    ])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'nearby', {
            url: '/nearby',
            views: {
                "main": {
                    controller: 'NearbyCtrl',
                    templateUrl: 'nearby/nearby.tpl.html'
                }
            },
            data:{ pageTitle: 'Nearby places?' }
        });
    })

    .controller( 'NearbyCtrl', function AboutCtrl( $scope ) {
        $scope.message = "Places nearby to you";
    })

;