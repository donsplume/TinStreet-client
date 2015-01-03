'use strict';

angular.module('tinstreet', ['ngResource','autocomplete'])

.factory('tsFinder', function () {
    return {
        getCards: function (query) {

        }
    }
})

.factory('tsCollection', function ($resource) {
    return $resource('api/user/:username/collection/:code', {username:'@_username',code:'@_code'}, {
        'create': {method:'POST'},
        'read':   {method:'GET',isArray:true},
        'update': {method:'PUT'}
    });
})

.controller('CollectionController', ['$http', '$scope', 'tsCollection', function ($http,$scope,tsCollection) {
    $scope.cards = ['deathrite shaman'];

    $scope.items = tsCollection.read({username:'phil'});

    $scope.getCards = function (text) {
        $http({'url':'api/card','method':'GET','params':{'name':text}}).success(function(data){
            $scope.cards=data;
        });
    };

    $scope.add = function () {
        $scope.printing._username = 'phil';
        var newItem = angular.copy($scope.printing);
        newItem.printing = $scope.printing.code;
        newItem.privatePosition = $scope.printing.quantity;
        newItem.pending = true;
        $scope.items.push(newItem);
        tsCollection.create($scope.printing, function(data) {
            $scope.items.forEach(function(item,idx){
                if (item.printing == data.printing) {
                    $scope.items[idx] = data; 
                }
            });
        });
        $scope.printing = {};
    };
}])

.controller('CollectionItemController', ['$scope', 'tsCollection', function($scope,tsCollection) {

    if ( typeof $scope.item.pending == 'undefined' ) {
        $scope.item.pending = false;
    }

    $scope.updateItem = function() {
        if ($scope.collectionForm.$dirty) {
            var update = {}
            angular.forEach($scope.collectionForm,function(value,key) {
                if (value&&value.$dirty) {
                    update[key] = $scope.item[key];
                }
            });
            $scope.collectionForm.$setPristine();
            if ( Object.keys(update).length && !$scope.item.pending ) {
                update._username = 'phil';
                update._code = $scope.item.printing;
                tsCollection.update(update, function(data) {
                });
            }
        };
    };

    $scope.deleteItem = function(idx) {
        $scope.items.splice(idx,1);
        tsCollection.delete({username:'phil','code':$scope.item.printing},function(data) {
        });
    };
}]);
