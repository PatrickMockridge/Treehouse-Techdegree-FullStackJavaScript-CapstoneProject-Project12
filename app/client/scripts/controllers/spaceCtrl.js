(function() {
'use strict';
angular
  .module("app")
  .controller('spaceController', ['dataServiceSpace', '$routeParams', function(dataServiceSpace, $routeParams){
    // define view model
    var vm = this;
    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe6vikroAoydnIrfEUWl0wZRCj81F-Jls&v";

    dataServiceSpace.getISS(function(response) {
      vm.locationISS = response.data;
      console.log(response);
    });
    // define ID of book from routeparams
    vm.getISS = function() {
        // add the recipe and then go to the detail screen
        dataServiceSpace.getISS(function(response) {
          console.log(response.data);
          vm.locationISS = response.data;
        });
      };

}]);
})();
