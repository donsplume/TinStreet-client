'use strict';

angular.module('tinStreet.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'scripts/login/login.html',
    controller: 'LoginCtrl as login'
  });
}])

.controller('LoginCtrl', ['$http', LoginCtrl]);

function LoginCtrl($http) {
  this.$http = $http;
  this.username = 'elliotcw';  
}

LoginCtrl.prototype.signIn = function() {
  this.$http.post('api/login', {
  	username: this.username,
  	password: this.password
  })
  .success(function () {
  	window.location.hash = 'album';
  })
  .error(function () {
  	alert('login error, try again');
  });
};