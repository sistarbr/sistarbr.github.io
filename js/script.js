var app = angular.module('sistarBr', ['ngRoute']).config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
      templateUrl : 'views/home.html',
  });

  $locationProvider.html5Mode({
    enable: true,
    requireBase: false
  });
});
