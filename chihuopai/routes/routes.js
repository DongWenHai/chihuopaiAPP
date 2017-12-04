angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		//首页
			.state('index', {
				url: '/',
				templateUrl: './views/index/index.html',
				controller: 'indexController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('index')
					}]
				}
			})
			.state('login', {
				url: '/',
				templateUrl: './views/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login')
					}]
				}
			})
			.state('register', {
				url: '/',
				templateUrl: './views/register/register.html',
				controller: 'registerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register')
					}]
				}
			})
			.state('city', {
				url: '/',
				templateUrl: './views/city/city.html',
				controller: 'cityController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('city')
					}]
				}
			})
			.state('searchfoods', {
				url: '/',
				templateUrl: './views/searchfoods/searchfoods.html',
				controller: 'searchfoodsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('searchfoods')
					}]
				}
			})
			.state('cookdetail', {
				url: '/',
				templateUrl: './views/cookdetail/cookdetail.html',
				controller: 'cookdetailController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('cookdetail')
					}]
				}
			})
			.state('cookbook', {
				url: '/',
				templateUrl: './views/cookbook/cookbook.html',
				controller: 'cookbookController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('cookbook')
					}]
				}
			})
		//吃货圈
			.state('cookcircle', {
				url: '/',
				templateUrl: './views/cookcircle/cookcircle.html',
				controller: 'cookcircleController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('cookcircle')
					}]
				}
			})
			.state('searchcircle', {
				url: '/',
				templateUrl: './views/searchcircle/searchcircle.html',
				controller: 'searchcircleController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('searchcircle')
					}]
				}
			})
			.state('creatpost', {
				url: '/',
				templateUrl: './views/creatpost/creatpost.html',
				controller: 'creatpostController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('creatpost')
					}]
				}
			})
		//趣视频
			.state('interestvideo', {
				url: '/',
				templateUrl: './views/interestvideo/interestvideo.html',
				controller: 'interestvideoController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('interestvideo')
					}]
				}
			})
		//个人中心
			.state('user', {
				url: '/',
				templateUrl: './views/user/user.html',
				controller: 'userController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('user')
					}]
				}
			})
			.state('userinfor', {
				url: '/',
				templateUrl: './views/userinfor/userinfor.html',
				controller: 'userinforController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('userinfor')
					}]
				}
			})
			.state('cookmune', {
				url: '/',
				templateUrl: './views/cookmune/cookmune.html',
				controller: 'cookmuneController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('cookmune')
					}]
				}
			})
			.state('creatcircle', {
				url: '/',
				templateUrl: './views/creatcircle/creatcircle.html',
				controller: 'creatcircleController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('creatcircle')
					}]
				}
			})
			.state('lovefoods', {
				url: '/',
				templateUrl: './views/lovefoods/lovefoods.html',
				controller: 'lovefoodsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('lovefoods')
					}]
				}
			})

	}])