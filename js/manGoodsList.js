$(function(){
	var swiper1 = new Swiper('.swiper-container1', {
		spaceBetween: 30,
		direction : 'horizontal',
		centeredSlides: true,
		autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		},
		pagination: {
		el: '.swiper-p1',
		clickable: true,
		}
	});
	var swiper2 = new Swiper('.swiper-container2', {
		effect : 'fade',
		speed:800,
		// loop : true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var swiper3 = new Swiper('.swiper-container3', {
		effect : 'fade',
		spaceBetween: 50,
		speed:500,
		centeredSlides: true,
		// loop : true,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		pagination: {
			el: '.swiper-p3',
			clickable: true,
		},
		// disableOnInteraction: false,
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true,//修改swiper的父元素时，自动初始化swiper
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// }
	});
});
//动态添加商品列表
function showList(objs){
	console.log(objs)
    let htmlStr="";
    for(let i in objs){
        htmlStr+=`<div class="yanList swiper-container swiper-container3">
		<div class="swiper-wrapper yanl">
			<div class="click_toggle swiper-slide">
				<div class="opacity ">
					<a href="goodsDetails.html?goodsId=${objs[i].goodsId}">
						<img src="img/${objs[i].goodsImg}1.jpg" alt="">
						<h3>BL3019 C10</h3>
						<h3>RMB ${objs[i].goodsPrice}</h3>
					</a>
				</div>
			</div>
			<div class="click_toggle swiper-slide">
				<div class="opacity ">
					<a href="goodsDetails.html?goodsId=${objs[i].goodsId}">
						<img src="img/${objs[i].beiyong2}1.jpg" alt="">
						<h3>BL3019 C10</h3>
						<h3>RMB ${objs[i].goodsPrice}</h3>
					</a>
				</div>
			</div>
			<div class="click_toggle swiper-slide">
				<div class="opacity ">
					<a href="goodsDetails.html?goodsId=${objs[i].goodsId}">
						<img src="img/${objs[i].beiyong3}1.jpg" alt="">
						<h3>BL3019 C10</h3>
						<h3>RMB ${objs[i].goodsPrice}</h3>
					</a>
				</div>
			</div>
			<div class="swiper-pagination swiper-p3"></div>
		</div>
	</div>`;
    }

	$(".con-wrapper").append(htmlStr);
	var swiper3 = new Swiper('.swiper-container3', {
		effect : 'fade',
		spaceBetween: 50,
		speed:500,
		centeredSlides: true,
		// loop : true,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		pagination: {
			el: '.swiper-p3',
			clickable: true,
		},
		// disableOnInteraction: false,
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true,//修改swiper的父元素时，自动初始化swiper
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// }
	});
}    

$(function(){
	$.get("php/getGoodsList.php",showList,"json"); 
	// for(let j=0;j<3;j++){
	// 	let  htnum = "objs[i].beiyong"+j;
	// console.log(htnum);
	// }
	
 	//  $(".yan_list a").click(function(){
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
	/*let temp = getCookie("userphone");
	// console.log(temp);
		$.post("loginCheckone.php",{"userphone":temp},function(data){
			// console.log(data);
			if (data==1) {
				console.log("haha");
				$(".login a").css("display","none");
				$(".login span").css("display","block");
				$(".login span").html("欢迎："+temp);
			}
		})*/
})