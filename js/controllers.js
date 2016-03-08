var controllerModule = angular.module('controllerModule', ['serviceModule']);

controllerModule.controller('bookController', ['$scope', 'ITEbookService', function($scope, ITEbookService){
	$scope.searchResult = {};
	$scope.selectedBook = {};

	$scope.search = function() {
		if($scope.searchQuery){
			$scope.searchResult = ITEbookService.Search().get({query: $scope.searchQuery});
		}
	}

	$scope.showDetails = function(id) {
		$scope.selectedBook = ITEbookService.Details().get({id: id});
	}
}]);