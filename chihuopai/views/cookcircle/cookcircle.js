$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: false, 
	    onTransitionEnd: function(){
	    	$($('.nav>ul>li')[mySwiper.realIndex]).addClass('active').siblings().removeClass();
	    	mySwiper.slideTo(mySwiper.realIndex, 500, false);
	    },

  	}) ;
  	
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};
	clickEventHref('#home','../index/index.html');
	clickEventHref('#user','../user/user.html');
	clickEventHref('#insvideo','../interestvideo/interestvideo.html');
	clickEventHref('#gosearchcircle','../searchcircle/searchcircle.html');
	$('.nav>ul>li').click(function(){
		$(this).addClass('active').siblings().removeClass();
		for(var i=0;i<$('.nav>ul>li').length;i++){
			if(this === $('.nav>ul>li')[i]){
				mySwiper.slideTo(i, 500, false);
			}
		}
	});
});