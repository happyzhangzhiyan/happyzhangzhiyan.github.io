var musicstart=0;
var musiclistlength=10;
function ttt(data){
	var $list=$('.musiclistin')	
	var template=$('.templateone').html();
	//console.log(data,$list,template)
	for(var i=0;i<data.length;i++){
		var $template=$(template);
		//console.log($template)
		$template.find('a').attr('href','#musiclist?id='+data[i].id)
		$template.find('span').html(data[i].playCount);
		//$template.find('img').attr('src','images/109951162857949886.jpg');
		$template.find('img').attr('src',data[i].coverImgUrl)
		$template.find('p').html(data[i].name);
		$template.appendTo($list);
	}
}
getplaylist(musicstart,musiclistlength,ttt);

musicstart=10;
$(document).scroll(function(){
	//console.log($('body').scrollTop(),$('body').offset().top,$('body').height(),$(window).height())
	if(!$('.musictitle')){return false;}
	var numm=$('body').height()-$(window).height();
	//console.log(numm,$('body').scrollTop(),$('body').scrollTop()==numm)
		scotop=$('body').scrollTop()
//	console.log();
	if($('body').scrollTop()==numm){		
		getplaylist(musicstart,6,ttt)
		musicstart+=6;//每次都将初始位置递增6个,因为每次都增加了6个显示
		console.log(musicstart)
	}
})