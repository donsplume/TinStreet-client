'use strict';

angular.module('tinStreetApp')
  .factory('instrumentService', function ($http) {
    return {
      getDepth: function (instrument) {
        return $http.get('/tinstreet/api/depth/' + instrument).error(function (data) {
          console.log(data);
        });
      },
      getExpansions: function () {
        return $http.get('/tinstreet/api/expansion').error(function (data) {
          console.log(data);
        });
      },
      getInstruments: function (expansion) {
        return $http.get('/tinstreet/api/printing', {
          params: {
            exp: expansion
          }
        }).error(function (data) {
          console.log(data);
        });
      },
      postMarketOrder: function (order) {
        return $http.post('/tinstreet/api/mo', order).error(function (data) {
          console.log(data);
        });
      }
    };
  });
