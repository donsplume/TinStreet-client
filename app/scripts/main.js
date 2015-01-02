'use strict';

angular.module('tinstreet', ['ngResource','autocomplete'])

.factory('tsFinder', function () {
    return {
        getCards: function (query) {

        }
    }
})

.factory('tsCollection', function ($resource) {
    return $resource('api/user/:username/collection/:code', {username:'@_username'}, {
        'create': {method:'POST'},
        'read':   {method:'GET',isArray:true},
        'update': {method:'PUT'}
    });
})

.controller('CollectionController', ['$http', '$scope', 'tsCollection', function ($http,$scope,tsCollection) {
    $scope.cards = ['deathrite shaman']

    var collection = this;

    collection.items = tsCollection.read({username:'phil'})

    $scope.getCards = function (text) {
        $http({'url':'api/card','method':'GET','params':{'name':text}}).success(function(data){
            $scope.cards=data;
        });
    };

    $scope.add = function ( printing ) {
        printing._username = 'phil';
        tsCollection.create(printing, function(data) {
            console.log(data);
            collection.items.push(data);
        });
    };
}]);
