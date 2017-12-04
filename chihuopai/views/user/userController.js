angular.module('app')
	.controller('userController', ['$scope','$state',function($scope,$state) {

		$scope.goStateName = function(stateName){
			$state.go(stateName);
		}
	}])
