/**
 * Created by ahenning on 3/3/14.
 */
angular.module( 'tivity.nearby', [
        'ui.router.state',
        'foursquare'
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
            data:{ pageTitle: 'Nearby places' }
        });
    })

    .controller( 'NearbyCtrl', function NearbyCtrl( $scope, foursquare ) {
        $scope.near = "Cluj-Napoca";
        $scope.radius = 10;
        //With the location at hand, we're calling the foursquare service.
        foursquare.getNearby($scope.near, $scope.radius).then(function(data){

            //when the data is ready, populate the $scope variables.
            $scope.locations = data[0].response.groups[0].items;
            $scope.locationName = data[0].response.headerFullLocation;
        });
    })
;