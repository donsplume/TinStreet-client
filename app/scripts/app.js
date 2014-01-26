'use strict';

angular.module('tinStreetApp', ['ui.router', 'ngAnimate', 'ui.select2'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: ['$scope', '$state', function ($scope, $state) {                    
          $scope.instrument = '';
        }]
      })
      .state('home.instrument', {
        url: '/insturment/:instrument',
        templateUrl: 'views/home.html',
        controller: ['$scope', '$state', function ($scope, $state) {                    
          $scope.instrument = $state.params.instrument;
        }]
      });
  });
