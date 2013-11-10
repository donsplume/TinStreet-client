'use strict';

angular.module('tinStreetApp', ['ui.router', 'ngAnimate'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/instrument');

    $stateProvider
      .state('instrument', {
        url: '/instrument',
        templateUrl: 'views/partials/instrument.html',
        controller: function ($scope, $state) {
          $scope.instrument = $state.params.instrument;
          $scope.title = 'Instrument Market Depth';
          $scope.status = 'Loaded';

          $scope.search = function () {
            $state.go('instrument.depth', {instrument: $scope.instrument});
          };

          var statuses = [
            'Loading',
            'Loaded',
            'Error',
            'Saved'
          ];

          $scope.cycleStatus = function () {
            var i = statuses.indexOf($scope.status) + 1;
            if (i <= statuses.length) {
              $scope.status = statuses[i];
            } else {
              $scope.status = statuses[0];
            }
            console.log($scope.status);
          };
        }
      })
      .state('instrument.depth', {
        url: '/depth/:instrument',
        template: '<market-depth instrument="instrument"></market-depth>',
        controller: function ($scope, $state) {
          $scope.instrument = $state.params.instrument;
        }
      });
  });
