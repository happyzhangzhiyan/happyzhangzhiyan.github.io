firmBox=function(msg,fn){
	$("body").append("<div class='firmbox'><p>"+msg+"</p><button type='button'>确定</button></div>")
	var	oBox=$(".firmbox")
		showCenter(oBox);
		move(oBox);

		$('.firmbox button:first').click(function(){
			oBox.remove();
			fn&&fn();
		})
		
		$('.firmbox button:last').click(function(){
			oBox.remove()
		})
	
		}



//居中
function showCenter(obj){
	function center(){
		var	screenW=$(window).width();
		var	screenH=$(window).height();
		var	left=(screenW-obj.outerWidth())/2;
		var	top=(screenH-obj.outerHeight())/2;
			obj.css({'top':top,'left':left}) 
			
	}
	
		center();
		$(window).resize(center);
}


move=function (obj,title){
	 	title=title ||obj;
	 	
		title.mousedown(function(ev){
			
			var disX=ev.pageX-obj.offset().left
			var disY=ev.pageY-obj.offset().top
		$(document).mousemove(function(ev){
			
			
			var x=ev.pageX-disX;
			var y=ev.pageY-disY;
			var screenW=$(window).width();
			var screenH=$(window).height();
			
			if(x>0&&x<screenW-obj.outerWidth()){
				
				obj.css('left',x);
			}
			if(y>0&&y<screenH-obj.outerHeight()){
	
				obj.css('top',y);
			}	
		})
		
		$(document).mouseup(function(){
			
		$(document).unbind('mousemove')
		})
		
		
		
	return false
	})
}