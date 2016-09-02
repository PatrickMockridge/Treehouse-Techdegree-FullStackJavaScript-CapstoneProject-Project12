(function() {
'use strict';
angular
  .module("app")
  .controller('weatherController', ['dataServicePlaces', 'dataServiceWeather', '$routeParams', function(dataServicePlaces, dataServiceWeather, $routeParams){
    // define view model
    var vm = this;
    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe6vikroAoydnIrfEUWl0wZRCj81F-Jls&v";
    // define ID of book from routeparams
    vm.ID = $routeParams.id;
      // get book details based upon ID
      vm.getID = function() {
        dataServicePlaces.getID(vm.ID, function(response) {
          vm.placeDetails = response.data[0];
        });
      };
      // execute get ID function
      vm.getID();

      //var latlon = vm.placeDetails.lat + "," + vm.placeDetails.lon

      vm.getWeather = function() {
        var latlon = vm.placeDetails.lat + "," + vm.placeDetails.lon
        console.log('weather event fired');
         dataServiceWeather.getWeather(latlon, function(response) {
          vm.success = response.data.daily.summary;
          console.log(response);
          vm.failure = false;
        }, function(error) {
          vm.success = false;
          vm.failure = true;
          vm.errorMessages = error.data.errors
          console.log(error);
            });
          };
      //
      //vm.pagination = Pagination.getNew(10);
      //vm.pagination.numPages = Math.ceil(vm.getAllBooks.length/vm.pagination.perPage)

}]);
})();
