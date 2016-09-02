(function() {
  'use strict';
     angular
       .module('app')
       .config(['$routeProvider', config]);

     function config($routeProvider) {
       $routeProvider
         .when('/', {
           controller: 'placeController',
           controllerAs: 'vm',
           templateUrl: '/views/all_places.html'
         })
          .when('/detail/:id', {
            controller: 'placeController',
            controllerAs: 'vm',
            templateUrl: '/views/place_detail.html'
          })
          .when('/new', {
            controller: 'placeController',
            controllerAs: 'vm',
            templateUrl: '/views/place_new.html'
          })
          .when('/weather/:id', {
            controller: 'weatherController',
            controllerAs: 'vm',
            templateUrl: '/views/weather.html'
          })
         .otherwise({
           redirectTo: '/'
         });
     }
})();
