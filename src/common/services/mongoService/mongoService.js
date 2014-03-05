angular.module('mongoService', [])
  .factory('mongoService', function ($http, $q, $rootScope) {
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
            if ($rootScope.debugStatus === true) {
              console.log('Mongo Service: Create Collection');
              console.log(results);
            }

            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      addCollectionID: function (collectionName, collectionData) {
        return $q.all([
            $http.post(
              'https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionName + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
              collectionData
            )
          ]).then(function (results) {
            if ($rootScope.debugStatus === true) {
              console.log('Mongo Service: addEditCollectionID METHOD results:');
              console.log(results);
            }

            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
      editCollectionID: function (collectionName, collectionData, dataID) {
        return $q.all([
            $http.put(
              'https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionName + '/' + dataID  + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
              collectionData
            )
          ]).then(function (results) {
            if ($rootScope.debugStatus === true) {
              console.log('Mongo Service: addEditCollectionID METHOD results:');
              console.log(results);
            }

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
            if ($rootScope.debugStatus === true) {
              console.log('Mongo Service: viewCollectionID METHOD results:');
              console.log(results);
            }
            var aggregatedData = [];
            angular.forEach(results, function (result) {
              aggregatedData = aggregatedData.concat(result.data);
            });
            return aggregatedData;
          });
      },
        listCollectionQuery: function (collectionID, near, radius) {
            return $q.all([
                    $http.get('https://api.mongolab.com/api/1/databases/tivity/collections/' + collectionID + '?apiKey=SN7DF704FBSTjFq5rycwwMHeBluJK4dT',
                        {
                            params: {q: {"near": near, "radius": radius}},
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
