function add(){
	var swiper1 = new Swiper('.swiper-container', {
		spaceBetween: 30,
		direction : 'horizontal',
		centeredSlides: true,
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
        },
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
	});
	
};
$(function(){
    $(document).on("click",".j-img li",function(){
        // console.log($(this).index())
        let num = $(this).index()
        for(let i=0;i<$(".j-img li").length;i++){
            $(".j-img li").eq(i).removeAttr("class");
            // console.log($(".j-img li").eq(i))
            $(".c_wrapper").children().eq(i).css({
                "display":"none"
            })
        }
        $(this).addClass("li-bor");
        $(".c_wrapper").children().eq(num).css({
            "display":"block"
        })
    })
    // $(".j-img li").click(function(){
    //     console.log($(this).index())
    // })
    // console.log($(".j-img li").children())
    // console.log($(".c_wrapper").children().eq(0))
    // console.log($(".j-img li").length)

    //获取url中的id
    function getUrlParam(name){
        //构造一个含有目标参数的正则表达式对象
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        //匹配目标函数
        var r = window.location.search.substr(1).match(reg);
        // 返回参数
        if(r!=null) return unescape(r[2]);
        return null;
    }

    //接收URL中的参数goodsId
    var id = getUrlParam('goodsId');
    var jsonN="";
    var goodsName ="";
    console.log(id)
    $.ajax({
    	"type":"get",
    	"url":"php/getGoodsInfo.php",
        "dataType":"json",
        async: false,
    	"data":{
    		"goodsId":id
        },
        success:function(objs){
            jsonN=objs;
            console.log(objs)
            let htmlStr="";
            let htmlText="";
            // for(let i in objs){
                for(let j=1;j<=4;j++){
                    // console.log(j);
                    if(j==1){
                        // console.log(j-1)
                        htmlText+=`
                        <div class="detLeft .clearfix swiper-container" style="display:block">
                    <div class="cd_banner .clearfix swiper-wrapper">
                        <div class="ban-box .clearfix swiper-slide">
                            <img src="img/${objs.goodsImg}1.jpg">
                        </div>
                        <div class="ban-box .clearfix swiper-slide">
                            <img src="img/${objs.goodsImg}2.jpg">
                        </div>
                        <div class="ban-box .clearfix swiper-slide">
                            <img src="img/${objs.goodsImg}3.jpg">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev swiper-button-black"></div>
                        <!--左箭头-->
                        <div class="swiper-button-next swiper-button-black"></div>
                        <!--右箭头-->
                    </div>
                    `;
                    htmlStr+=`<li class="li-bor">
                    <img src="img/${objs.goodsImg}1.jpg">
                    </li>`;
                    }else{
                        let  htnum = eval("objs.beiyong"+j);
                        // console.log(htnum)
                        htmlText+=`
                        <div class="detLeft .clearfix swiper-container" style="display:none">
                    <div class="cd_banner .clearfix swiper-wrapper">
                        <div class="ban-box .clearfix swiper-slide">
                            <img src="img/${htnum}1.jpg">
                        </div>
                        <div class="ban-box .clearfix swiper-slide">
                            <img src="img/${htnum}2.jpg">
                        </div>
                        <div class="ban-box .clearfix swiper-slide">
                            <img src="img/${htnum}3.jpg">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev swiper-button-black"></div>
                        <!--左箭头-->
                        <div class="swiper-button-next swiper-button-black"></div>
                        <!--右箭头-->
                    </div>
                    `;
                    htmlStr+=`<li>
                    <img src="img/${htnum}1.jpg">
                    </li>`;
                    }
                }

            // }
            $(".c_wrapper").append(htmlText);
            $(".j-img").append(htmlStr);
            add()
        }
    })
    console.log(jsonN)
})