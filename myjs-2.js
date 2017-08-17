// JavaScript Document

$(function(){
	;(function(){
		var num=0
		var timer=null
		var shu=100;
		function gogo(){
				num++
				shu++
				if(num>5){num=0}
				$('.banplay li').eq(num).css('z-index',shu).hide().fadeIn()
		}
		
		function play(){
			clearInterval(timer)
			timer=setInterval(function(){
				gogo();
			},3000)
		}
		play();
		
		$('.banplay').hover(function(){
			clearInterval(timer)
		},function(){
			play();
		})
		
		$('.turn .v1').click(function(e) {
            gogo();
        });
		$('.turn .v2').click(function(e) {
				num--
				shu++
				if(num<0){num=5}
				$('.banplay li').eq(num).css('z-index',shu).hide().fadeIn()
        });
	})();

})






















