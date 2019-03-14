$(function(){
	$(".right_list li").click(function(event){ 
		if(event.currentTarget === this){
			$(".right_list li").css({"border":"1px solid #fff"});
			$(event.currentTarget).css({"border":"1px solid black"});
			let dds=$(".list_img dd");
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let imgs=$(".list_img dd:visible img");
			// console.log(imgs.length);
			for(let i=0;i<imgs.length;i++){
				imgs[i].style.zIndex=1;
				// console.log(imgs[i]);
			}
			imgs[0].style.zIndex=2;
			let uls=$(".diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[0].style.backgroundColor="gray";
			let h3s=$(".xq_right_tit h3");
			for(let i=0;i<h3s.length;i++){
				h3s[i].style.display="none";
			}
			h3s[currIndex].style.display="block";
			let ps=$(".jingpian p");
			for(let i=0;i<ps.length;i++){
				ps[i].style.display="none";
			}
			ps[currIndex].style.display="block";
			let spans=$(".rmb span");
			for(let i=0;i<spans.length;i++){
				spans[i].style.display="none";
			}
			spans[currIndex].style.display="inline-block";
			let pss=$(".xq_xx2_pian");
			for(let i=0;i<pss.length;i++){
				pss[i].style.display="none";
			}
			pss[currIndex].style.display="block";
		}
	});
	$(".dian").click(function(event){
		doudouChange($(this).attr("index"));
		// console.log($(this).attr("index"));
	});
	function doudouChange(index){
		let currIndex=index;
		// console.log(currIndex);
		// let imgs=$(".list_img dd img");
		let imgs=$(".list_img dd:visible img");
		// console.log(imgs.length);
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
			// console.log(imgs[i]);
		}
		imgs[currIndex].style.zIndex=2;
		// console.log(imgs[currIndex]);
		let uls=$(".diandian a");
		for(let i=0;i<uls.length;i++){
			uls[i].style.backgroundColor="white";
		}
		uls[currIndex].style.backgroundColor="gray";
	}
	$(".xq_show1").click(function(){
		if($(".xq_show1 h3").hasClass("xq_h3_back")){
			$(".xq_show1 h3").removeClass("xq_h3_back");
			$(".xq_xx1").css("display","none");
		}else{
			$(".xq_show1 h3").addClass("xq_h3_back");
			$(".xq_show2 h3").removeClass("xq_h3_back");
			$(".xq_show3 h3").removeClass("xq_h3_back");
			$(".xq_xx1").css("display","block");
			$(".xq_xx2").css("display","none");
			$(".xq_xx3").css("display","none");
		}
	});
	$(".xq_show2").click(function(){
		if($(".xq_show2 h3").hasClass("xq_h3_back")){
			$(".xq_show2 h3").removeClass("xq_h3_back");
			$(".xq_xx2").css("display","none");
		}else{
			$(".xq_show2 h3").addClass("xq_h3_back");
			$(".xq_show1 h3").removeClass("xq_h3_back");
			$(".xq_show3 h3").removeClass("xq_h3_back");
			$(".xq_xx2").css("display","block");
			$(".xq_xx1").css("display","none");
			$(".xq_xx3").css("display","none");
		}
	});
	$(".xq_show3").click(function(){
		if($(".xq_show3 h3").hasClass("xq_h3_back")){
			$(".xq_show3 h3").removeClass("xq_h3_back");
			$(".xq_xx3").css("display","none");
		}else{
			$(".xq_show3 h3").addClass("xq_h3_back");
			$(".xq_show1 h3").removeClass("xq_h3_back");
			$(".xq_show2 h3").removeClass("xq_h3_back");
			$(".xq_xx3").css("display","block");
			$(".xq_xx2").css("display","none");
			$(".xq_xx1").css("display","none");
		}
	});
	
	// $(".dian_left,.dian_right").click(function(){
	// 	let currIndex=$(".diandian a").attr("index");
	// 	// console.log($(this).hasClass("dian_left"));
	// 	console.log(currIndex);
	// 	if($(this).hasClass("dian_left")==true){
	// 		currIndex--;
	// 		if(currIndex<0){
	// 			currIndex=2;
	// 		}
	// 		let imgs=$(".list_img dd:visible img");
	// 		// console.log(imgs.length);
	// 		for(let i=0;i<imgs.length;i++){
	// 			imgs[i].style.zIndex=1;
	// 			// console.log(imgs[i]);
	// 		}
	// 		imgs[currIndex].style.zIndex=2;
	// 		// console.log(imgs[currIndex]);
	// 		let uls=$(".diandian a");
	// 		for(let i=0;i<uls.length;i++){
	// 			uls[i].style.backgroundColor="white";
	// 		}
	// 		uls[currIndex].style.backgroundColor="gray";
	// 	}
		

	// });


	//点击左右小箭头图片切换
	let currIndex=$(".diandian a").attr("index");
	$(".dian_left").click(function(){
		currIndex--;
		if(currIndex<0){
			currIndex=2;
		}
		let imgs=$(".list_img dd:visible img");
		// console.log(imgs.length);
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
			// console.log(imgs[i]);
		}
		imgs[currIndex].style.zIndex=2;
		// console.log(imgs[currIndex]);
		let uls=$(".diandian a");
		for(let i=0;i<uls.length;i++){
			uls[i].style.backgroundColor="white";
		}
		uls[currIndex].style.backgroundColor="gray";

	});
	$(".dian_right").click(function(){
		currIndex++;
		if(currIndex>2){
			currIndex=0;
		}
		let imgs=$(".list_img dd:visible img");
		// console.log(imgs.length);
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
			// console.log(imgs[i]);
		}
		imgs[currIndex].style.zIndex=2;
		// console.log(imgs[currIndex]);
		let uls=$(".diandian a");
		for(let i=0;i<uls.length;i++){
			uls[i].style.backgroundColor="white";
		}
		uls[currIndex].style.backgroundColor="gray";

	});

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
    console.log(id);
	function showList(objs){
		console.log(objs);
	    $(".xq_right_tit h3").html(`${objs.goodsName}`);
	    $(".list_img dd img").attr("src",`${objs.goodsImg}`);
	    $(".jingpian p").html(`${objs.goodsDesc}`);
	    $(".right_list li img").attr("src",`${objs.goodsImg}`);
	    $(".rmb span").html(`${objs.goodsPrice}`);
	    $(".xq_xx2_pian").html(`${objs.goodsDesc}`);
	}    
	$(function(){
   		$.get("getGoodsInfo.php",{"goodsId":id},showList,"json");    
       
	})

})

//获取cookie
$(function(){
	function getCookie(key){
		let str = unescape(document.cookie);	
		let arr = str.split("; ");
		for(let i in arr){
			if(arr[i].indexOf(key+"=")==0){
				return arr[i].split("=")[1];
				// alert(arr[i].split("=")[1]);
			}
		}
		
		return null;
	}	
	let temp = getCookie("userphone");
	// console.log(temp);
		$.post("loginCheckone.php",{"userphone":temp},function(data){
			// console.log(data);
			if (data==1) {
				// console.log("haha");
				$(".login a").css("display","none");
				$(".login span").css("display","block");
				$(".login span").html("欢迎："+temp);
			}
		})
})






