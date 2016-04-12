app.factory('staffMembers', ['$http', function($http){
	return $http.get('members.json')
  	.success(function(data){
  		return data;
  	})
  	.error(function(err){
  		return err;
  	});
}]);
