var musicControler={
	server: "http://musicapi.duapp.com/api.php",
	play:function(music){
		//console.log(music.id)
		$.ajax({
			type:'get',
			url:this.server+"?type=url&id="+music.id,
			//url:'',
			async:true,
			success:function(data){
				//console.log(data,music)
				var Audio=$('#audio').get(0);
				//Audio.src='images/长宇-心动 (Live).mp3'
				Audio.src=data.data[0].url;
				audio.play();

				$('.audioimg img').attr('src',music.al.picUrl);
				$('.audioname').html(music.name);
				$('.audioplayer').html(music.ar[0].name);
				var musicid=music.id;
				var audiolength;
				Audio.ondurationchange=function(){
					audiolength=Audio.duration;				
				}
				Audio.ontimeupdate=function(){
					var decript=Audio.currentTime/audiolength;
					decript=3.75*decript+'rem'
					//console.log(Audio.currentTime)
					$('.audiolength div').css('width',decript)
					//console.log(decript,audiolength)
				}
				Audio.onended=function(){
					var Audiolist=JSON.parse(localStorage.Audiolist);
						//console.log(Audiolist,musicid)
						for(var i=0;i<Audiolist.tracks.length;i++){
							if(Audiolist.tracks[i].id==musicid){
								//Audio.src=;
								var idid=Audiolist.tracks[i+1];								
								musicControler.play(idid)
								//console.log(Audiolist.tracks[i+1].id)
							}
						}
				}
				$('.prevnext').click(function(){
						var Audiolist=JSON.parse(localStorage.Audiolist);
						//console.log(Audiolist,musicid)
						for(var i=0;i<Audiolist.tracks.length;i++){
							if(Audiolist.tracks[i].id==musicid){
								//Audio.src=;
								var idid=Audiolist.tracks[i+1];
								musicControler.play(idid)
								//console.log(Audiolist.tracks[i+1].id)
							}
						}
						$(this).unbind('click')
				})
			}
		})
	}
	
}


$('#playbtn').addClass('play');
$('#playbtn').click(function(){
	//console.log(111)
	if($('#playbtn').hasClass('play')){
		audio.pause();
		$(this).removeClass('play')
	}else{
		audio.play();
		$(this).addClass('play')
	}
})
