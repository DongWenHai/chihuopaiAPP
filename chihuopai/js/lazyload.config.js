(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
	 		//首页
		 		{
			 		name: 'index',
			 		files: [
			 			'./views/index/indexController.js',
			 			'./views/index/index.css'
			 		]
			 	},
				 	{
				 		name: 'login',
				 		files: [
				 			'./views/login/loginController.js',
				 			'./views/login/login.css'
				 		]
				 	},
				 	{
				 		name: 'register',
				 		files: [
				 			'./views/register/registerController.js',
				 			'./views/register/register.css'
				 		]
				 	},
				 	{
				 		name: 'city',
				 		files: [
				 			'./views/city/cityController.js',
				 			'./views/city/city.css'
				 		]
				 	},
				 	{
				 		name: 'searchfoods',
				 		files: [
				 			'./views/searchfoods/searchfoodsController.js',
				 			'./views/searchfoods/searchfoods.css'
				 		]
				 	},
				 	{
				 		name: 'cookdetail',
				 		files: [
				 			'./views/cookdetail/cookdetailController.js',
				 			'./views/cookdetail/cookdetail.css'
				 		]
				 	},
				 	{
				 		name: 'cookbook',
				 		files: [
				 			'./views/cookbook/cookbookController.js',
				 			'./views/cookbook/cookbook.css'
				 		]
				 	},
			//吃货圈				 	
				{
			 		name: 'cookcircle',
			 		files: [
			 			'./views/cookcircle/cookcircleController.js',
			 			'./views/cookcircle/cookcircle.css'
			 		]
				},
					{
				 		name: 'searchcircle',
				 		files: [
				 			'./views/searchcircle/searchcircleController.js',
				 			'./views/searchcircle/searchcircle.css'
				 		]
					},
					{
				 		name: 'creatpost',
				 		files: [
				 			'./views/creatpost/creatpostController.js',
				 			'./views/creatpost/creatpost.css'
				 		]
					},
			//趣视频
				{
			 		name: 'interestvideo',
			 		files: [
			 			'./views/interestvideo/interestvideoController.js',
			 			'./views/interestvideo/interestvideo.css'
			 		]
				},
			//个人中心
				{
			 		name: 'user',
			 		files: [
			 			'./views/user/userController.js',
			 			'./views/user/user.css'
			 		]
				},
				{
			 		name: 'userinfor',
			 		files: [
			 			'./views/userinfor/userinforController.js',
			 			'./views/userinfor/userinfor.css'
			 		]
				},
				{
			 		name: 'cookmune',
			 		files: [
			 			'./views/cookmune/cookmuneController.js',
			 			'./views/cookmune/cookmune.css'
			 		]
				},
			 	{
			 		name: 'creatcircle',
			 		files: [
			 			'./views/creatcircle/creatcircleController.js',
			 			'./views/creatcircle/creatcircle.css'
			 		]
			 	},
			 	{
			 		name: 'lovefoods',
			 		files: [
			 			'./views/lovefoods/lovefoodsController.js',
			 			'./views/lovefoods/lovefoods.css'
			 		]
				},
	 		]
 		});
	}]);
	
})();