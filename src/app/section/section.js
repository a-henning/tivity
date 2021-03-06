
angular.module( 'tivity.section', [
    'ui.router.state',
    'tivity.detail',
    'foursquare',
    'fetchLocations',
    'ajoslin.promise-tracker'


  ])

  /*.run(function($rootScope) {
    $rootScope.$broadcast('error',CONSTANTS['errors.location.notFound']);
    $rootScope.$broadcast('error',geolocation_msgs['errors.location.unsupportedBrowser']);
  })*/

  .config(function config( $stateProvider ) {
    $stateProvider
      .state( 'section', {
        url: '/section/:sectionType',
        views: {
          "main": {
            controller: 'SectionCtrl',
            templateUrl: 'section/section.tpl.html'
          }
        },
        data:{ pageTitle: 'Section - ' /*+ $state.params.sectionType*/} //TODO: Inject current state parameter here.
      })
      .state( 'detail', {
        url: '/section/:sectionType/:venueDetail/:venueName', //TODO: make SEO ready links for all the venues.
        views: {
          "main": {
            controller: 'DetailCtrl',
            templateUrl: 'section/detail/detail.tpl.html'
          }
        },
        data:{ pageTitle: 'Section - ' /*+ $state.params.sectionType*/} //TODO: Inject current state parameter here.
      });
  })

  .controller( 'SectionCtrl', function SectionController( $scope, geolocation, foursquare, $stateParams, promiseTracker) {
    $scope.theLocationType = $stateParams.sectionType;

    //Create / get our tracker with unique ID
    $scope.loadingTracker = promiseTracker('loadingTracker');
    //console.log($scope.drawerState);

  })

;

