// JavaScript Document



$(function(){	

	//$('.doc').css('top',-200+'%');          //页面刷新，直接呈现第3屏
	$('.screen01').removeClass('start');   //页面刷新，让首屏去掉start

	var num = 0;
	var timer = null;

	/*鼠标单击事件----导航*/

	$('.gps li').click(function(){	
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.doc').stop().animate({top:-index*100+'%'},300);
		$('.doc>div').eq(index).removeClass('start').siblings().addClass('start');
		num=index
	})

	/*鼠标滚轮事件----页面*/

	$(window).mousewheel(function(e,d){	
		/*当鼠标往下滚动一次的时候，d=-1*/
		
		
		/*函数截流*/
		
		clearTimeout(timer);
		timer = setTimeout(function(){	
			num=num-d;
			if(num>3){num=3}
			if(num<0){num=0}
			$('.gps li').eq(num).addClass('current').siblings().removeClass('current');
			$('.doc').stop().animate({top:-num*100+'%'},300);
			$('.doc>div').eq(num).removeClass('start').siblings().addClass('start');
			$('.look li').eq(0).addClass('current').siblings().removeClass('current')
            $('.screen03 .app').css('display','block')
			$('.screen03 .icon .wrapper').css({'top':'-500px',opacity:0})
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
		},300)
	})
	
	/*web三维旋转*/
;(function(){
	
	var count=5;
	var w=$(".screen03 .app .slide").width()/count
	$(".screen03 .app .item").each(function(index){
		var deg=index*90;
		for(var i=0; i<count; i++){
			var x=i*w;
			$("<div class='pic'></div>").width(w)
			.css({
				"left":x+"px",
				"background-image":"url(img/"+index+".jpg)",
				"background-position":-x+"px 0px",
				"background-size":"900px 500px",
				"transform":"rotateX("+deg+"deg) translateZ(250px)"
			}).appendTo(this)
		}
	});
	var num=0;
	$(".screen03").click(function(){
		
		num++;
		
		$(".screen03 .app .item").each(function(index){
			
			var deg=index*90-num*90;
			
			$(this).find(".pic").each(function(i){
				
				var delay=i*0.2;
				
				$(this).css({
					"transition":"transform .5s "+delay+"s",
					"transform":"rotateX("+deg+"deg) translateZ(250px)"
				})
			})
		})
	})
})();

	/*点击切换显示*/
	;(function(){
		$('.look li').eq(0).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .app').css('display','block')
			$('.screen03 .icon .wrapper').css({'top':'-500px',opacity:0})
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
        });
		$('.look li').eq(1).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .icon .wrapper').css('opacity','1').animate({top:0},500)
			$('.screen03 .app').css('display','none')
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
        });
		$('.look li').eq(2).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .banner').css({'transition':'all 2s',opacity:1,'transform':'scale(1)'})
			$('.screen03 .icon .wrapper').css({'top':'-500px',opacity:0})
			$('.screen03 .app').css('display','none')
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
			
		$('.screen03 .banner li').hover(function(){
			$(this).parent().css('animation-play-state','paused')
			$(this).siblings().css('opacity','0.1')
		},function(){
			$(this).parent().css('animation-play-state','running')
			$(this).siblings().css('opacity','1')
		})
        });
		$('.look li').eq(3).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .web').css({'opacity':1,'transition':'http://948it.com/js/all 0.5s'})
			$('.screen03 .icon .wrapper').css({'top':'-500px',opacity:0})
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .app').css('display','none')
        });
	})();
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

})























