function changeBg(){
	$(".insert li").each(function(i){
		if(i%2==0){
			$(this).css({"background":"#00c0ff"})
		}else{
			$(this).css({"background":"#286090"})
		}
	})
}

$(function(){
	/*$.ajax({
		type:"get",
		url:"../html/temeplate/header.html",
		async:true,
		success:function(data){
			$("#wrap").html(data);
			$("#wrap .nav li").eq(4).addClass("active")
		}
	});*/
	
	
	$.ajax({
			type:"get",
			url:"../json/message.json",
			async:true,
			success:function(data){
				var data=data.message;
				for (var i=0;i<data.length;i++) {
					$(".insert").prepend("<li><span class='name'>"+data[i].name+" 说到:</span><p>"+data[i].des+"</p><time class='time'>"+data[i].data+"</time><span class='cai fabu "+data[i].cai_show+"'><em class='caiNum'>"+data[i].cai_num+"</em></span><span class='zan  "+data[i].zan_show+" fabu'><em class='zanNum'>"+data[i].zan_num+"</em></span></li>")
					changeBg()
				}
			}
			
		});
	
	
	
	var ue=UE.getEditor('Mytext',{
		toolbars:[
			[
            'bold','italic', 'underline', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'forecolor', 'backcolor','selectall', 'cleardoc', 
            'rowspacingtop', 'rowspacingbottom', 'lineheight', 
            'customstyle','fontsize',
            'directionalityltr', 'directionalityrtl', 'indent', 
            'touppercase', 'tolowercase',
            'imagenone', 'imageleft', 'imageright', 'imagecenter',
            'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'pagebreak', 'template', 'background', 'date', 'time', 'spechars', 'wordimage'
        	]
		]
	});
	var name
	$("#alert .btn").click(function(){
		name=$("#user").val();
		$(".model").remove();
		$(this).parent().addClass("hide");
		if ($("#user").val()!='') {
			$("form").fadeIn();
			$(".edui-editor-breadcrumb").hide();
		}else{
			$(".insert-btn").fadeIn()
		}
		
	})
	$(".close").click(function(){
		$(".model").remove();
		$(this).parent().addClass("hide");
		$(".insert-btn").fadeIn()
	})

	$(".cancel").click(function(){
		$("form").fadeOut();
		$(".insert-btn").fadeIn()
	})
	
	$(".insert-btn").click(function(){
		$("<div class='model'></div>").css({
			"position":"fixed",
			"left":0,
			"top":0,
			"height":$(window).height(),
			"width":$(window).width(),
			"background":"#ccc",
			"opacity":.5
		}).appendTo($("body"))
		
		var h=$(window).height()/2-$("#alert").innerHeight() /2;
		var w=$(window).width()/2-$("#alert").innerWidth()/2;
		$(this).fadeOut();
		$("#alert").css({
			"top":h,
			"left":w
		}).removeClass("hide");
	
		
	})
	$(window).resize(function(){
		var h=$(window).height()/2-$("#alert").innerHeight()/2;
		var w=$(window).width()/2-$("#alert").innerWidth()/2;
		$("#alert").css({
			"top":h,
			"left":w
		})
		$(".model").css({
			"height":$(window).height(),
			"width":$(window).width()	
		})
	})
	
	
	
	$(".release").click(function(){
		var oDate=new Date()
		oMonth=oDate.getMonth();
		oDay=oDate.getDate();
		oHous=oDate.getHours();
		oMinut=oDate.getMinutes();
		oSecond=oDate.getSeconds();
		var val=ue.getContent();
		
		$(".insert").prepend('<li><span class="name">'+name+' 说到:</span>'+val+'<span class="cai cai1 fabu"><em class="caiNum">0</em></span><span class="zan zan1 fabu"><em class="zanNum">0</em></span><time class="time">'+(oMonth+1)+'月'+oDay+'日'+oHous+':'+oMinut+':'+oSecond+'</time></li>');
		changeBg()
		$("form").fadeOut();
		$(".insert-btn").fadeIn()
		ue.execCommand('cleardoc');
		
	})	

	$(".insert").on("click",".fabu", function(){
		var _this=$(this).children("em")
		if($(this).hasClass("zan")){
			$(this).toggleClass("zan1")
			$(this).toggleClass("zan2")
			
			if($(this).hasClass("zan2")){
				_this.text(_this.text()-0+1)
			}else{
				_this.text(_this.text()-0-1)
			}
			
		}else if($(this).hasClass("cai")){
			$(this).toggleClass("cai1")
			$(this).toggleClass("cai2")
			
			if($(this).hasClass("cai2")){
				_this.text(_this.text()-0+1)
			}else{
				_this.text(_this.text()-0-1)
			}
		}
		
		
	});
})
	