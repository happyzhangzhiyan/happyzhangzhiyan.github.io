
function load(m){
	m=m|| 'home';
	if(home==2){
		get('musiclist',$('.tabcontaner'));
		$('.tarbar ul span').css({'left':'25%'})
		return false;
	}
	get(m,$('.tabcontaner'));
}
load();
$(function(){
	$('#m1').click(function(){
		home=1;
		$('.tarbar ul span').animate({'left':0},300)
		load();
	})
	$('#m2').click(function(){
		home=2;
		$('.tarbar ul span').animate({'left':'25%'},300)
		load('musiclist');
	})
	$('#m3').click(function(){
		$('.tarbar ul span').animate({'left':'50%'},300)
		load('order');
	})
	$('#m4').click(function(){
		$('.tarbar ul span').animate({'left':'75%'},300)
		load('order');
	})
})
