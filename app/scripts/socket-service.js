'use strict';

angular.module('tinStreet.utils', [])

.factory('socketService', function() {
  return function (resource) {    
    var socket = {
      send: function (message) {
        return sock.send(JSON.stringify(message));
      }
    };

    var sock = new SockJS('http://' + window.location.host + '/socket/' + resource);
    
    sock.onopen = function () {
      socket.onopen.call(this, arguments);
    }

    sock.onmessage = function () {
      socket.onmessage.call(this, arguments);
    }

    return socket;
  };
});