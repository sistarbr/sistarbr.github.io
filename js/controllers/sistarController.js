app.controller('sistarController', ['$scope',
  function($scope, $route, $routeParams, $location) {

    $( '.nav-item-carousel' ).click(function() {
      $( '.nav-item-carousel' ).removeClass('active-item-carousel');
      $( this ).toggleClass( 'active-item-carousel' );
    });

    data = new Date();
    var hyolynAge = data.getFullYear() - 1991;
    var soyouAge = data.getFullYear() - 1992;
    var boraAge = data.getFullYear() - 1990;
    var DasomAge = data.getFullYear() - 1993;

    $( '.hyolynAge' ).html(hyolynAge);
    $( '.soyouAge' ).html(hyolynAge);
    $( '.boraAge' ).html(hyolynAge);
    $( '.dasomAge' ).html(hyolynAge);
  }
]);

app.controller('staffController', ['$scope', 'staffMembers',
  function($scope, staffMembers){
    staffMembers.success(function(data){
      $scope.members = data.members;
    });
  }
]);

app.controller('locationController', function($scope, $rootScope, $location){
  $scope.getCurrentPath = function(){
    return $location.path();
  };
});
