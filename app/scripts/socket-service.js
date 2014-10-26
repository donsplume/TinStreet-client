'use strict';

angular.module('tinStreet.utils', [])

.factory('socketService', ['$rootScope', function($rootScope) {
  return function (resource) {    
    var socket = {
      send: function (message) {
        return sock.send(JSON.stringify(message));
      }
    };

    var sock = new SockJS('http://' + window.location.host + '/socket/' + resource);
    
    sock.onopen = function () {
      socket.onopen.call(this, arguments);
    };

    sock.onmessage = function (response) {
      console.log('socketService onmessage callback', response);
      var data = JSON.parse(response.data);      
      $rootScope.$apply(function () {
        socket.onmessage.call(this, data);  
      });
    };

    return socket;
  };
}]);