angular.module('googleMapsFactory', [])
  .factory('googleMapsFactory', function ($q) {
      var deferred = $q.defer();
      if(typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
        console.log('yes, google is undefined, creating promise');
        // Early-resolve the promise for googleMaps
        deferred.resolve(window.google.maps);
        return deferred.promise;
      }
      var randomizedFunctionName = 'onGoogleMapsReady' + Math.round(Math.random()*1000);
      window[randomizedFunctionName] = function() {
        window[randomizedFunctionName] = null;
        // Resolve the promise for googleMaps
        deferred.resolve(window.google.maps);
      };
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3.14&sensor=false&callback='+randomizedFunctionName;
      document.body.appendChild(script);
      // Return a promise for googleMaps
      return deferred.promise;
  })
;