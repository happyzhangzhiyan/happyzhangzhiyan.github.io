
$(function(){
 	/*$.ajax({
		type:"get",
		url:"../html/temeplate/header.html",
		async:true,
		success:function(data){
			$("#wrap").html(data)
			$("#wrap .nav li").eq(0).addClass("active")
		}
	});*/
 	

 	
    var $win_h = $(window).height();
    var $win_w = $(window).width();
 
    $('.page').css({
        "height":$win_h, "width":"100%"
    });
    $('.page1_left,.page2_right,.page3_left,.page4_right').css("height",$win_h);
    $('.page1_right,.page2_left,.page3_right,.page4_left').css("height",$win_h);
    
    $(window).resize(function(){
        var $win_h = $(window).height();
        $('.page').css({
            "height":$win_h, "width":"100%"
        });
        $('.page1_left,.page2_right,.page3_left,.page4_right').css("height",$win_h);
        $('.page1_right,.page2_left,.page3_right,.page4_left_').css("height",$win_h);
    })
   
    var $indicators = $('.indicators li');
    var $nav = $('#wrap .navbar-nav li');
    var $box_indix = 0;
    var $body = $('html,body')  
   
    $indicators.bind('click',function(){
        $box_indix =  $(this).index();
        page_css($box_indix);
        var $box = $('.page').eq($box_indix);
        var $box_offset_top = $box.offset().top;
        $body.stop().animate({"scrollTop":$box_offset_top},600); 
       
        $(this).find('span').addClass('active').parent('li').siblings().find('span').removeClass('active');
       
      
    })
    
    page_css($box_indix);
 
    function move_mousewheel(event){
        var delta = "";
        var $offsetTop = $('.page').eq($box_indix).offset().top;
        if(event.wheelDelta){
            delta = event.wheelDelta;
        }else{
            delta = -event.detail;
        }

        if(delta>0){
            if(!($box_indix==0)){
                if(!$body.is(":animated")){
                    $body.animate({"scrollTop":$offsetTop-$win_h},600);
                    $box_indix--;
                    page_css($box_indix);
                }
            }
        }else{
            if(!($box_indix==3)){
                if(!$body.is(":animated")){
                    $body.animate({"scrollTop":$offsetTop+$win_h},600);
                    $box_indix++;
                    page_css($box_indix);
                }
            }
        }
        $indicators.eq($box_indix).find('span').addClass('active').parent('li').siblings().find('span').removeClass('active');
        
    }
    if(window.attachEvent){
        window.attachEvent('mousewheel',move_mousewheel); 
    }else{
        window.addEventListener('mousewheel',move_mousewheel,false); 
        window.addEventListener('DOMMouseScroll',move_mousewheel,false);
    }
    function page_css(index){

        var $page1_left = $('.page1_left img');
        var $page1_li1 = $('.page1_right p:nth-child(1)');
        var $page1_li2 = $('.page1_right p:nth-child(2)');
        var $page1_li3 = $('.page1_right p:nth-child(3)');
        var $page_right_icon = $('.page1_right ul li');
       
        var $page2_left_box1 = $('.page2_left div.before');
        var $page2_left_box2 = $('.page2_left div.after');
        var $page2_left_p1 = $('.page2_left p:nth-child(1)');
        var $page2_left2_p2 = $('.page2_left p:nth-child(2)');
        var $page2_left2_p3 = $('.page2_left p:nth-child(3)');
        var $page2_right_pic1 = $('.page2_right img.page2_pic1');
        var $page2_right_pic2 = $('.page2_right img.page2_pic2');
        var $page2_right_pic3 = $('.page2_right img.page2_pic3');
        
        var $page3_left_img1 = $('.page3_left img:nth-child(1)');
        var $page3_left_img2 = $('.page3_left img:nth-child(2)');
        var $page3_right_a = $('.page3_right span a');
        var $page3_right_a1 = $('.page3_right span:nth-child(1) a');
        var $page3_right_a2 = $('.page3_right span:nth-child(2) a');
        var $page3_right_a3 = $('.page3_right span:nth-child(3) a');
        var $page3_right_a4 = $('.page3_right span:nth-child(4) a');
        var $page3_right_a5 = $('.page3_right span:nth-child(5) a');
   
        var $page4_left_span1 = $('.page4_left span:nth-child(1)');
        var $page4_left_span234 = $('.page4_left span:nth-child(2),' +
            '.page4_left span:nth-child(3),.page4_left span:nth-child(4)');
        var $page4_left_span5 = $('.page4_left span:nth-child(5)');
        var $page4_right = $('.page4_right img');
      
        if(index==0){
            $page1_left.css({
                "opacity":1,"left":0,"transform":"rotate(0deg)","bottom":0, "transition":"all 0.6s 0.6s"
            })
            $page1_li1.css({"left":0,"transition":"left 0.4s ease-in 1s"});
            $page1_li2.css({"right":"4em","transition":"right 0.4s ease-in 1.4s"});
            $page1_li3.css({"transform":"rotateX(0deg)","opacity":1,"transition":"all 0.4s ease-in 1.8s"});
            $page_right_icon.css({
                "opacity":1,"transform":"rotate(360deg)","transition":"all 0.4s ease-in 2.2s"
            })
        }else if(!(index==0)){
            $page1_left.css({
                "opacity":0,"left":"80%","transform":"rotate(-30deg) scale(1.5)","transition":"all 0s 0.6s"
            })
            $page1_li1.css({"left":"-6em","transition":"all 0s 0.6s"});
            $page1_li2.css({"right":"-5em","transition":"all 0s 0.6s"});
            $page1_li3.css({"transform":"rotateX(180deg)","opacity":0,"transition":"all 0s 0.6s"});
            $page_right_icon.css({
                "opacity":0,"transform":"rotate(180deg)","transition":"all 0s 0.6s"
            })
        }
       
        if(index==1){
            $page2_left_box1.delay(600).animate({"top":"50%","margin-top":-($win_h/2)+"px"},200)
                .animate({"top":"-50%","margin-top":-($win_h/2)+"px"},200)

            $page2_left_box2.delay(600).animate({"bottom":"50%","margin-bottom":-($win_h/2)+"px"},200)
                .animate({"bottom":"-50%","margin-bottom":-($win_h/2)+"px"},200);
            $page2_left_p1.css({"left":"20%","transition":"all 0.6s 2.2s"});
            $page2_left2_p3.css({"right":"10%","transition":"all 0.8s 2.4s"});
            $page2_left2_p2.css({"opacity":1,"transition":"all 0.3s 1.8s"});
            $page2_right_pic1.css({"transform":"rotate(13deg) scale(1)","opacity":1,"transition":"all 0.3s ease-in 1.3s"});
            $page2_right_pic2.css({"transform":"scale(1)","opacity":1,"transition":"all 0.3s ease-in 1s"})
            $page2_right_pic3.css({"transform":"rotate(-13deg) scale(1)","opacity":1,"transition":"all 0.3s ease-in 1.6s"});
        }else if(!(index==1)){
            $page2_left_p1.css({"left":"-20%","transition":"all 0s 0.6s"});
            $page2_left2_p3.css({"right":"-22%","transition":"all 0s 0.6s"});
            $page2_left2_p2.css({"opacity":0,"transition":"all 0s 0.6s"});
            $page2_right_pic1.css({"transform":"rotate(13deg) scale(2)","opacity":0,"transition":"all 0s 0.6s"});
            $page2_right_pic2.css({"transform":"scale(2)","opacity":0,"transition":"all 0s 0.6s"});
            $page2_right_pic3.css({"transform":"rotate(-13deg) scale(2)","opacity":0,"transition":"all 0s 0.6s"});
        }
        
        if(index==2){
            $page3_left_img1.css({"left":"20%","transition":"all 0.8s 0.4s"});
            $page3_left_img2.css({"bottom":"45%","transition":"all 0.6s ease-out 1s"});
            $page3_right_a1.css({"right":"30%","transition":"all 0.6s ease-out 1.6s"});
            $page3_right_a2.css({"right":"30%","transition":"all 0.6s ease-out 1.8s"});
            $page3_right_a3.css({"right":"30%","transition":"all 0.6s ease-out 2s"});
            $page3_right_a4.css({"right":"30%","transition":"all 0.6s ease-out 2.2s"});
            $page3_right_a5.css({"right":"30%","transition":"all 0.6s ease-out 2.4s"});
        }else if(!(index==2)){
            $page3_left_img1.css({"left":"-80%","transition":"all 0s 0.6s"});
            $page3_left_img2.css({"bottom":"-20%","transition":"all 0s 0.6s"});
            $page3_right_a.css({"right":"-50%","transition":"all 0s 0.6s"});
        }
        
        if(index==3){
            $page4_right.css({"transform":"rotateY(0deg) scale(1)","transition":"all 0.6s ease-in 0.3s","opacity":1});
            $page4_left_span1.css({"left":"15%","color":"yellow","transition":"all 0.6s ease-out 1s"});
            $page4_left_span5.css({"right":"2%","color":"#00ff00","transition":"all 0.6s ease-out 1s"});
            $page4_left_span234.css({"opacity":1,"transition":"all 0.6s ease-out 1.4s"});
        }else if(!(index==3)){
            $page4_right.css({"transform":"rotateY(180deg) scale(2)","transition":"all 0s 0.6s","opacity":0});
            $page4_left_span1.css({"left":"-22%","color":"#00ff00","transition":"all 0s 0.6s"});
            $page4_left_span5.css({"right":"-40%","color":"yellow","transition":"all 0s 0.6s"});
            $page4_left_span234.css({"opacity":0,"transition":"all 0s 0.6s"});
        }
        }

})


  /* $(window).unload(function(){
        $('html,body').scrollTop(0);
    })*/