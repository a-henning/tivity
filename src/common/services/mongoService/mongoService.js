angular.module('mongoService', [])
  .factory('mongoService', function ($http, $q) {
    return {
      listCollections: function () {
        return $q.all([
            $http.get('https://api.mongolab.com/api/1/databases/tivity/collections?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
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
      listCollection: function (collectionID) {
        return $q.all([
            $http.get('https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionID + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
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
      createCollection: function (collectionID, collectionData) {
        return $q.all([
            $http.post(
              'https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionID + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
              collectionData
            )
          ]).then(function (results) {
            console.log(results);
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      addEditCollectionID: function (collectionID, collectionData, dataID) {
        return $q.all([
            $http.put(
              'https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionID + '/' + dataID  + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
              collectionData
            )
          ]).then(function (results) {
            console.log('addEditCollectionID METHOD results:');
            console.log(results);
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      viewCollectionID: function (collectionID, dataID) {
        return $q.all([
            $http.get(
              'https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionID + '/' + dataID  + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT'
            )
          ]).then(function (results) {
            console.log('viewCollectionID METHOD results:');
            console.log(results);
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      }

    };
  });
