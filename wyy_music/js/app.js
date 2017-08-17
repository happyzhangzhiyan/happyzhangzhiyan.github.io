
var home=1;

//获取?后面传入的值--------------------------------------
function getnum(){
//声明新的对象来装内容
var params={};
//获取页面的链接地址
var Href=window.location.href;
//将链接地址问号前后分开
var harr=Href.split('?');
//将问号后面的内容取出并且转换成新的数组
if(harr.length==2){var h=harr[1].split('&');}else{return {}}

//遍历新的新的数组
 for(var i=0;i<h.length;i++){
 	//将新的数组的每一项都转换成数组
 	var hl=h[i].split('=');
 	//将新数组的0和1的位置作为键和值装入到对象中
 	params[hl[0]]=hl[1];
 	
 }
 return params
console.log(params)
}
getnum()
//获取#后面的跳转地址名称-----------------------------------------------------
function geturl(){
	var url=window.location.href;
	var arr=url.split('#');	
	if(arr.length!=2){return false};
	//console.log(arr)
	arr=arr[1];
	//console.log(arr)
	arr=arr.split('?');
	//console.log(arr)
	arr=arr[0];
	console.log(arr);
	return arr;
}
//geturl();
//通过地址名称实现ajax跳转----------------------------------------------------------
function get(m,contaner){
	contaner=contaner||$('.share')
	$.ajax({
		url:'html/'+m+'.html',
		datatype:'jsonp',
		success:function(data){
			//console.log(data)
			contaner.html(data)
		}
	})
	getjs(m)
}
//加载对应的js文件--------------------------------------
function getjs(m){
	$.ajax({
		url:'js/'+m+'.js',
		datatype:'jsonp'
	});
}
//引用的app.js所以必须放到延迟加载里面-------------------------------------------
$(function(){
	
	if(!localStorage.count){
		localStorage.count=0;
	}	
	localStorage.count++;
	console.log(localStorage.count)
	if(localStorage.count==1){
		$('.glabol').css('display','none')
		get('hello');
	}else{
		get('tab');
		get('audio',$('.glabol'))
		$('.glabol').css('display','block')
	}	
	var dom=document.documentElement; 
    var w=dom.clientWidth;
    dom.style.fontSize= w/3.75+"px";
//  localStorage.count=0;
})
