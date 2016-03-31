var app = angular.module('sistarBr', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "sistarController",
      templateUrl: "views/home.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});
