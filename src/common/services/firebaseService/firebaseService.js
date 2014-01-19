angular.module('firebaseService', ['firebase'])
  .service('firebaseService', function ($firebase, $rootScope) {

    var URL = "https://glowing-fire-4586.firebaseio.com";
    var tellFirebase = function(ID, JSON) {
      users = $firebase(new Firebase(URL + '/' + ID));
      users.details = JSON;
      users.$save('details');
    }

    return {
      addUser: function(ID, JSON) {
        tellFirebase(ID,JSON);
      },
      getUser: function(ID) {

      }
    }
  })
;
