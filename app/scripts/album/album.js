'use strict';

angular.module('tinStreet.album', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/album', {
    templateUrl: 'scripts/album/album.html',
    controller: 'AlbumCtrl as album'
  });
}])

.controller('AlbumCtrl', ['socketService', Album]);

function Album(socketService) {
  var that = this;
  that.items = [];

  var sock = socketService('album');  

  sock.onopen = function () {
    sock.send({
      operation: 'SELECT',
      data: {
        name: 'all_the_lands'
      }
    });
  };

  sock.onmessage = function (data) {
    that.items.push(data);    
  };
}
