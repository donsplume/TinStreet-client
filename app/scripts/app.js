'use strict';

angular.module('tinStreetApp', ['ui.router', 'ngAnimate', 'ui.select2'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/marketDepth');

    $stateProvider
      .state('marketDepth', {
        url: '/marketDepth',
        templateUrl: 'views/partials/instrument.html',
        controller: ['$scope', '$state', function ($scope, $state) {
          $scope.instrument = '';//$state.params.instrument;

          $scope.title = 'Instrument Market Depth';
          $scope.status = 'Loaded';

          $scope.loading = false;

          var statuses = [
            'Loading',
            'Loaded',
            'Error',
            'Saved'
          ];

          $scope.$watch('loading', function (loading) {
            $scope.status = (loading) ? 'Loading' : 'Loaded';
          });

          $scope.cycleStatus = function () {
            var i = statuses.indexOf($scope.status) + 1;
            if (i <= statuses.length) {
              $scope.status = statuses[i];
            } else {
              $scope.status = statuses[0];
            }
            console.log($scope.status);
          };
          $scope.searching = false;
          $scope.instrument = $state.params.instrument;
        }]
      });
  });
