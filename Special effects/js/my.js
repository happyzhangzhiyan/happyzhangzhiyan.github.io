/**
 */
//function $(id) {return document.getElementById(id);}
function show(obj) { obj.style.display = "block";}
function hide(obj) { obj.style.display = "none";}

//兼容各大浏览器的获取指定class的DOM节点的函数;
function getClass(className){
                if (document.getElementsByClassName) {
                    return document.getElementsByClassName(className);
                }else{
                    var all = document.getElementsByTagName('*');
                    var classArr = [];
                    var result = [];
                    for(var i=0;i<all.length;i++){
                        var classAll = all[i].className.split(' ');
                        for(var j=0;j<classAll.length;j++){
                            if (classAll[j] == className) {
                                result.push(all[i]);
                            }
                        }
                    }
                        return result;
                }
            }
            //仿jQuery选择器方法;
function $(name){
    var firstStr = name.slice(0,1);
    var str = name.substr(1);
    switch(firstStr){
        case '#':
        return document.getElementById(str);
        break;
        case '.':
        return getClass(str);
        break;
        default:
        return document.getElementsByTagName(name);
    }
}


//封装获取浏览器卷起的头部的高度的函数
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}



//封装兼容可以获得各大浏览器屏幕宽度的函数;
function client(){
    if(window.innerWidth != null){
        return {
            width : window.innerWidth,
            height : window.height
        }
    }else if(document.compatMode == "CSS1Compat"){
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }else{
        return {
            width : document.body.clientWidth,
            height : document.body.clientHeight
        }
    }
}


 //物体匀速运动函数
function animateP(obj,target){
        clearInterval(obj.timer);
        //首先确定物体往哪个方向运动;target为目标位置;obj.offsetLeft为物体所在位置;
        var speed = target > obj.offsetLeft ? 5 : -5;
        //这里的timer必须设置为obj的属性,这样在物体多次开启定时器的时候能够确保清楚的是唯一一个obj的定时器，如果使用变量的话,那么每次开启的定时器将无法清除掉多次开启的定时器.为属性绑定定时器确保了清除定时器时的唯一性.
        obj.timer = setInterval(function(){
            //时时监控两个位置的距离差;
            var result = target - obj.offsetLeft;
            obj.style.left = obj.offsetLeft + speed +"px";
            //绝对值的差值<=5时清除定时器，并让物体立即到指定位置;
            if(Math.abs(result)<=5){
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            } 
        },30);
    }

//多个属性的缓动框架(重要);
    function animate(obj,json,fn){
        clearInterval(obj.timer)
        obj.timer = setInterval(function(){
            var flag = true;
            //判断是否应该清除定时器;
            for(var attr in json){
                //获取当前属性;
                if(attr == "opacity"){
                    //ie678 不能通过这种方式得到opacity的属性，因此这种方式在ie678中不兼容;
                    var current = getStyle(obj,"opacity") * 100;
                    var target = json[attr] * 100;
                }else{
                    //将来如果想到有兼容ie678的写法就写这里;
                    var current = parseInt(getStyle(obj,attr));
                    var target = json[attr];    
                }
                //获取目标值;
                //计算步长;
                var step = (target - current) / 10;
                //步长取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //设置属性;
                if(attr == "opacity"){
                    if("opacity" in obj.style){
                        obj.style.opacity = (current + step) / 100;
                    }else{
                        obj.style.filter = "alpha(opacity="+(current + step)+")";
                    }
                }
                obj.style[attr] = current + step + "px";
                if(current != target){
                    flag = false;
                }
            }
                if(flag){
                    clearInterval(obj.timer);
                    if(fn){
                        fn();
                    }
                }
        },30)
    }
    
//获取内联，外嵌的css样式的函数;(重要)
    function getStyle(obj,attr) {  //  谁的      那个属性
        if(obj.currentStyle)  // ie 等
        {
            return obj.currentStyle[attr];  // 返回传递过来的某个属性
        }
        else
        {
            return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
        }
    }