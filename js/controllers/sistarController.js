app.controller('sistarController', ['$scope', function($scope) {

  $( ".nav-item-carousel" ).click(function() {
    $( ".nav-item-carousel" ).removeClass("active-item-carousel");
    $( this ).toggleClass( "active-item-carousel" );
  });

  data = new Date();
  var hyolynAge = data.getFullYear() - 1991;
  var soyouAge = data.getFullYear() - 1992;
  var boraAge = data.getFullYear() - 1990;
  var DasomAge = data.getFullYear() - 1993;

  $( ".hyolynAge" ).html(hyolynAge);
  $( ".soyouAge" ).html(hyolynAge);
  $( ".boraAge" ).html(hyolynAge);
  $( ".dasomAge" ).html(hyolynAge);
}]);
