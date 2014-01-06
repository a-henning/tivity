angular.module('foursquare', [])
  .factory('foursquare', function ($http, $q) {
    return {
      getAllData: function (location, section) {
        var cliendID = '0SSBDOJVOXRLEIVJIUVXXYRIQKW042B313MHXSVXIJB13EV5';
        var clientSecret = 'SGXRTG1ZHCP03C3B2UE3JGTIJQP4EC2YQ2CYKZZ5F5MYTPEJ';
        var version = '20131219';

        return $q.all([
            $http.get('https://api.foursquare.com/v2/venues/explore?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=' + version + '&ll=' + location + '&section=' + section + '&sortByDistance=1')
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