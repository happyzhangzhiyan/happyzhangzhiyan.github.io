// JavaScript Document

$.extend({

	modal:function (){
		var oM=$('<div class="modal"></div>');
		$(document.body).append(oM);
		return function(){
			oM.remove();//删除模态层	
		};
	},
	
	
	//确定弹框
	confirmBox:function (msg,fn){
		
		var delModal=$.modal();//调用模态层 并接收返回值  函数 
		
		var oBox=$('<div class="confirmBox"><h3 style="height:40px; background:blue;">asdfasdf</h3><p>'+msg+'</p><button type="button">确定</button>　　<button type="button">取消</button></div>');
		$(document.body).append(oBox);
		
		
		/*拖拽*/
		oBox.showCenter().drag(oBox.children('h3'));
		
		
		oBox.on('click','button:first',function(){
			oBox.remove();//删除alertBox
			delModal();
			fn && fn();
		});
		oBox.on('click','button:last',function(){
			oBox.remove();//删除alertBox
			delModal();
		})
	},
	
	promptBox:function(fn){
		var delModal=$.modal();
		var oBox=$('<div class="promptBox"><h4>请输入您的宝贵意见</h4><textarea></textarea><button type="button">确定</button>　　　　　　　　　<button type="button">取消</button></div>');
		$(document.body).append(oBox);
		/*拖拽*/
		oBox.showCenter().drag();
		oBox.find('textarea,button').mousedown(function(ev){
				ev.stopPropagation();
		});
		var textArea=oBox.children('textarea');
		oBox.on('click','button:first',function(){
			fn && fn(textArea.val());
				$('#fankui').show();
				$('#fankuiyj').show();

		});
		oBox.on('click','button',function(){
			oBox.remove();//删除alertBox
			delModal();
		})
	},
	
	
	//滑轮
	mouseWheel:function(fn){
		return this.each(function(){
			if(window.navigator.userAgent.indexOf('Firefox')!=-1){
				this.addEventListener('DOMMouseScroll',whellFn,true);//firefox,ie;
			}else{
				this.onmousewheel=wheelFn;	
			};
			function wheelFn(ev){
				var direct=ev.wheelDelta? ev.wheelDelta<0:ev.detail>0;
				fn&&fn(direct);//将direct作为参数传递出去
				ev.preventDefault();//DOM2级  组织默认时间  firefox
			};
		});
	}
});

