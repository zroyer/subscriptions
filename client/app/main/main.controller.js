'use strict';

angular.module('subscriptionsApp')

  .controller('MainCtrl', function ($scope, $http) {
 	
 	$http.get('/api/things')
 		.success(function(data) {
 			console.log(data)
 			$scope.results = data.results;
 			console.log($scope.results)
 		})
 		.error(function(data) {
 			console.log('Error' + data);
 		});
  });
