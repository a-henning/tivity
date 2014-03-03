angular.module('foursquare', [])
  .factory('foursquare', function ($http, $q) {
    //added a better version generator
    var d = new Date();
    var curr_date = d.getDate();
    if (curr_date < 10) {
      curr_date = '0' + curr_date;
    }
    var curr_month = d.getMonth() + 1; //Months are zero based
    if (curr_month < 10) {
      curr_month = '0' + curr_month;
    }
    var curr_year = d.getFullYear();
    var version = curr_year + "" + curr_month + "" + curr_date;
    //
    return {
      getAllData: function (location, section) {
        var cliendID = '0SSBDOJVOXRLEIVJIUVXXYRIQKW042B313MHXSVXIJB13EV5';
        var clientSecret = 'SGXRTG1ZHCP03C3B2UE3JGTIJQP4EC2YQ2CYKZZ5F5MYTPEJ';

        return $q.all([
            $http.get('https://api.foursquare.com/v2/venues/explore?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=' + version + '&ll=' + location + '&section=' + section + '&sortByDistance=1&venuePhotos=1',
            {
              tracker: 'loadingTracker'
            })
          ]).then(function (results) {
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      getVenue: function (sectionID) {
        var cliendID = '0SSBDOJVOXRLEIVJIUVXXYRIQKW042B313MHXSVXIJB13EV5';
        var clientSecret = 'SGXRTG1ZHCP03C3B2UE3JGTIJQP4EC2YQ2CYKZZ5F5MYTPEJ';

        return $q.all([
            $http.get('https://api.foursquare.com/v2/venues/' + sectionID + '?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=' + version,
              {
                tracker: 'loadingTracker'
              })
          ]).then(function (results) {
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      searchVenue: function (location, query) {
        var cliendID = '0SSBDOJVOXRLEIVJIUVXXYRIQKW042B313MHXSVXIJB13EV5';
        var clientSecret = 'SGXRTG1ZHCP03C3B2UE3JGTIJQP4EC2YQ2CYKZZ5F5MYTPEJ';

        return $q.all([
            $http.get('https://api.foursquare.com/v2/venues/search?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=' + version + '&ll=' + location + '&query=' + query,
              {
                tracker: 'loadingTracker'
              })
          ]).then(function (results) {
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      getImage: function (venueID) {
        var cliendID = '0SSBDOJVOXRLEIVJIUVXXYRIQKW042B313MHXSVXIJB13EV5';
        var clientSecret = 'SGXRTG1ZHCP03C3B2UE3JGTIJQP4EC2YQ2CYKZZ5F5MYTPEJ';
        var version = '20131219'; //TODO: get current date

        return $q.all([
            $http.get('https://api.foursquare.com/v2/photos/' + venueID + '?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=' + version,
              {
                tracker: 'loadingTracker'
              })
          ]).then(function (results) {
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
        getNearby: function (near, radius) {
            var cliendID = '0SSBDOJVOXRLEIVJIUVXXYRIQKW042B313MHXSVXIJB13EV5';
            var clientSecret = 'SGXRTG1ZHCP03C3B2UE3JGTIJQP4EC2YQ2CYKZZ5F5MYTPEJ';

            return $q.all([
                    $http.get('https://api.foursquare.com/v2/venues/explore?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=' + version + '&near=' + near + '&radius=' + radius + '&sortByDistance=1&venuePhotos=1',
                        {
                            tracker: 'loadingTracker'
                        })
                ]).then(function (results) {
                var aggregatedData = [];
                angular.forEach(results, function (result) {
                    aggregatedData = aggregatedData.concat(result.data);
                });
                return aggregatedData;
            });
        }
    };
  });