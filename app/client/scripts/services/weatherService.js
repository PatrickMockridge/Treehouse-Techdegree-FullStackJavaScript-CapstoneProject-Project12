(function() {

'use strict';

angular

  .module("app")

  .service('dataServiceWeather', ['$http', function($http) {
     //get specific loan
    this.getWeather = function(latlon, callback) {
      $http.get('https://api.forecast.io/forecast/320d2a073c44c6d44f2a776554547b53/' + latlon)
           .then(callback);
     };
}]);
})();
