'use strict';

angular.module('subscriptionsApp')
  .controller('MainCtrl', function ($scope, $http) {
     
    var testUrl = "http://private-anon-23e19a2f7-cratejoydev.apiary-mock.com/v1/subscriptions"
	var url = "http://api.cratejoy.com/v1/subscriptions"
	var id = "apitest"
	var secret = "apitest"
	var active = "ACTIVE"

    $http({
    	method: "GET",
    	url: testUrl,
    	params: {
    		status: active
    	}
    	
    }).success(function (response) {
    	$scope.results = response.results
    });

  });
