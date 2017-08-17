/**
 * Created by hxsd on 2017/2/14.
 */
window.onload=function(){
    var arr=[
        {pic:"html5.jpg",time:5,bigWidth:150,width:30},
        {pic:"css3.jpg",time:6,bigWidth:250,width:40},
        {pic:"js.jpg",time:7,bigWidth:350,width:50},
        {pic:"jq.jpg",time:9,bigWidth:500,width:40},
        {pic:"b.jpg",time:10,bigWidth:580,width:32},
        {pic:"ajax.jpg",time:15,bigWidth:650,width:28},
        {pic:"v3.jpg",time:20,bigWidth:780,width:24},
        {pic:"ps.jpg",time:25,bigWidth:850,width:20}
    ];
    var oWrap=document.getElementById("wrap");
    for(var i=0; i<arr.length; i++){
        oWrap.innerHTML+='<div class="star_wrap"><div class="star_box"><div class="star"><img src="images/'+arr[i].pic+'"></div></div></div>';
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