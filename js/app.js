var app = angular.module('ebookDownloader', []);

app.controller('appController', ['$scope', function($scope){
	$scope.search = function() {
		console.log('searching...');
	}
}]);