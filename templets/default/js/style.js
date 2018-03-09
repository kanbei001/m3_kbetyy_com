//jquery 

//首页焦点图

TouchSlide({slideCell:"#zg_banner",titCell: ".hd ul",mainCell: ".bd ul",effect:"leftLoop",autoPlay:true,interTime:5000,autoPage:true,switchLoad: "_src"});
TouchSlide({slideCell:"#zg_banners",titCell: ".hd ul",mainCell: ".bd ul",effect:"leftLoop",autoPlay:true,interTime:10000,autoPage:true,switchLoad: "_src"});

//评测页面切换图
TouchSlide({slideCell:"#zgpc_banner",titCell: ".hd ul",mainCell: ".bd ul",effect:"leftLoop",autoPlay:true,interTime:4000,autoPage:true,switchLoad: "_src"});


//身高预测
function get_sg(fqsg,mqsg,sex){
	fqsg = parseInt(fqsg);
	mqsg = parseInt(mqsg);
	if(sex=="男"){
		var mysg = ((fqsg+mqsg)+13)/2+6;
	}
	if(sex=="女"){
		var mysg = ((fqsg+mqsg)-13)/2+6;
	}
	return mysg;
}
function shengao(){
	var a=$('#fqsg').val();
	var b=$('#mqsg').val();
	var c=$('.zgpt_2a [name=sex]:checked').val();
	var msg=get_sg(a,b,c);

	if(a==''){
		alert('父亲身高填写不正确！');
		$("#fqsg").focus();
	}
	else if(b==''){
		alert('母亲身高填写不正确！');
		$("#mqsg").focus();
	}
	else{
		//alert('预测身高是：'+msg+' cm !'+' \n如有任何身高问题，请及时咨询医生，\n增高热线：028-84319120');
		$(".sg_result").html(msg);	
	}
}

//医师名额
$(function(){
	var mydate = new Date();
	var h=mydate.getHours().toLocaleString();
	var s=$(".zgzj_me,#lxb_num");
	if(h == 9)
		s.html(9)
	else if(h == 10)
		s.html(8)
	else if(h == 11)
		s.html(7)
	else if(h == 12)
		s.html(6)
	else if(h == 13)
		s.html(5)
	else if(h == 14)
		s.html(4)
	else if(h == 15)
		s.html(3)
	else if(h == 16)
		s.html(2)
	else if(h == 17)
		s.html(2)
	else if(h == 18)
		s.html(3)
	else if(h > 18 && h<24)
		s.html(4)
	else
		s.html(10)
})

$(function(){
	//鼠标下滑 头部显示
	$(window).scroll(function(){
		var top = document.body.scrollTop | document.documentElement.scrollTop;	
		if(top>=86){
		  $(".top_tel").slideDown();
		}else{
		  $(".top_tel").slideUp();
		}
	 })
		 
	//锚链接 滑动
	$('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });
});