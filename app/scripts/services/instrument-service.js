'use strict';

angular.module('tinStreetApp')
  .factory('instrumentService', function ($http, $q) {
    return {
      getDepth: function (instrument) {
        return $http.get('/tinstreet/api/depth/' + instrument).error(function (data, status, headers, config) {
          console.log(data);
        });
      },
      getInstruments: function () {
        var dfd = $q.defer();

        dfd.resolve([
          'BOP_MO.5E',
          'GHW_MO.TR',
          'KLG_MO.GTC'
        ]);

        return dfd.promise;
      }
    };
  });
