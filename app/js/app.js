var app = angular.module('clothesStore', ['ngRoute','clothesStore']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/store.html',
    controller: 'StoreController'
  });
}]);
