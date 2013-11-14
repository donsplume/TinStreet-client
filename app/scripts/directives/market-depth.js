'use strict';

angular.module('tinStreetApp')
  .directive('marketDepth', function () {
    return {
      templateUrl: 'views/components/market-depth.html',
      restrict: 'E',
      scope: {
        instrument: '=',
        loading: '='
      },
      controller: function ($scope, instrumentService) {

        instrumentService.getInstruments().then(function (instruments) {
          $scope.instruments = instruments;
        });

        $scope.search = function () {
          $scope.loading = true;
          instrumentService.getDepth($scope.instrument).then(function (data) {
            $scope.loading = false;
            $scope.depth = data;
          }, function () {
            $scope.loading = false;
            // error callback
            $scope.depth = {
              'bids': [{
                'direction': 'B',
                'enteredTimestamp': '2013-11-14 17:39:45.170555+00:00',
                'orderType': 'LIM',
                'price': '5',
                'volume': '4',
                'instrument': {
                  'printing': {
                    'EID': 'f0e75de2-f751-45c3-8b60-197cc0608674',
                    'printingNum': '142',
                    'expansion': {
                      'mciExpId': '5e',
                      'expName': 'Fifth Edition',
                      'EID': '783fad29-f79d-48b0-aad7-d85836bfca30'
                    },
                    'card': {
                      'code': 'BOP',
                      'name': 'Birds of Paradise',
                      'EID': '3e2f02cf-0130-48f9-89ca-a3092a70efa2'
                    },
                    'rarity': 'Rare'
                  },
                  'foil': 'N',
                  'code': 'BOP_MO.5E',
                  'EID': 'bd1b7e39-2fe5-4526-8bd0-4810cf819090',
                  'condition': 'MO'
                },
                'user': {
                  'username': 'phil',
                  'password': 'f2e12c6e326e01ae73177de6de0dd72a67f434d136457c1c21e71fb7b5d57f57',
                  'email': null,
                  'EID': '3a87d587-42bc-4e3a-9488-eb163f9c247b'
                },
                'EID': '606200ef-a401-40ff-ab7e-6f28a795f782'
              }],
              'asks': []
            };
          });
        };
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
