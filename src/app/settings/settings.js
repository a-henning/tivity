
angular.module( 'tivity.settings', [
    'ui.router.state',
    'foursquare',
    'storageManagement',
    //'geolocation', TODO: Enable when doing gMaps Routes
    'ajoslin.promise-tracker'/*,
    'google-maps',
    'angular-carousel'*/
  ])

  //The dev controller will meddle a lot with the rootScope, just putting this here for the future.
  .run( function run ($rootScope) {
    /*$rootScope.$on('$stateChangeSuccess', function (event, currentState) {

    });*/
  })

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'settings', {
      url: '/settings',
      views: {
        "main": {
          controller: 'SettingsCtrl',
          templateUrl: 'settings/settings.tpl.html'
        }
      },
      data:{ pageTitle: 'Settings' }
    });
  })
  .controller( 'SettingsCtrl', function SettinsgController( $scope, storageManagement ) {

    //This method creates a new collection in the MongoDB, we don't need it anymore, we have the three necessary collections already made.
    // Collections: favorites, excluded, switches
    /*var theObject = {};
    storageManagement.createCollection('switches', theObject).then(function(data){
      //console.log(data);
    });*/

    //editCollectionID parameters: collectionID(collection name), collectionData(the JSON Object), dataID (the data ID inside the collection)
    var theObject = {venue: "Old House"};
    var dataID = '52d83a61e4b00bec814de847';
    storageManagement.addEditCollectionID('excluded', theObject, dataID).then(function(data){
      console.log('addEditCollectionID METHOD CALL results:');
      console.log(data);
    });
    storageManagement.viewCollectionID('excluded', dataID).then(function(data){
      console.log('viewCollectionID METHOD CALL results:');
      console.log(data);
    });

    storageManagement.listCollections().then(function(data){
      console.log(data);
    });
    storageManagement.listCollection('excluded').then(function(data){
      console.log('listCollection METHOD CALL results:');
      console.log(data);
    });


  })
;