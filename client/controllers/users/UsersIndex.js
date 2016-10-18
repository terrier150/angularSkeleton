myApp.controller('usersIndex', function($scope, $location, userFactory){
	// Here is where we are creating the index method for users 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	console.log("loading usersIndex controller /client/controllers/users/UsersIndex");
	userFactory.index(function(users){
			// no errros lets display users on to page
			$scope.users = users;
	})
})