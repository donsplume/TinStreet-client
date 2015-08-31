angular.module('tinstreet').controller('CollectionCtrl', function($scope, $stateParams, $resource, $http, $q, AuthService, CacheFactory, appconfig) {

	$scope.collectionUser = $stateParams.user;

	//We want to send 0/1 for foil status, but show the user foil/nonfoil
	$scope.foilArray = [{
		value: 0,
		text: 'Non-foil'
	}, {
		value: 1,
		text: 'Foil'
	}];

	$scope.translateFoilStatus = function(foil) {
		if (foil === 0) {
			return 'Non-foil';
		} else if (foil === 1) {
			return 'Foil';
		} else {
			return;
		}
	};

	//Cache to store API responses.
	var cardCache = new CacheFactory('cardCache');


	//A service to interact with a collection endpoint.
	var Collection = $resource(appconfig.basePath + '/user/' + $stateParams.user + '/collection/:itemID', {
		itemID: '@itemID' //user the itemID attribute on the passed object to populate :itemID in the url.
	}, {
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
		},
		put: {
			method: "PUT",
			isArray: false
		}
	});

	$scope.getCollection = function() {
		Collection.get({}, function(res) {
			$scope.collection = res;
		});
	};

	$scope.deleteItem = function(itemID) {
		Collection.delete({
			itemID: itemID
		}, {}, function(res) {
			$scope.getCollection();
		});
	};

	$scope.getCollection(); //Populate the collection on controller load.

	//Search the remote API for cards matching the user's input.
	//Returns an array of all matching instruments, and will cache results.
	$scope.searchAPI = function(userInputString) {
		var deferred = $q.defer();

		if (cardCache.get(userInputString)) {
			deferred.resolve(cardCache.get(userInputString));
		} else {
			$http.get(appconfig.basePath + '/instrument?name=' + userInputString, {
				cache: true
			}).success(function(data, status, headers, config) {
				cardCache.put(userInputString, data);
				deferred.resolve(data);
			}).
			error(function(data, status, headers, config) {
				deferred.reject(data);
			});
		}
		return deferred.promise;
	};

	//Group API results based on individual cards. Used for adding new items to a collection,
	//where we care about cards in the first instance, rather than instruments.
	$scope.groupSearchByCard = function(userInputString) {
		var deferred = $q.defer();
		$scope.searchAPI(userInputString).then(function(data) {
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
			deferred.resolve(retObj);
		});
		return deferred.promise;
	};

	$scope.editingCard = []; //A scoped variable because we can't bind promised directly to
	//ng-options without causing digest errors.

	//When editing an entry in the collection, use this to work out what options we're allowed.
	$scope.searchCard = function(search) {
		$scope.searchAPI(search).then(function(data) {
			$scope.editingCard = data;
		});
	};

	$scope.saveModifiedCard = function(card) {
		//First, set the set name to the right one (we've maybe only changed the setCode)
		//Let's assume editingCard is useful (it should be...)
		for (var idx in $scope.editingCard) {
			if ($scope.editingCard[idx].expCode === card.expCode) {
				card.expName = $scope.editingCard[idx].expName;
				break;
			}
		}
		//Make the request
		Collection.put({}, {
			itemID: card.itemID,
			card: card.card,
			printing: card.printingCode,
			expCode: card.expCode,
			foil: card.foil,
			condition: card.condition,
			privatePosition: card.privatePosition,
			hostedPosition: card.hostedPosition
		});

	};

	$scope.onSelect = function(selectedObject) {
		$scope.selectedObject = selectedObject;
	};

	$scope.addToCollection = function(cardName, expCode, condition, foil, private, public) {
		//Okay, let's see if there's a single printing that meets all these conditions
		if (foil) {
			foil = 1;
		} else {
			foil = 0;
		}
		var filtered = $scope.selectedObject.instruments.filter(function(el) {
			return el.name === cardName &&
				(el.expCode === expCode || typeof expCode === 'undefined') &&
				(el.condition === condition || typeof condition === 'undefined') &&
				(el.foil === foil || typeof foil === 'undefined');
		});
		if (filtered.length === 0) {
			//No legitimate instruments have all these properties, so do nothing
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
			var pcfiltered = filtered.filter(function(el) {
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
			}, function(data) {
				$scope.getCollection();
			});
		}
	};
})

.filter('int_to_yn', function() {
	return function(integer) {
		return integer ? 'Y' : 'N';
	};
});