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