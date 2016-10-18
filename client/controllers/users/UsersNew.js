myApp.controller('usersNew', function($scope, $location, userFactory){


	$scope.createUser = function(){
		console.log("start: /client/controllers/users/UsersNew createUser");
		userFactory.create($scope.user, function(resp){
			console.log("sixth: callback sent to factory definied in /client/controllers/users/UsersNew")
			console.log("I commented out redirect, but usually I would redirect here or show errors");
			if(resp.error){
				// display resp.data.errors on to page
				$scope.errors = resp.errors;
			} else {
				// no errors redirect user back to index page
				// $location.path('/')
			}
		})
	}
})