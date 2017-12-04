angular.module('app')
	.controller('searchfoodsController', ['$scope','$state',function($scope,$state) {

		$scope.goStateName = function(stateName){
			$state.go(stateName);
		}
	}])
