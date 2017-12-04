angular.module('app')
	.controller('loginController',['$scope','$state',function($scope,$state){
		$scope.goStateName = function(stateName){
			$state.go(stateName);
		};
		$scope.nameVer = function(){
			var val = $('#name').val();
			var nameReg = /^[\w\u4E00-\u9FA5\uF900-\uFA2D]*$/g;
			if(val.length<4 || val.length>10){
				$('#name').css('color','blue');
				$('#namedenger').text('用户名长度在4至10位');
				$('#namedenger').css('color','blue');
			}else{
				if(!nameReg.test(val)){
					$('#name').css('color','red');
					$('#namedenger').text('用户名只能是汉字数字和字母');
					$('#namedenger').css('color','red');
				}else{
					$('#name').css('color','#000');
					$('#namedenger').text('');
				}
				
			}
		};
		$scope.psdVer = function(){
			var val = $('#psd').val();
			var psdReg = /^[A-Za-z0-9]+$/g;
			if(val.length<6 || val.length>16){
				$('#psddenger').text('密码长度为6~16位');
				$('#psddenger').css('color','blue');
			}else{
				if(psdReg.test(val)){
					$('#psddenger').text('');
				}else{
					$('#psddenger').text('密码只能为数字和字母');
					$('#psddenger').css('color','red');
				}
			}
		}
	}])