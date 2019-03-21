function add(jia) {
    //计算逻辑
    let numjia = $(jia).parent().find(".car-shu").val()
    // console.log(jia)
    numjia++
    $(jia).parent().find(".car-shu").val(numjia)
    jisuan(jia)

    //数量ajax
    let rems = $(jia).parent().parent().parent().find(".goid").html()
    $.ajax({
        "type":"get",
        "url":"php/updateGoodsCount.php",
        "data":{"vipName":userphone,
                "goodsId":rems,
                "goodsCount":numjia
            },
        success: function (data) {
                // alert(data)
            }
    })
}

function jianss(jian) {
    //计算逻辑
    let numjia = $(jian).parent().find(".car-shu").val()
    if (numjia > 1) {
        numjia--
        $(jian).parent().find(".car-shu").val(numjia)
    }
    jisuan(jian)
    //数量ajax
    let rems = $(jian).parent().parent().parent().find(".goid").html()
    $.ajax({
        "type":"get",
        "url":"php/updateGoodsCount.php",
        "data":{"vipName":userphone,
                "goodsId":rems,
                "goodsCount":numjia
            },
        success: function (data) {
            // alert(data)
            }
    })
    // console.log(1);
};

function jisuan(zhe) {
    let danjia = $(zhe).parent().parent().parent().find(".danjia").html()
    let numjia = $(zhe).parent().find(".car-shu").val()
    let dzong = numjia * danjia
    $(zhe).parent().parent().parent().find(".zongjia").html(dzong)

    zonjia()

};

function zonjia() {
    let zon = 0;
    for (let i = 0; i < $(".zongjia").length; i++) {
        let j = $(".zongjia").eq(i).parent().parent().parent().find(".dui a")
        // console.log(j.attr("class"))
        if (j.attr("class") == "ng-dui") {
            zon = zon + parseInt($(".zongjia").eq(i).html())
        }
        // zon=zon+parseInt($(".zongjia").eq(i).html())
    }
    $(".car-zj-num").html(zon)
}

function quanxuan() {
    let ddd = 1;
    for (let i = 0; i < $(".dui").length; i++) {
        if ($(".dui").children().eq(i).attr("class") != "ng-dui") {
            ddd = 0
            break;
        } else {
            ddd = 1
        }
    }
    if (ddd != 1) {
        $(".quan-dui").removeClass("ng-dui")
    } else {
        $(".quan-dui").addClass("ng-dui")
    }
}


let userphone = getCookie("userphone")
//生成ajax
$(function () {
    $.ajax({
        "type": "get",
        "url": "php/getShoppingCart.php",
        "dataType": "json",
        async: false,
        "data": {
            "vipName": userphone
        },
        success: function (objs) {
            dtsc(objs)
            
        }

    })
    //删除AJAX
    $(document).on("click",".shan",function(){
        
        let rem = $(this).parent().parent().find(".goid").html()
        //  console.log($(this).parent().parent().find(".goid").html())
        console.log(rem)
        $.ajax({
            "type":"get",
            "url":"php/deleteGoods.php",
            "data":{"vipName":userphone,
                    "goodsId":rem
                },
            async: false,
            success: function (data) {
                
                }
        })
        $(this).parentsUntil($(".c-c")).remove()
        zonjia()
    })



    //计算逻辑
    $(document).on("click", ".jia", function () {
        jia = this;
        add(jia)

    });
    $(document).on("click", ".jian", function () {
        jian = this;
        jianss(jian)
    });

    // $(document).on("click",".quan-dui",function(){
    //     $(".quan-dui").addClass("ng-dui")
    //     $(".dui a").addClass("ng-dui");
    //     quanxuan()
    // })

    // $(document).on("click",".dui a",function(){

    //     if($(this).attr("class") == "ng-dui"){
    //         $(this).removeAttr("class")
    //         quanxuan()
    //         zonjia()
    //     }else{
    //         $(this).addClass("ng-dui")
    //         quanxuan()
    //         zonjia()
    //     }
    // })
    //单
    $(".dui a").toggle(function () {
            $(this).removeAttr("class")
            quanxuan()
            zonjia()
        },
        function () {
            $(this).addClass("ng-dui")
            quanxuan()
            zonjia()
        })
    //全
    $(".quan-dui").toggle(function () {
            $(".quan-dui").removeClass("ng-dui")
            $(".dui a").removeClass("ng-dui");
            zonjia()
        },
        function () {
            $(".quan-dui").addClass("ng-dui")
            $(".dui a").addClass("ng-dui");
            zonjia()
        })

    //输入框
    $(document).on("input propertychange",".car-shu",function(){
        let th = this
        jisuan(th); 
    }) 
    quanxuan()
    jisuan()

    // console.log($(".dui").children().eq(0).attr("class"))
})


//动态生成列表

function dtsc(objs) {
    $(".car-num").html(objs.length)
    let htmlStr = "";
    for (let i in objs) {
        let objnum = objs[i].goodsPrice*objs[i].goodsCount
        htmlStr += `
        <div class="car-con-list">
        <div class="imgbox">
            <img src="img/${objs[i].goodsImg}1.jpg">
        </div>
        <div class="textbox">
            <h3>${objs[i].goodsName}</h3>
            <p class="ng-binding">镜框 镜框材质|金属</p>
            <p class="ng-binding">镜片 蓝灰色全色片高清非偏光镜片</p>
            <span class="shan">删除</span>
        </div>
        <div class="dui">
            <a href="javascript:;" class="ng-dui"></a>
        </div>
        <div class="car-rmb">
            <span class="zj">总价</span>
            <span class="z-rmb">
                RMB
                <span class="zongjia">${objnum}</span>
            </span>
        </div>
        <div class="car-rmb">
            <span class="zj">单价</span>
            <span class="z-rmb">
                RMB
                <span class="danjia">${objs[i].goodsPrice}</span>
            </span>
        </div>
        <div class="car-num">
            <span>数量</span>
            <div>
                <a class="jian"></a>
                <input type="num" class="car-shu" value="${objs[i].goodsCount}">
                <a class="jia">+</a>
            </div>
        </div>
        <div class="goid" style="display:none">${objs[i].goodsId}</div>
    </div> 
        `;
    }
    $(".c-c").append(htmlStr)
    console.log(objs[0].goodsPrice)
    console.log(objs[0])
}