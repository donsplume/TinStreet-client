'use strict';

angular.module('tinStreetApp')
  .directive('marketDepth', function () {
    return {
      templateUrl: 'views/components/market-depth.html',
      restrict: 'E',
      scope: {
        instrument: '='
      },
      controller: function ($scope, instrumentService) {
        instrumentService.getDepth($scope.instrument).then(function (data) {
          $scope.depth = data;
        });
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
