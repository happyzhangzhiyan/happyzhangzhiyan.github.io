// JavaScript Document

/*页面居中显示*/





$.fn.showCenter=function(){
	return this.each(function(){
		var _this=$(this);
		function center(){
			var screenW=$(window).width();
			var screenH=$(window).height();
			_this.show();
			var l=(screenW-_this.outerWidth() )/2;  
			var t=(screenH-_this.outerHeight() )/2;
			_this.css({'left':l,"top":t})
		};
		center();
		$(window).resize(center);
	});
	

}


/*拖拽*/

$.fn.drag=function(title){// obj:拖拽对象   title：可拖拽标题
	return this.each(function(){
		var _this=$(this);
		title=title || _this;//拖拽判断
		title.mousedown(function(ev){
			//鼠标按下，计算盒子偏移距离
			var disX=ev.pageX-_this.offset().left;
			var disY=ev.pageY-_this.offset().top;
			
			//-------------------------------------------
			$(document).mousemove(function(ev){
				var t=ev.pageY-disY;
				var l=ev.pageX-disX;
									
				var screenW=$(window).width();//屏幕宽度
				var screenH=$(window).height();//屏幕高度
				
				if(l<0){
					l=0;
				};
				if(t<0){
					t=0;
				};
				
				if(l>screenW-_this.outerWidth()){ //屏幕宽度---盒子宽度
					l=screenW-_this.outerWidth()
				};
				
				if(t>screenH-_this.outerHeight()  ){ //屏幕宽度---盒子宽度
					t=screenH-_this.outerHeight()
				};
				
				_this.css({'left':l,'top':t})
			});
			//-----------------------------------------
			$(document).mouseup(function(){
				$(document).unbind('mousemove');
			});
			return false;//阻止默认事件
		});
	
	});
	
	
	
	
};

function documentReady(fn){
	if(document.addEventListener)document.addEventListener('DOMContentLoaded', fn, false);
	else{
		document.attachEvent('onreadystatechange', function (){//IE兼容
			if(document.readyState=='complete') fn && fn();
		});
	}
};

var hxsd_tools={



//计算offsetTop
offsetTop:function (elm){ 
	var top = elm.offsetTop; 
	var parent = elm.offsetParent; 
	while( parent != null ){ 
		top += parent.offsetTop; 
		parent = parent.offsetParent; 
	}; 
	return top; 
}, 

//计算offsetLeft
offsetLeft:function(elm){ 
	var left = elm.offsetLeft; 
	var parent = elm.offsetParent; 
	while( parent != null ){ 
		left += parent.offsetLeft; 
		parent = parent.offsetParent; 
	}; 
	return left; 
},

//读取样式-------------------------------------
getStyle:function (obj, styleName){
	var value=obj.currentStyle ? obj.currentStyle[styleName]:getComputedStyle(obj,false)[styleName];
	return styleName=='opacity' ? value=Math.round(parseFloat(value)*100):value=parseInt(value);
},

//-----------------------------------------------------------------------------
move:function (obj,moveJson,speed,fn){//对象 运动模式 移动时间 回调
	var prd_speed={ //预定义 predefine
		veryslow:	5000,
		slow:		2000,
		normal:		1000,
		fast:		700,
		veryfast:	300
	};
	
	//如果输入预定速度的字符串，就进行转换
	if(speed){
		if(typeof stopTime=='string') speed=prd_speed[speed];
	}else{
		speed=prd_speed.normal;
	}
	
	//-----------------------------------------------------
	var start={};//起点json
	var dis={};//距离json
	
	for(var key in moveJson){
		start[key]=this.getStyle(obj, key);
		dis[key]=moveJson[key]-start[key];//距离 distance
	}
	
	//分段
	var count=parseInt(speed/30);////次数
	var n=0;//步进
	
	//定时器---------------------------------------------
	clearInterval(obj.timer);//使用对象属性，定义计时器变量
	obj.timer=setInterval(function(){
		n++;
		for(var key in moveJson){
			var a=1-n/count;  //a的值会越来越小
			var step_dis=start[key]+dis[key]*(1-a*a*a);
			
			if(key=='opacity'){//透明
				obj.style.filter='alpha(opacity:'+step_dis+')';
				obj.style.opacity=step_dis/100;
			}
			else{//其他
				obj.style[key]=step_dis+'px';
			}
		};
		
		//取消定时器
		if(n==count){
			clearInterval(obj.timer);
			fn && fn();
		};
	
	},30)
}
}