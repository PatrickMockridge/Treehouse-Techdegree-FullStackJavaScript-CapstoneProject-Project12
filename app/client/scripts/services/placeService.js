(function() {

'use strict';

angular

  .module("app")

  .service('dataServicePlaces', ['$http', function($http) {
      // get all places
     this.getAll = function(callback) {
       $http.get('/api/places')
            .then(callback);
     };
     // get specific place
    this.getID = function(id, callback) {
      $http.get('/api/places/' + id)
           .then(callback);
     };
     // update a place
    this.putID = function(id, data, callback, failure) {
     $http.put('/api/places/' + id, data)
          .then(callback, failure);
     };
     // add a new place
     this.addPlace = function(place, callback, failure) {
       $http.post('/api/places', place)
            .then(callback, failure);
     };
}]);
})();
