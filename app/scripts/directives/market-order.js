'use strict';

angular.module('tinStreetApp')
  .directive('marketOrder', function () {
    return {
      templateUrl: 'views/market-order.html',
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
          if (!$scope.expansion) {
            return;
          }

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

        $scope.submit = function () {
          $scope.state = 'loading';
          
          instrumentService.postMarketOrder($scope.order)
            .success(function (data) {
              $scope.state = 'saved';
              console.log(data);
            })
            .error(function () {
              $scope.state = 'error';
            });
        };

        $scope.getExpansions();
      }
    };
  });
