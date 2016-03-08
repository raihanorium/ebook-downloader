var serviceModule = angular.module('serviceModule', ['ngResource']);

serviceModule.factory('ITEbookService', ['$resource', function ($resource) {
	var baseUrl = 'http://it-ebooks-api.info/v1';

	return {
		Search: function() {
			return $resource(baseUrl + '/search/:query', {query: '@query'});
		},

		Details: function() {
			return $resource(baseUrl + '/book/:id', {id: '@id'});
		}
	};
}])