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

app.controller('sentMail',function($scope, $http){
  $scope.sendMail = function(a){
    console.log(a.toEmail);
    var mailJSON ={
        "key": "xxxxxxxxxxxxxxxxxxxxxxx",
        "message": {
          "html": ""+a.mailBody,
          "text": ""+a.mailBody,
          "subject": ""+a.subject,
          "from_email": "sender@sending.domain.com",
          "from_name": "Support",
          "to": [
            {
              "email": ""+a.toEmail,
              "name": "John Doe",
              "type": "to"
            }
          ],
          "important": false,
          "track_opens": null,
          "track_clicks": null,
          "auto_text": null,
          "auto_html": null,
          "inline_css": null,
          "url_strip_qs": null,
          "preserve_recipients": null,
          "view_content_link": null,
          "tracking_domain": null,
          "signing_domain": null,
          "return_path_domain": null
        },
        "async": false,
        "ip_pool": "Main Pool"
    };
    var apiURL = "https://mandrillapp.com/api/1.0/messages/send.json";
    $http.post(apiURL, mailJSON).
      success(function(data, status, headers, config) {
        alert('successful email send.');
        $scope.form={};
        console.log('successful email send.');
        console.log('status: ' + status);
        console.log('data: ' + data);
        console.log('headers: ' + headers);
        console.log('config: ' + config);
      }).error(function(data, status, headers, config) {
        console.log('error sending email.');
        console.log('status: ' + status);
      });
  }
})
