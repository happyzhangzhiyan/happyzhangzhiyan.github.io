// JavaScript Document

$(function(){
	;(function(){
	var timer=null
	var num=0
	
	$('.banplay li').each(function(index, element) {
        $(element).css('background','url(images/banner'+(index+1)+'.jpg) no-repeat center top')
	});
	
	function turn(){
		num++
		if(num>4){num=0}
		$('.banplay').animate({left:num*-100+'%'},1000)	
		$('.box li').eq(num).addClass('current').siblings().removeClass()
	}
	
	function autoplay(){
		clearInterval(timer)
		timer=setInterval(function(){
			turn();
		},2000)
	}
	
	autoplay();
	
	$('.banplay').hover(function(e) {
        clearInterval(timer);
    },function(){
		autoplay();
	});
	
	$('.box li').click(function(e) {
        var user=$(this).index()
		$('.banplay').animate({left:user*-100+'%'})
		$(this).addClass('current').siblings().removeClass('current')
		num=user
    });
	
	})();
})









































