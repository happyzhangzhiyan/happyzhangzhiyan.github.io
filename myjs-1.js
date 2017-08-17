// JavaScript Document

$(function(){
	;(function(){
		var timer=null;
		var num=0;
		$('.banplay li').each(function(index, element) {
			$(element).css('background','url(images/banner'+(index+1)+'.jpg) no-repeat center top')
        });
		function gogo(){
			num++
			if(num>2){num=0}
			$('.banplay').animate({left:num*-100+'%'},1000)	
			$('.box4 li').eq(num).addClass('current').siblings().removeClass('current')
		}
		function play(){
			clearInterval(timer)
			timer=setInterval(function(){
				gogo()
			},2000)
		}
		play();
		$('#banner').hover(function(e) {
            clearInterval(timer)
        },function(){
			play();	
		});
		$('.box4 li').click(function(e) {
			var user=$(this).index();
            $(this).addClass('current').siblings().removeClass('current')
			$('.banplay').stop().animate({left:user*-100+'%'},1000);
			num=user
        });
		
	})();















	
})

























































