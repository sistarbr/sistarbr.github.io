var app = angular.module('sistarBr', ['ngRoute'])

  //routes
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'views/home.html',
      })
      .when('/www',{
        templateUrl: 'views/www.html'
      })
      .when('/sistar',{
        templateUrl: 'views/sistar.html'
      })
    $locationProvider.html5Mode({
      enable: true,
      requireBase: false
    });
  })

  //components
  .directive('sistarHeader', function(){
    return{
      templateUrl:'components/sistar-header.html'
    };
  })
  .directive('modalContact', function(){
    return{
      templateUrl:'components/modal-contact.html'
    };
  })
  .directive('modalFaq', function(){
    return{
      templateUrl:'components/modal-faq.html'
    };
  })
