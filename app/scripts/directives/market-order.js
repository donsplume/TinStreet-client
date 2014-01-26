'use strict';

angular.module('tinStreetApp')
  .directive('marketOrder', function () {
    return {
      templateUrl: 'views/market-order.html',
      restrict: 'E',
      scope: true,
      controller: function ($scope, instrumentService) {

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
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
