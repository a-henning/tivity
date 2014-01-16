angular.module('storageManagement', ['mongoService', 'ngCookies'])
  .service('storageManagement', function (mongoService, ngCookies) {

    /* mongo */

    //This method creates a new collection in the MongoDB, we don't need it anymore, we have the three necessary collections already made.
    // Collections: favorites, excluded, switches
    /*var theObject = {};
     storageManagement.createCollection('switches', theObject).then(function(data){
     //console.log(data);
     });*/

    //editCollectionID parameters: collectionID(collection name), collectionData(the JSON Object), dataID (the data ID inside the collection)
    var theObject = {venue: "Old House"};
    var dataID = '52d83a61e4b00bec814de847';
    mongoService.addEditCollectionID('excluded', theObject, dataID).then(function(data){
      console.log('addEditCollectionID METHOD CALL results:');
      console.log(data);
    });
    mongoService.viewCollectionID('excluded', dataID).then(function(data){
      console.log('viewCollectionID METHOD CALL results:');
      console.log(data);
    });

    mongoService.listCollections().then(function(data){
      console.log(data);
    });
    mongoService.listCollection('excluded').then(function(data){
      console.log('listCollection METHOD CALL results:');
      console.log(data);
    });

  })
;
