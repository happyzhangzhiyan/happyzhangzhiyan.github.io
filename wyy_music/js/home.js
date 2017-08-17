var scotop=0;
var server="http://musicapi.duapp.com/api.php";
//------------------------------------------
var start=0;
function getplaylist(start,limit,callback){
	if(iscatch()){
		console.log('访问缓存');
		var list=JSON.parse(localStorage.list);
		callback(list);
	}else{
		$.ajax({
			type:'get',
			url:server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset="+start+"&limit="+limit, 
			//url:'data/topPlayList.json',
			//datatype:'jsonp',
			success:function(data){
				console.log(data.playlists);
				console.log('访问网络');
				localStorage.catchtime=new Date().getTime();
				localStorage.list=JSON.stringify(data.playlists);
				callback(data.playlists);
			},
			error:function(){
				$('.songlist').html('请检查您的网络');		
			}
		})
	}
	function iscatch(){
		if(!localStorage.list||localStorage.list=='underfind'){
			return false;
		}
//		if(new Date().getTime()-localStorage.catchtime>30*1000){
//			return false;
//		}
		return false;
	}
		
}
var listlength=9;
//回调函数作为参数传入执行函数内容
function tt(data){
	var $list=$('.songlist')	
	var template=$('.template').html();
	//console.log(data,$list,template)
	for(var i=0;i<data.length;i++){
		var $template=$(template);
		//console.log($template)
		$template.find('a').attr('href','#detail?id='+data[i].id)
		$template.find('span').html(data[i].playCount);
		//$template.find('img').attr('src','images/109951162857949886.jpg');
		$template.find('img').attr('src',data[i].coverImgUrl)
		$template.find('p').html(data[i].name);
		$template.appendTo($list);
	}
}
getplaylist(start,listlength,tt)

//滑动到底部时自动增加-将start设置为第一次加载的数量
start=9;
$(document).scroll(function(){
	//console.log($('body').scrollTop(),$('body').offset().top,$('body').height(),$(window).height())
	if(!$('.musictitle')){return false;}
	var numm=$('body').height()-$(window).height();
	//console.log(numm,$('body').scrollTop(),$('body').scrollTop()==numm)
		scotop=$('body').scrollTop()
//	console.log();
	if($('body').scrollTop()==numm){		
		getplaylist(start,6,tt)
		start+=6;//每次都将初始位置递增6个,因为每次都增加了6个显示
		console.log(start)
	}
})

