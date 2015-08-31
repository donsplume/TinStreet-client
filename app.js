angular.module('tinstreet', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngResource', 'ngAnimate', 'appconfig', 'xeditable', 'ui.bootstrap', 'angular-cache']);


angular.module('tinstreet').config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true; //To allow us to use CORS

    $stateProvider.state('index', {
        url: "/",
        views: {
            "login": {
                templateUrl: "partial/login/login.html"
            },
            "main":{
                templateUrl: "partial/landing/landing.html"
            }
        }
    });
    $stateProvider.state('collection', {
        url: '/user/:user/collection',
        views: {
            "login": {
                templateUrl: "partial/login/login.html"
            },
            "main":{
                templateUrl: "partial/collection/collection.html"
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('tinstreet').run(function($rootScope, AuthService) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    AuthService.identity(true);

});

angular.module('tinstreet').run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
