// JavaScript Document
$(function(){
//导航部分
    $('.list_nav li').each(function (i) {
        $(this).hover(
            function () {
                $('.popup').show();
                $('.section_one').hide();
                $('.section_one').eq(i).show()
            },
            function () {
                $('.popup').hide();
                $('.section_one').hover(
                    function () {
                        $('.popup').show();
                        $(this).show()
                    },
                    function () {
                        $('.popup').hide()
                    }
                )

            }
        )
    });
	//楼层侧边栏
    $('.sidebar span a').on('click',function (e)
        {
            var id=this.hash;
            $('.sidebar span').css('display','none')
            $(this).parent().css('display','block');
            $(document.body).animate({'scrollTop':$(id).offset().top},600)
        }
    );
//判断楼层的高度来给li相应的颜色
	 window.onscroll=function () {
       	var oScrollTop=$(document).scrollTop();
         if(oScrollTop>=1500){
             $('.sidebar').animate({'opacity':1},20);
             scroll(oScrollTop);
         }

         scroll(oScrollTop);
     }
     function scroll(m){
         if(m>=1500 && m<2300){
             $('.sidebar').animate({'opacity':1},20);
             all();
             $('.sidebar span').eq(0).css('display','block');
         }else if(m>=2300 && m<3000){
             all();
             $('.sidebar span').eq(1).css('display','block');
         }else if(m>=3000 && m<3600){
             all();
             $('.sidebar span').eq(2).css('display','block');
         }else if(m>=3600 && m<4200){
             all();
             $('.sidebar span').eq(3).css('display','block');
         }else if(m>=4200 && m<4950){
             all();
             $('.sidebar span').eq(4).css('display','block');
         }else if(m>=4950 && m<5500){
             all();
             $('.sidebar span').eq(5).css('display','block');
         }else if(m>=5500 && m<6150){
             all();
             $('.sidebar span').eq(6).css('display','block');
         }else if(m>=6150 && m<6750){
             all();
             $('.sidebar span').eq(7).css('display','block');
         }
         else if(m>=6750 && m<7500){
             all();
             $('.sidebar span').eq(8).css('display','block');
         }else if(m>=7500 && m<8000){
             all();
             $('.sidebar span').eq(9).css('display','block');
         }else if(m>=8000 && m<8600){
             all();
             $('.sidebar span').eq(10).css('display','block');
         }else if(m>=8600){
             all();
             $('.sidebar span').eq(11).css('display','block');
         }else{
             $('.sidebar').animate({'opacity':0},20);
             all();
         };

     }
     function all() {
         $('.sidebar span').css('display','none');
     }
	//banner图片轮播
	var banner = document.getElementsByClassName('banner')[0]
	var ba_img = document.getElementsByClassName('ba_img')[0];
	var baLi = ba_img.getElementsByTagName('li');
	var ba_ol = banner.getElementsByTagName('ol')[0];
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var n=0; //计算器累加
	//左右按钮显示or隐藏
	banner.onmouseover = function(){
		btn1.style.display = "block";
		btn2.style.display = "block";
		clearInterval(banner.timer);
	};
	banner.onmouseout = function(){
		btn1.style.display = "none";
		btn2.style.display = "none";
		autoRun();
	};
	//生成按钮
	for(var i=0;i<baLi.length;i++){
		var Li = document.createElement('li');
		Li.innerHTML = i+1;
			ba_ol.appendChild(Li);
	};
	
	function change(n){
		for(var j=0;j<ba_btn.length;j++){
				ba_btn[j].className = "";
			}
			ba_btn[n].className="b_sty";
			hxsd_tools.move(ba_img,{"left":-li_w*n});
	};
	
	//按钮样式
	var ba_btn = ba_ol.getElementsByTagName('li');
	for(var i=0;i<ba_btn.length;i++){
		ba_btn[0].className = "b_sty";
		ba_btn[i].index = i;
		ba_btn[i].onmouseover = function(){
			n=this.index;
			change(n);
		};
	};
	//按钮点击
	var li_w = hxsd_tools.getStyle(baLi[0], 'width'); //图片的宽度
    ba_img.style.width = li_w * baLi.length + 'px';
	var oUl_l = hxsd_tools.getStyle(ba_img,'left'); //获取ul的left值
	
		btn1.onclick = function(){
			n--;
			if(n<0){n=baLi.length-1;};
			change(n);
			hxsd_tools.move(ba_img,{"left":oUl_l-n*li_w});
		};
		btn2.onclick = function(){
			n++;
			if(n>=baLi.length){n=0;};
			change(n);
			hxsd_tools.move(ba_img,{"left":oUl_l-n*li_w});
		};
		
		
		function autoRun(){
			clearInterval(banner.timer);
			banner.timer=setInterval(function(){
				//计数器自动累加
				n++;
				//当n>aLi.length n=0
				if(n==baLi.length){
					n=0;
				};
				change(n);
				hxsd_tools.move(ba_img,{"left":oUl_l-n*li_w});
			},2000);
		};
		autoRun();

	//侧边导航栏
	var oMenu = document.getElementById('sidebar');
    var aMenuLi = oMenu.getElementsByTagName('li');
    var oMenuCont = document.getElementById('sectionAll');
	var oWrap=document.getElementsByClassName('wrap')[0]
    var aDl = oMenuCont.children;
    var show_t; //显示弹框计算器
    var hide_t; //隐藏弹框计算器
    var move_t; //鼠标从弹框移入菜单延迟用计时器

    //----------------------------------------------------------------------------------------
    for (var i = 0; i < aMenuLi.length; i++) {
        aMenuLi[i].index = i; //发牌照
        aMenuLi[i].onmouseover = function() {
            clearTimeout(hide_t); //清除关闭
            clearTimeout(move_t); //清除鼠标移动

            var _this = this; //计时器中的this是window，所以要先声明一个_this变量，用这个变量传入计时器
			 for(var k=0;k<aMenuLi.length;k++){
				aMenuLi[k].className="" 
			}
			 aMenuLi[this.index].className="aLi"
            show_t = setTimeout(function() {

                oMenuCont.style.display = "block"; //oMenuCont弹框 显示

                //显示相对应的内容(就是选项卡的原理)
                for (var i = 0; i < aDl.length; i++) {
                    aDl[i].style.display = "none";
                };
                aDl[_this.index].style.display = "block";
            }, 0);


        };


        aMenuLi[i].onmouseout = function() {
            clearTimeout(show_t);
            clearTimeout(hide_t);
            var _this = this;
			
            hide_t = setTimeout(function() {
                oMenuCont.style.display = "none"; //oMenuCont弹框 隐藏
            }, 0);
        };
		oWrap.onmouseleave=function(){
			 for(var k=0;k<aMenuLi.length;k++){
				aMenuLi[k].className="" 
			}
			
		}
        //-------------------------------------------------------------------------------------     
    };

    //oMenuCont绑定两个事件
    oMenuCont.onmouseover = function() {
        clearTimeout(hide_t);
        clearTimeout(move_t);
        this.style.display = "block"; //让自己显示
    };

    oMenuCont.onmouseout = function() {
        var _this = this;
        move_t = setTimeout(function() { //延时隐藏
            _this.style.display = "none";
        }, 100);
    };
    //点击时
    //各个楼层的title选项卡
    //先遍历最外面的一层在遍历里的
    $('.title').each(function (m) {
        $(this).find('li').each(function (i) {
          $(this).hover(
              function () {
                  $('.content').eq(m-1).find('.wrap').hide(),
                  $('.content').eq(m-1).find('.wrap').eq(i).show()
				  $(this).addClass('aaaaaa').siblings().removeClass('aaaaaa')
              },
              function (){
                // $('.content').eq(m).find('.wrap').eq(i).hide()
              }
          )
        })
    });
	
		//返回顶部
	
		var backtop=$('.jd_7');
		backtop.click(function(){
			$('body,html').animate({'scrollTop':0},500)
		})
		//zhuijia
	var onOff=true;
	$('.abclist').hover(
		function(){
			if(onOff){
				$(this).addClass('abclkk').siblings().removeClass('abclkk')
				$('.text').addClass('text_expand');
				$('.p6').eq(  $(this).index()  ).show().siblings('.p6').hide()
			}
		},
		function(){
			
			onOff=true
		});

	$('.closebtnn').click(function(){
		$('.text').removeClass('text_expand');
		$('.list li').removeClass('abclkk');
		$('.list .abclist:last').addClass('abclkk')
		onOff=false
    });	
});

	

