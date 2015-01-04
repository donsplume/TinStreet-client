'use strict';

angular.module('tinstreet', ['ngResource','ngCookies','autocomplete'])

.factory('tsFinder', function () {
    return {
        getCards: function (query) {

        }
    }
})

.factory('tsLogin', function ($resource) {
    return $resource('api/user/:username/login', {username:'@_username'}, {
        'create': {method:'POST'}
    });
})

.factory('tsCollection', function ($resource) {
    return $resource('api/user/:username/collection/:code', {username:'@_username',code:'@_code'}, {
        'create': {method:'POST'},
        'read':   {method:'GET',isArray:true},
        'update': {method:'PUT'}
    });
})

.controller('LoginController', ['$scope', 'tsLogin', function ($scope,tsLogin) {
    $scope.login = function () {
        tsLogin.create($scope.user,function(data){
            console.log(data);
        });
        $scope.user = {};
    };
}])

.controller('CollectionController', ['$scope', '$cookies', 'tsCollection', function ($scope,$cookies,tsCollection) {

    $scope.items = tsCollection.read({username:$cookies.user});

    $scope.add = function () {
        $scope.printing._username = $cookies.user;
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

.controller('CollectionItemController', ['$scope', '$cookies', 'tsCollection', function($scope,$cookies,tsCollection) {

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
                update._username = $cookies.user;
                update._code = $scope.item.printing;
                tsCollection.update(update, function(data) {
                });
            }
        };
    };

    $scope.deleteItem = function(idx) {
        $scope.items.splice(idx,1);
        tsCollection.delete({username:$cookies.user,'code':$scope.item.printing},function(data) {
        });
    };
}]);
