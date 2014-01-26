'use strict';

angular.module('tinStreetApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      scope: {
        close: '&onClose',
        title: '='
      }
    };
  })
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      scope: {
        state: '='
      }
    };
  })
  .directive('draggable', function () {
    return {
      link: function (scope, element) {
        element.draggable();
      }
    };
  });