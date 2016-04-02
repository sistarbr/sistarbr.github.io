var app = angular.module('sistarBr', ['ngRoute'])

  //routes
  .config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateUrl : 'views/home.html',
    });
    $locationProvider.html5Mode({
      enable: true,
      requireBase: false
    });
  })

  //modules
  .directive('sistarHeader', function(){
    return{
      templateUrl:'components/sistar-header.html'
    };
  });
