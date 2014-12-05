'use strict';

angular.module('tinstreet', [])

.controller('albumController', ['$http', function ($http) {
    var album = this;
    album.rows = [];
    $http.get('api/album/all_the_lands').success(function(data){
        album.rows = data;
    });
}]);
