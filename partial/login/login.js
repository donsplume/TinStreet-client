angular.module('tinstreet').controller('LoginCtrl', function($scope, $rootScope, $q, $state, AuthService) {
	$scope.AuthService = AuthService;

	$scope.login = function(credentials) {
		var deferred = $q.defer();

		AuthService.login(credentials).then(function(user) {
			AuthService.identity(true).then(function() {
				if ($rootScope.returnToState) {
					$state.go($rootScope.returnToState, $rootScope.returnTostateParams);
					$rootScope.returnToState = undefined;
					$rootScope.returnTostateParams = undefined;
				} else {
					$state.go('collection', {user:AuthService.getUser()});
				}
				deferred.resolve();
			});
		}, function() {
			deferred.reject();
		});
		return deferred.promise;
	};

	$scope.logout = function() {
		AuthService.logout(function(err, res) {
			AuthService.logout();
		});
	};



});