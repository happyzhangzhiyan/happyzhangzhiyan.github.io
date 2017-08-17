/**
 * Created by hxsd on 2017/2/14.
 */
window.onload=function(){
    var arr=[
        {pic:"shui.jpg",time:2,bigWidth:150,width:30},
        {pic:"jin.jpg",time:3,bigWidth:250,width:40},
        {pic:"diqiu.jpg",time:4,bigWidth:350,width:50},
        {pic:"huo.jpg",time:9,bigWidth:500,width:40},
        {pic:"mu.jpg",time:10,bigWidth:580,width:32},
        {pic:"tu.jpg",time:30,bigWidth:650,width:28},
        {pic:"tianwang.jpg",time:40,bigWidth:780,width:24},
        {pic:"haiwang.jpg",time:60,bigWidth:850,width:20}
    ];
    var oWrap=document.getElementById("yuzhou");
    for(var i=0; i<arr.length; i++){
        oWrap.innerHTML+='<div class="star_wrap"><div class="star_box"><div class="star"><img src="../img/'+arr[i].pic+'"></div></div></div>';
    }
    var aStarWrap=document.getElementsByClassName("star_wrap");
    var aStarBox=document.getElementsByClassName("star_box");
    var aStar=document.getElementsByClassName("star");
    for(var i=0; i<aStar.length; i++){
        aStarWrap[i].style.width=arr[i].bigWidth+"px";
        aStarWrap[i].style.height=arr[i].bigWidth+"px";
        aStarBox[i].style.width=arr[i].bigWidth+"px";
        aStarBox[i].style.height=arr[i].bigWidth+"px";
        aStarBox[i].style.animationDuration=arr[i].time+"s";
        aStar[i].style.width=arr[i].width+"px";
        aStar[i].style.height=arr[i].width+"px";
        aStar[i].style.left=-arr[i].width/2+"px";
        aStar[i].style.top="calc(50% - "+arr[i].width/2+"px)";
    }
};