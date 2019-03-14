$(function(){
	$(".gou a").toggle(
		function(){
			$(".gou a").css({"background-image":"url(img/dui1.png)","background-size":"100%"});
			
		},
		function(){
			$(".gou a").css({"background-image":"","background-size":""});
		}
	);
	// 点击登录提示
	// $(".login_sub1").click(function(){
	// 	$(".push_zhang").css("visibility","visible");
	// });
	// $(".btn").click(function(){
	// 	$(".push_zhang").css("visibility","hidden");
	// });

	$(".login_sub1").click(function(){
		if($(".login_input_zhang").val()==""){
			$(".push_zhang").css("visibility","visible");
		}else if($(".login_input_mi").val()==""){
			$(".push_mi").css("visibility","visible");
		}
	});
	$(".btn").click(function(){
		$(".login_alert").css("visibility","hidden");
	});
	//鼠标移入注册按钮变色
	$(".register_alert").mouseover(function(){
		$(".register_alert").css({"background-color":"#000","color":"white"});
	});
	$(".register_alert").mouseout(function(){
		$(".register_alert").css({"background-color":"","color":"#333"});
	});
	//点击注册提示
	$(".register_alert").click(function(){
		$(".register").css("display","block");
	});
	$(".close").click(function(){
		$(".register").css("display","none");
		$(".mi_input").val("");
		$(".reg_phone_word,.reg_passw_word,.reg_passw2_word").html("");
	});
	//点击忘记密码提示
	$(".forgetM").click(function(){
		$(".forgetM_alert").css("display","block");
	});
	$(".close").click(function(){
		$(".forgetM_alert").css("display","none");
	});

	//登录后端验证
	var usernum = 1;
	var passnum = 1;
	$(".login_input_zhang").blur(function(){
		let n = $(".login_input_zhang").val();
		if(n==""){
			$(".push_zhang").css("visibility","visible");
			usernum = 0;
		}else{
			usernum = 1;
		}
	})
	
	$(".login_input_mi").blur(function(){
		let n = $(".login_input_mi").val();
		if(n==""){
			$(".push_mi").css("visibility","visible");
			passnum = 0;
		}else{
			passnum = 1;
		}
	})
	
	$(".login_sub1").click(function(){
		if(usernum == 1 && passnum == 1 ){
			$.ajax({
				"type":"POST",
				"url":"loginCheck.php",
				"data":{"userphone":$(".login_input_zhang").val(),
						"userpass":$(".login_input_mi").val()},
				success: function (data) { //返回json结果
					if(data=="1"){
					//保存cookie
						if($(".gou a").attr("background-image","url(img/dui1.png)")){
							var d = new Date();
							d.setDate(d.getDate()+7);
							document.cookie = "userphone="+$(".login_input_zhang").val()+";expires="+d.toGMTString();
							document.cookie = "userpass="+$(".login_input_mi").val()+";expires="+d.toGMTString();

						}
						window.location.href="index.html"
						alert("登录成功");
					}else{
						alert("用户名或密码错误");
						$(".login_input_zhang").val("")
						$(".login_input_mi").val("")
				   	}
				}
			})
			
		}else{
			alert("信息输入错误，请重新输入");
		}
	})
})
//注册后端验证
$(function(){
	let usernum = 0;
	let psw = 0;
	let pswes = 0;
	//验证用户名是否存在
	$(".reg_phone").blur(function(){
		let reg = /^1\d{10}$/;
		let v = $(".reg_phone").val();
		if(!reg.test(v)){
			// alert("请输入正确的手机号");
			$(".reg_phone_word").html("*请输入正确的手机号");
			usernum = 0;
		}else{
				$.get(
					"checkUser.php",
					{
						"userphone":$(".reg_phone").val()	
					},
					function(data){
						if(data=="1"){
							// alert("该手机号可以使用");
							$(".reg_phone_word").html("*该手机号可以使用");
							usernum = 1;
						}else{
							// alert("该手机号已注册");
							$(".reg_phone_word").html("*该手机号已注册");
							usernum = 0;
							
						}
					}				
				);
		}
	});
	$(".reg_passw").blur(function(){
		let reg = /^[a-z0-9_-]{6,18}$/;
		let v = $(".reg_passw").val();
		$(".reg_phone_word").html("");
		if(!reg.test(v)){
			// alert("密码不符合规定");
			$(".reg_passw_word").html("*密码不符合规定");
			psw = 0;
		}else{
			$(".reg_passw_word").html("");
			psw = 1;
		}
	})
	$(".reg_passw2").blur(function(){
		let v = $(".reg_passw").val();
		let s = $(".reg_passw2").val();
		
		if(v==""){
			// alert("密码不能为空");
			$(".reg_passw2_word").html("*密码不能为空");
			pswes = 0;
			return;
		}else if(psw==0){
			// alert("密码格式不对");
			$(".reg_passw2_word").html("*密码格式不对");
		}else if(v!=s){
			// alert("两次输入密码不一致");
			$(".reg_passw2_word").html("*两次输入密码不一致");
			pswes = 0;
		}else if(v==s){
			pswes = 1;
			$(".reg_passw2_word").html("");
		}
	})
	$(".mi_a").click(function(){
		if(usernum == 1 && psw == 1 && pswes == 1){
			$.ajax({
				"type":"POST",
				"url":"regSave.php",
				"data":{"userphone":$(".reg_phone").val(),
				"userpass":$(".reg_passw").val()},
				success: function (data) { //返回json结果
				alert(data);
				}
			})
			window.location.href="login.html"
		}else if($(".reg_passw").val()==""){
			alert("密码不能为空");
		}
		
	})
});