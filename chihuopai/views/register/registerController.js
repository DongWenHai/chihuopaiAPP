angular.module('app')
	.controller('registerController',['$scope','$state',function($scope,$state){
		$scope.goStateName = function(stateName){
			$state.go(stateName);
		};
		$scope.selectman = function(){
			if($('.sex')[0].checked){
				$('#selectman').css('background','url(./images/icons/select.png) no-repeat 0 0');
				$('.sex')[1].checked = false;
				$('#selectwomen').css('background','#fff');
			}else{
				console.log('false');
				$('#selectman').css('background','#fff');
				$('.sex')[1].checked = true;
				$('.sex')[0].checked = false;
				$('#selectwomen').css('background','url(./images/icons/select.png) no-repeat 0 0');
			}
		};
		$scope.selectwomen = function(){
			if($('.sex')[1].checked){
				$('#selectwomen').css('background','url(./images/icons/select.png) no-repeat 0 0');
				$('.sex')[0].checked = false;
				$('#selectman').css('background','#fff');
			}else{
				$('#selectwomen').css('background','#fff');
				$('.sex')[0].checked = true;
				$('.sex')[1].checked = false;
				$('#selectman').css('background','url(./images/icons/select.png) no-repeat 0 0');
			}
		};
		$scope.phone =function(){
			var phongReg = /^(\+86)?1[3578]\d{9}$/g;
			var val = $('#phone').val();
			if(!phongReg.test(val)){
				$('#phone').css('color','red');
			}else{
				$('#phone').css('color','#000');
			}
		}
	}])