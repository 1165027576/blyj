
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
		}
	});
});





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
	console.log(temp)
		if(temp!=null){
			console.log("haha");
				$(".login a").css("display","none");
				$(".login span").css("display","block");
				$(".login span").html("欢迎："+temp);
		}
	
})
