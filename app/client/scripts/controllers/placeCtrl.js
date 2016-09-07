(function() {
'use strict';
angular
  .module("app")
  .controller('placeController', ['dataServicePlaces', '$routeParams', function(dataServicePlaces, $routeParams){
    // define view model
    var vm = this;
    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?v=3.25&key=AIzaSyDe6vikroAoydnIrfEUWl0wZRCj81F-Jls&v";
    // define ID of book from routeparams
    vm.ID = $routeParams.id;
    // get all books
    dataServicePlaces.getAll(function(response) {
      vm.getAllPlaces = response.data;
      console.log(response.data);
    });
    // new book object
    vm.newPlace = {};
    // add a book
    vm.addPlace = function() {
        // add the recipe and then go to the detail screen
        dataServicePlaces.addPlace(vm.newPlace, function(response) {
          vm.success = "Place Successfully Added!";
          vm.failure = false;
        }, function(error) {
          vm.success = false;
          vm.failure = true;
          vm.errorMessages = error.data.errors
        });
      };
      // update book
      vm.updatePlace = function() {
        console.log('update fired');
        dataServicePlaces.putID(vm.ID, vm.placeDetails, function(response) {
          console.log(response);
          vm.success = "Place Successfully Updated!";
          vm.failure = false;
        }, function(error) {
          vm.success = false;
          vm.failure = true;
          vm.errorMessages = error.data.errors
          console.log(error);
            });
          };
      // get book details based upon ID
      vm.getID = function() {
        dataServicePlaces.getID(vm.ID, function(response) {
          vm.placeDetails = response.data[0];
        });
      };


      vm.getID();

}]);
})();
