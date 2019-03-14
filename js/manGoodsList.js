$(function(){
	$(".change").click(function(){
		if($(".change").hasClass("change1")){
			$(".change").removeClass("change1");
			$(".cm_ul").css("display","block");
		}else{
			$(".change").addClass("change1");
			$(".cm_ul").css("display","none");
		}
	});

	//点击点点切换商品图片
	$(".yan_list1 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list1 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list1 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list2 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list2 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list2 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list3 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list3 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list3 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list4 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list4 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list4 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list5 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list5 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list5 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list6 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list6 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list6 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list7 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list7 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list7 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
});
//动态添加商品列表
function showList(objs){
    let htmlStr="";
    for(let i in objs){
        htmlStr+=`<li class="yan_list">
					<dl class="main click_toggle">
						<div class="opacity">
							<img src="${objs[i].goodsImg}" alt="">
							<h3>${objs[i].goodsName}</h3>
							<h3>RMB ${objs[i].goodsPrice}</h3>
						</div>
						<dd class="toggle show" index="0">
							<a href="goodsDetails.html?goodsId=${objs[i].goodsId}">
								<img src="${objs[i].goodsImg}" alt="">
								<h3>${objs[i].goodsName}</h3>
								<h3>RMB ${objs[i].goodsPrice}</h3>
							</a>
						</dd>
						<dd class="toggle" index="1">
							<a href="goodsDetails.html">
								<img src="${objs[i].goodsImg}" alt="">
								<h3>${objs[i].goodsName}</h3>
								<h3>RMB ${objs[i].goodsPrice}</h3>
							</a>
						</dd>
						<dd class="toggle" index="2">
							<a href="goodsDetails.html">
								<img src="${objs[i].goodsImg}" alt="">
								<h3>${objs[i].goodsName}</h3>
								<h3>RMB ${objs[i].goodsPrice}</h3>
							</a>
						</dd>
						<dd class="toggle" index="3">
							<a href="goodsDetails.html">
								<img src="${objs[i].goodsImg}" alt="">
								<h3>${objs[i].goodsName}</h3>
								<h3>RMB ${objs[i].goodsPrice}</h3>
							</a>
						</dd>
					</dl>
					<div class="main diandian">
						<b class="dian_toggle"></b>
						<a class="dian" index="0" href="javascript:;"></a>
						<a class="dian" index="1" href="javascript:;"></a>
						<a class="dian" index="2" href="javascript:;"></a>
						<a class="dian" index="3" href="javascript:;"></a>
						<b class="dian_toggle2"></b>
					</div>
				</li>`;
    }

    $(".goodsList").html(htmlStr);
}    

$(function(){
    $.get("getGoodsList.php",showList,"json"); 
 //    $(".yan_list a").click(function(){
	// 	var id = $(this).attr("proid");
	// 	window.localStorage.proid=id;
	// 	console.log(id);
	// 	location.href="goodsDetails.html";
	// })
   
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
				console.log("haha");
				$(".login a").css("display","none");
				$(".login span").css("display","block");
				$(".login span").html("欢迎："+temp);
			}
		})
})