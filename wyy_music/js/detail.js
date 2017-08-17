$('.callup').click(function(){
	console.log(home)
		get('tab');
})
$('.tietie span').click(function(){
	console.log(home)
	if(home==1){
		get('tab');
	}
	if(home==2){
		get('tab');
		get('musiclist',$('.tabcontaner'));
	}
	//$('body').scrollTop(scotop);
	
})
var params=getnum();

function getmusiclist(id,callback){
	$.ajax({
		type:'get',
		url:"https://api.imjad.cn/cloudmusic/?type=playlist&id="+id,
		//url:'data/playlist.json',
		success:function(data){
			callback(data.playlist)
		}
	})

}

getmusiclist(params.id,function(data){
console.log(data,params.id)
		var $songinlist=$('.songinlist');
		var li=$('.songtamp').html();
		var $title=$('.musictitle');
			$title.find('img').attr('src',data.coverImgUrl);
			$('.titlepic').find('span').html(data.playCount);
			$('.listtitle').find('h4').html(data.name);			
			$('.listtitle').find('p').html(data.creator.nickname);
			//console.log(data.tracks[i])
		for(var i=0;i<data.tracks.length;i++){
			var $li=$(li);
			var music=data.tracks[i];
			$li.find('.musicname').html(data.tracks[i].name);
			$li.find('.musicplayer').html(data.tracks[i].ar[0].name);
			//console.log(iscollected(music.id))
			if(!iscollected(music.id)){
				$li.find('span').addClass('no');
			}else{
				$li.find('span').addClass('yes');				
			}

			$li.appendTo($songinlist);
			
			$li.data('music',music).click(function(){
				//console.log($(this).data('music'));
				$('.prevnext').attr('musicid',$(this).data('music').id).unbind('click')
				musicControler.play($(this).data('music'))
				localStorage.Audiolist=JSON.stringify(data);;
				//console.log(localStorage.Audiolist);								
			})
			$li.find('span').data('music',music).click(function(e){
				e.stopPropagation();
				var music=$(this).data('music');
				if(localStorage.collected){
					var list=JSON.parse(localStorage.collected);
					if(iscollected(music.id)){
						list[music.id].collect=false;
						$(this).removeClass().addClass('no');
					}else{
						list[music.id]={'name':music.name,'artter':music.ar[0].name,'collect':true};
						$(this).removeClass().addClass('yes');					
					}
				}else{
					var list=localStorage.collected={};
					var id=music.id;
					list[id]={'name':music.name,'artter':music.ar[0].name,'collect':true};					
					$(this).removeClass().addClass('yes');
				};
				//console.log(localStorage.collected)
				localStorage.collected=JSON.stringify(list);
			})
		}
})

$(document).scrollTop(0)

$(document).scroll(function(){

	if($('body').scrollTop()>20){		
		$('.callup').css('display','block')
	}else{
		$('.callup').css('display','none')
	}
})

function iscollected(id){
	if(localStorage.collected){
		var list=JSON.parse(localStorage.collected);
	}else{
		return false;
	};
	if(!list){
		return false;
	}else{
		if(list[id]&&list[id].collect){
			return true;
		}else{
			return false;
		}
	}
}
