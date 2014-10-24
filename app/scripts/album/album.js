'use strict';

angular.module('tinStreet.album', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/album', {
    templateUrl: 'scripts/album/album.html',
    controller: 'AlbumCtrl'
  });
}])

.controller('AlbumCtrl', ['socketService', '$scope', Album]);

function Album(socketService, $scope) {
  var that = this;
  $scope.items = []

  var sock = socketService('album');  

  sock.onopen = function () {
    sock.send({
      operation: 'SELECT',
      data: {
        name: 'all_the_lands'
      }
    });
  };

  sock.onmessage = function (response) {
    $scope.items.push(JSON.parse(response[0].data));
    $scope.$apply();
    console.log(response[0].data);
  }
}
