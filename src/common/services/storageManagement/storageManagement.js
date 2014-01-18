angular.module('storageManagement', ['mongoService', 'ivpusic.cookie'])
  .service('storageManagement', function (mongoService, ipCookie, $rootScope) {


    //TODO:
    /* cookie methods */
    /* mongoDB & cookies methods - the scariest cookies in the universe */

    var tellMongo = {
        setRead: function(collection, jsonObject) {
          if (ipCookie(collection + '_id') === undefined) {
            mongoService.addCollectionID(collection, jsonObject).then(function(data){
              if ($rootScope.debugStatus === true) {
                console.log("Mongo -> Cookie: " + collection + "_id cookie has been CREATED");
                console.log(data);
              }

              ipCookie(collection + '_id', data[0]._id.$oid, {expires: 30});
            });
          } else {
            mongoService.viewCollectionID(collection, ipCookie(collection + '_id')).then(function(data){
              if ($rootScope.debugStatus === true) {
                console.log("Mongo -> Cookie: " + collection + "_id cookie has been READ");
                console.log(data);
              }
            });
          }
        },
        addInfo: function(collection, jsonObject) {
          mongoService.editCollectionID(collection, jsonObject, ipCookie(collection + '_id')).then(function(data){
            if ($rootScope.debugStatus === true) {
              console.log("Mongo -> Cookie: " + "Data for " + collection + " with the id " + ipCookie(collection + '_id') + " has been UPDATED");
              console.log(data);
            }

          });
        }
    };

    //TODO: Create default JSON Scaffolding for MongoDB here.
    var jsonToSend = {nume_de_cod: "profesorul"};
    jsonToSend.ocupatia = "frontend developer";
    jsonToSend.varsta = "28, vertiginos spre 29";



    //TODO: Have to create a default object to be written in mongo for each collection and use it as wireframe for data entry/reading


    /* =================================== Cookie & data naming variables ============================= */
    var debugCookie = 'debugStatus';
    var favoriteCollection = 'favorites';
    var excludedCollection = 'excluded';
    var switchesCollection = 'switches';

    /* ================================================================================================ */

    //TODO: Should we make this dynamic? based on user input, with economy in mind?
    /* Tell Mongo to create a default entry in each collection for every user, for later storage */
    tellMongo.setRead(favoriteCollection, jsonToSend);
    tellMongo.setRead(excludedCollection, jsonToSend);
    tellMongo.setRead(switchesCollection, jsonToSend);

    /* Logic ABOVE, Outside Service Methods BELOW */
    /* ============ storageManagement RETURN ============= */
    return {
      consoleDebugStatus: function() {
        if (ipCookie(debugCookie) === undefined) {
          ipCookie(debugCookie, '0', {expires: 30});
          return false;
        } else if (ipCookie(debugCookie) == '0') {
          return false;
        } else {
          return true;
        }
      }
    };






    /* =====================   SAVED AS EXAMPLE   ================== */
    /* mongo */

    //This method creates a new collection in the MongoDB, we don't need it anymore, we have the three necessary collections already made.
    // Collections: favorites, excluded, switches
    /*var theObject = {};
     storageManagement.createCollection('switches', theObject).then(function(data){
     //console.log(data);
     });*/


    //DEMO USAGE
    //editCollectionID parameters: collectionID(collection name), collectionData(the JSON Object), dataID (the data ID inside the collection)
    /*var theObject = {venue: "Old House"};
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
    });*/

  })
;
