angular.module('storageManagement', ['mongoService', 'firebaseService'])
  .service('storageManagement', function (mongoService, firebaseService, ipCookie, $rootScope) {


    /* GLOBAL CURRENT USER ID (generated by Mongo) - For use in other matters ... */
    var currentUser= ipCookie('currentUser');
    //Even if at the moment (FIRST RUN) it gets the value undefined, the user has to enable firebase service at a later date, and by then the cookie will have been created.
    //The cookie will get its value after tellMongo runs for the first time to build the scaffolding

    /* =================================== Cookie & data naming variables ============================= */
    var debugCookie = 'debugStatus';
    var databaseCookie = 'database';
    var favoriteCollection = 'favorites';
    var excludedCollection = 'excluded';
    var switchesCollection = 'switches';
    /* ================================================================================================ */

    //TODO: Create default JSON Scaffolding for MongoDB and firebase here.
    var jsonToSend = {nume_de_cod: "profesorul XAVIER"};
    jsonToSend.ocupatia = "frontend developer, part time superhero ... ";
    jsonToSend.varsta = "28, vertiginos spre 29";


    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



    /*==================================================================================================
    /* ===== Tell Mongo - it is a more convenient way to access the mongoService, moved the logic here
    /* ===== so we can handle all the cookies and communication with persistence from here.
    /* ==================================================================================================*/
    var tellMongo = {
      setRead: function(collection, jsonObject) {
        if (ipCookie(collection + '_id') === undefined) {
          mongoService.addCollectionID(collection, jsonObject).then(function(data){
            if ($rootScope.debugStatus === true) {
              console.log("Mongo -> Cookie: " + collection + "_id cookie has been CREATED");
              console.log(data);
            }

            ipCookie(collection + '_id', data[0]._id.$oid, {expires: 30});

            //We are using the mongo ID as the default user id, we will use the same ID in firebase too.
            //If there is none, set it now.
            ipCookie('currentUser', data[0]._id.$oid, {expires: 30});
          });
        } else {


          mongoService.viewCollectionID(collection, ipCookie(collection + '_id')).then(function(data){
            if ($rootScope.debugStatus === true) {
              console.log("Mongo -> Cookie: " + collection + "_id cookie has been READ");
              console.log(data);
            }

            //We are using the mongo ID as the default user id, we will use the same ID in firebase too.
            //If there is one, update it now.
            ipCookie('currentUser', data[0]._id.$oid, {expires: 30});
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



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


    /*===================================================
     * ============== MongoDB OR Firebase ===============
     * - set which database we are using
     * - switch the used database type
     * - first runtime logic, then the rest.
     * ==================================================*/

    /*===================== SYSTEM LOGIC
     *  At first we are checking to see if there is a database option cookie
     *  - if not we will create the cookie and set it by default to mongo
     *  - then we'll do the FIRST run of mongoService through the methods provided by tellMongo
     *  - on subsequent update we will run through tellMongo up until the user choses Firebase
     *  - the cookie gets changed to firebase then, and all the READ/UPDATE requests will go through that.
     * */


    var firstRunMongo = function() {

      /* Tell Mongo to create a default entry in each collection for every user, for later storage */
      // jsonToSend AT THE TOP ^^^^^^^^^^
      tellMongo.setRead(favoriteCollection, jsonToSend);
      tellMongo.setRead(excludedCollection, jsonToSend);
      tellMongo.setRead(switchesCollection, jsonToSend);

      /* ===EXAMPLE=== Tell Mongo to update the info in the favorite collection, id comes from cookie, object from JSONSend, it the future it will come dynamically */
      tellMongo.addInfo(favoriteCollection, jsonToSend);

      if ($rootScope.debugStatus === true) {
        console.log('storageManagement: firstRunMongo() has run.');
      }
    };

    var firstRunFirebase = function() {
      //we are telling Firebase to add a user for our current ID and the default scaffolding.
      firebaseService.addUser(currentUser, jsonToSend);//TODO: Still need to read the data, don't forget.

      if ($rootScope.debugStatus === true) {
        console.log('storageManagement: firstRunFirebase() has run.');
      }
    };

    if (ipCookie(databaseCookie) === undefined) {

      //defining the cookie, it will be later changed from cookies, and READ at every load.
      ipCookie(databaseCookie, 'mongo', {expires: 30});
      if ($rootScope.debugStatus === true) {
        console.log('storageManagement: default databaseCookie not present, I have just created one.');
      }
      //tellMongo first run in order to populate the db and get the ID's
      firstRunMongo();


    } else {//we are assuming that if it's not mongo, it's firebase, no point in checking otherwise

      if ($rootScope.debugStatus === true) {
        console.log('storageManagement: databaseCookie is FIREBASE, running firstRunFirebase().');
      }
      firstRunFirebase();
    }





/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


    /*===================================================
     * =================== SWITCHES ======================
     *           controllers accessible switches
     * ==================================================*/


    /*===================== SWITCHES LOGIC
     *  For ALL the switches we need to return two methods:
     *  1. A method who actually does the action
     *  2. A method that checks the current state (enabled/disabled)
     * */


    /* Logic ABOVE, Outside Service Methods BELOW */
    /* ============ storageManagement RETURN ============= */
    return {

      //============= USE THIS METHOD STRUCTURE FOR ALL OTHER, we need switch&status methods for action and status response.
      switchDebug: function() {
        return {
          //This is the switch function
          switch: function() {
            if (ipCookie(debugCookie) == '0') {
              alert('Debug Mode enabled, desktop only.');
              ipCookie(debugCookie, '1');
            } else {
              alert('debug disabled');
              ipCookie(debugCookie, '0');
            }
          },
          //This is the status function, it can be called from outside.
          status: function() {
            if (ipCookie(debugCookie) == '0') { return false; } else { return true; }
          }
        };

      }, //====== DEMO METHOD ^^^
      switchDatabase: function() {
        return {
          switch: function() {
            if (ipCookie(databaseCookie) == 'mongo') {
              ipCookie(databaseCookie, 'firebase');
              //Run the Service once to populate with dummy data.
              firstRunFirebase();
            } else {
              ipCookie(databaseCookie, 'mongo');
              //Mongo has already run once, no need.
            }
          },
          //This is the status function, it can be called from outside.
          status: function() {
            if (ipCookie(databaseCookie) == 'mongo') { return true; } else { return false; }
          }
        };

      },
      runFirebase: function(){
        alert('Just wrote something in db');
        firstRunFirebase();
      }
    };






    /* =====================   SAVED AS MongoService communication EXAMPLE   ================== */
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
