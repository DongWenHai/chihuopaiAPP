$(function(){
	var start = {
		screenWidth:$('.start').width(),
		addImg: function(){
			$('#ban>li>img').width(this.screenWidth);
			$('#ban>li').width(this.screenWidth);
			$('#ban').width(this.screenWidth * 3);
		},

	};
	start.addImg();

	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: false, 
	    //分页器
	    pagination: '.swiper-pagination',
	    onTouchEnd: function(){
	    	console.log(mySwiper.touches.diff);
	    	if(mySwiper.activeIndex == 2 && mySwiper.touches.diff<-80){
	    		window.location.href = "../index/index.html";
	    	}
	    	
	    }
	});

});