angular.module('app')
	.controller('cookdetailController', ['$scope','$state',function($scope,$state) {

		$scope.goStateName = function(stateName){
			$state.go(stateName);
		}
	}])
