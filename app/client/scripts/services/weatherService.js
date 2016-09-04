(function() {

'use strict';

angular

  .module("app")

  .service('dataServiceWeather', ['$http', function($http) {
     //get weather
    this.getWeather = function(latlon, callback) {
      $http.jsonp('https://api.forecast.io/forecast/320d2a073c44c6d44f2a776554547b53/' + latlon + '?callback=JSON_CALLBACK')
           .then(callback);
     };
}]);
})();
