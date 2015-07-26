/*jslint node: true */
'use strict';

/**
 * @ngdoc service
 * @name tinstreet.AuthService
 * @description
 * # AuthService
 * Factory in the tinstreet.
 */

angular.module('tinstreet')
  .factory('AuthService', ['$q', '$http', '$timeout', '$state', 'appconfig',
    function($q, $http, $timeout, $state, config) {
      var _identity,
        _authenticated = false;

      return {
        getUser: function() {
          if (_identity) {
            return _identity.user;
          } else {
            return null;
          }
        },
        getIdentity: function() {
          return _identity;
        },
        isIdentityResolved: function() {
          return angular.isDefined(_identity);
        },
        isAuthenticated: function() {
          return _authenticated;
        },
        isInRole: function(role) {
          if (!_authenticated || !_identity.roles) {
            return false;
          }

          return _identity.roles.indexOf(role) !== -1;
        },
        isInAnyRole: function(roles) {
          if (!_authenticated || !_identity.roles) {
            return false;
          }

          for (var i = 0; i < roles.length; i++) {
            if (this.isInRole(roles[i])) {
              return true;
            }
          }

          return false;
        },
        authenticate: function(identity) {
          _identity = identity;
          _authenticated = identity !== null;
        },

        login: function(credentials) {
          return $http.post(config.basePath + '/login', credentials);
        },

        logout: function(callback) {
          $http.get(config.basePath + '/logout').then(function(res) {
            _identity = null;
            _authenticated = false;
            $state.go('landing');
            callback();
          });

        },

        identity: function(force) {
          var deferred = $q.defer();
          console.log('blah');
          if (force === true) {
            _identity = undefined;
          }

          // check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately resolving
          if (angular.isDefined(_identity)) {
            deferred.resolve(_identity);

            return deferred.promise;
          }

          // otherwise, retrieve the identity data from the server, update the identity object, and then resolve.
          $http.get(config.basePath + '/login', {
              ignoreErrors: true
            })
            .success(function(data) {
              _identity = data;
              _authenticated = true;
              deferred.resolve(_identity);
            })
            .error(function(err) {
              console.log(err);
              _identity = null;
              _authenticated = false;
              deferred.resolve(_identity);
            });

          return deferred.promise;
        }
      };
    }
  ])
  .factory('authorization', ['$rootScope', '$state', 'AuthService', '$q',
    function($rootScope, $state, AuthService) {
      return {
        authorize: function() {
          return AuthService.identity()
            .then(function() {
              if ($rootScope.toState.name !== 'landing') {
                var isAuthenticated = AuthService.isAuthenticated();
                // if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !AuthService.isInAnyRole($rootScope.toState.data.roles)) {
                  if (isAuthenticated) {
                    // $state.go('accessdenied'); // user is signed in but not authorized for desired state
                  } else {
                    // user is not authenticated. stow the state they wanted before you
                    // send them to the signin state, so you can return them when you're done
                    $rootScope.returnToState = $rootScope.toState;
                    $rootScope.returnTostateParams = $rootScope.tostateParams;

                    // now, send them to the landing page
                    $state.go('index');
                  }
                // }
              }
            });
        }
      };
    }
  ])
  .run(['$rootScope', '$state', '$stateParams', 'authorization', 'AuthService',
    function($rootScope, $state, $stateParams, authorization, AuthService) {
      $rootScope.$on('$stateChangeStart', function(event, toState, tostateParams) {
        // track the state the user wants to go to; authorization service needs this
        $rootScope.toState = toState;
        $rootScope.tostateParams = tostateParams;
        // if the AuthService is resolved, do an authorization check immediately. otherwise,
        // it'll be done when the state it resolved.
        if (AuthService.isIdentityResolved()) {
          authorization.authorize();
        }
      });
      $rootScope.$on('$stateChangeError', console.log.bind(console));

    }
  ]);