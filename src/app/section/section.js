
angular.module( 'tivity.section', [
    'ui.router.state',
    'tivity.detail',
    'foursquare',
    'geolocation',
    'fetchLocations',
    'footerBar'


  ])
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
        url: '/section/:sectionType/:venueDetail', //TODO: make SEO ready links for all the venues.
        views: {
          "main": {
            controller: 'DetailCtrl',
            templateUrl: 'section/detail/detail.tpl.html'
          }
        },
        data:{ pageTitle: 'Section - ' /*+ $state.params.sectionType*/} //TODO: Inject current state parameter here.
      });
  })

  .controller( 'SectionCtrl', function SectionController( $scope, geolocation, foursquare, $stateParams) {
    $scope.theLocationType = $stateParams.sectionType;
  })

;

