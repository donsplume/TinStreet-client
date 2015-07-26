angular.module('tinstreet').controller('CollectionCtrl', function($scope, $stateParams, $resource, $http, $q, AuthService, appconfig) {

	$scope.collectionUser = $stateParams.user;

	var Collection = $resource(appconfig.basePath + '/user/' + $stateParams.user + '/collection/:itemid', {}, {
		get: {
			isArray: true
		},
		post: {
			method: "POST",
			isArray: false
		},
		delete: {
			method: "DELETE",
			isArray: false
		}
	});

	$scope.getCollection = function() {
		Collection.get({}, function(res) {
			console.log('collect', res);
			$scope.collection = res;
		});
	};

	$scope.deleteItem = function(itemid) {
		Collection.delete({
			itemid: itemid
		}, {}, function(res) {
			$scope.getCollection();
		});
	};

	$scope.getCollection();


	$scope.searchAPI = function(userInputString, timeoutPromise) {
		var deferred = $q.defer();
		$http.get(appconfig.basePath + '/instrument?name=' + userInputString, {
			timeout: timeoutPromise
		}).success(function(data, status, headers, config) {
			var cards = {};
			for (var idx in data) {
				var instrument = data[idx];
				if (!cards[instrument.cardCode]) {
					cards[instrument.cardCode] = {};
					cards[instrument.cardCode].instruments = [instrument];
					cards[instrument.cardCode].name = instrument.name;
				} else {
					cards[instrument.cardCode].instruments.push(instrument);
				}
			}
			var retObj = [];
			for (var card in cards) {
				retObj.push(cards[card]);
			}
			console.log("retobj:", retObj);
			deferred.resolve({
				data: {
					results: retObj
				}
			});
		}).
		error(function(data, status, headers, config) {
			console.log(data);
			deferred.reject(data);
		});

		return deferred.promise;
	};

	$scope.addToCollection = function(cardName, expCode, condition, foil, private, public) {
		//Okay, let's see if there's a single printing that meets all these conditions
		if (foil) {
			foil = 1;
		} else {
			foil = 0;
		}
		var filtered = $scope.searchInstrument.originalObject.instruments.filter(function(el) {
			return el.name === cardName &&
				el.expCode === expCode &&
				el.condition === condition &&
				el.foil === foil;
		});
		if (filtered.length === 0) {
			//No legitimate cards have all these properties, so do nothing
		} else if (filtered.length === 1) {
			//We have a single instrument!
			Collection.post({}, {
				card: filtered[0].cardCode,
				instrument: filtered[0].instrumentCode,
				privatePosition: private,
				hostedPosition: public
			}, function(data) {
				$scope.getCollection();
			});
		} else {
			//More than one instrument matches our filters. So let's post something generic.
			//Have we at least narrowed it down to a single printing?
			var printingCode = filtered[0].printingCode;
			var pcfiltered = filtered.filtered(function(el) {
				return el.printingCode = printingCode;
			});
			if (pcfiltered.length !== filtered.length) {
				printingCode = null;
			}
			Collection.post({}, {
				card: filtered[0].cardCode,
				printing: printingCode,
				expCode: expCode,
				foil: foil,
				condition: condition,
				privatePosition: private,
				hostedPosition: public
			});
		}
	};



});