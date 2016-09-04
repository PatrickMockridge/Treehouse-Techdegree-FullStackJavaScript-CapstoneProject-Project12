(function() {

'use strict';

angular

  .module("app")

  .service('dataServiceSpace', ['$http', function($http) {
     //get weather
    this.getISS = function(callback, failure) {
      $http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK')
           .then(callback, failure);
     };
}]);
})();
