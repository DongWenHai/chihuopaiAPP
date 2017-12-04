angular.module('app')
	.controller('searchcircleController', ['$scope','$state',function($scope,$state) {

		$scope.goStateName = function(stateName){
			$state.go(stateName);
		}
	}])
