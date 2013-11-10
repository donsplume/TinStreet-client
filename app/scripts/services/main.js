'use strict';

angular.module('tinStreetApp')
  .factory('instrumentService', function ($q) {
    return {
      getDepth: function (instrument) {

        var defer = $q.defer();

        defer.resolve({
          'offers': [{
            'direction': 'O',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '24',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'O',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '13',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'O',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '12',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'O',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '14',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'O',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '13',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'O',
            'enteredTimestamp': '2013-11-01 10:49:36.557593+00:00',
            'orderType': 'LIM',
            'price': '10',
            'volume': '1',
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': 'f86ee479-716b-4c4d-98f0-e68a2781e22e'
          }],
          'bids': [{
            'direction': 'B',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '10',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'B',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '9',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'B',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '9',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }, {
            'direction': 'B',
            'enteredTimestamp': '2013-10-31 20:27:38.591156+00:00',
            'orderType': null,
            'price': '6',
            'volume': null,
            'instrument': {
              'printing': {
                'EID': 'b2442ad3-7ee2-4d06-9bf6-f977ffb043fc',
                'printingNum': '3',
                'expansion': {
                  'mciExpId': 'gp',
                  'expName': 'Guildpact',
                  'EID': 'de74a3a3-851b-4e6d-9a07-7fbe7f26657a'
                },
                'card': 'c9442ad3-7ff2-4d06-9bf6-f977ffb043fc',
                'rarity': 'Common'
              },
              'foil': 'Y',
              'code': 'BOM_AV_F.GP',
              'EID': 'c71371a9-9a20-4686-ab28-6c3054f3aab5',
              'condition': 'AV'
            },
            'user': {
              'username': 'phil',
              'password': 'e7b6c53fc5fafc937ce9131c3824f3409a32e60b801e1a65398c26470127a245',
              'email': 'p.d.richman@gmail.com',
              'EID': 'bfc9b29a-f0a6-420f-a7a4-7f5f815389af'
            },
            'EID': '4effad66-05cf-4f7c-8a42-32a7853a160b'
          }]
        });

        return defer.promise;
      }
    };
  });
