'use strict';

angular.module('tinStreetApp')
  .directive('marketDepth', function () {
    return {
      templateUrl: 'views/market-depth.html',
      restrict: 'E',
      scope: true,
      controller: function ($scope, instrumentService) {

        $scope.getExpansions = function () {
          $scope.state = 'loading';

          instrumentService.getExpansions()
            .success(function (data) {
              $scope.state = 'loaded';
              $scope.expansions = data;
            })
            .error(function () {
              $scope.state = 'error';
            });
        };

        $scope.getInstruments = function () {
          if (!$scope.expansion) return;

          $scope.state = 'loading';

          instrumentService.getInstruments($scope.expansion)
            .success(function (instruments) {
              $scope.state = 'loaded';
              $scope.instruments = instruments;
            })
            .error(function () {
              $scope.state = 'error';
            });
        };
        
        $scope.search = function () {
          $scope.state = 'loading';
          
          instrumentService.getDepth($scope.instrument)
            .success(function (data) {
              $scope.state = 'loaded';
              $scope.depth = data;
            })
            .error(function () {
              $scope.state = 'error';
            });
        };

        $scope.getExpansions();
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
