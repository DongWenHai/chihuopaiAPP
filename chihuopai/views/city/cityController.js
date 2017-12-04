angular.module('app')
	.controller('cityController', ['$scope','$state',function($scope,$state) {

		$scope.goStateName = function(stateName){
			$state.go(stateName);
		}
	}])

