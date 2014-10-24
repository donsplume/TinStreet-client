'use strict';

// Declare app level module which depends on views, and components
angular.module('tinStreet', [
  'ngRoute',
  'tinStreet.album',
  'tinStreet.login',
  'tinStreet.utils'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);