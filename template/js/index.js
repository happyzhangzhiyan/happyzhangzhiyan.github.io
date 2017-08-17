window.onload=function(){
	
	//----------------------------------------------------------------控制轮播图速度--------------------
	 $('.carousel').carousel({
        interval:500
    })
	
	//----------------------------------------------------------------main4图片做交互---------------
	var oBox=document.getElementsByClassName('box')[0];
	var picList =document.getElementsByClassName('picList')[0];
	
	var aLi=picList.children;//新闻条目
	
	picList.innerHTML+=picList.innerHTML;//复制一套
	
	var timer;
	var i=0;
	
	function run(){
		timer=setInterval(function(){
			i++;
			if(i>aLi.length/2){//滚动超过一套  aLi在此时才赋值，所以要取一半
				picList.style.left='0px';
				i=1;//从第一条开始
			};
			move(picList,{"left":-i*220})
		},2000);
	};
	
	run();
	
	oBox.onmouseover=function(){
		clearInterval(timer);
	};
	
	oBox.onmouseout=function(){
		run();
	};
	
	
	
	//---------------------------------------------------------点击导航 滑动到相对应的楼层----------------
	$('.nav li').click(function(){
		
		//先遍历所有的a 移除类名ac
		$('.nav li a').each(function(){
			$('.nav li a').removeClass('ac')
		})
		//当前的a增加类名ac
		$(this).find("a").addClass('ac');
		
		
		var index=$(this).index();
		//找到对应楼层的top值,让滚动条滚动到这个值
		var t=$('.floor').eq(index).offset().top;
		$("body").animate({"scrollTop":t});

});

	
}
   
    
    
