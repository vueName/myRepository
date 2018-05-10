$(()=>{
//	var account=$("#account").val();
//	var upwd=$("#upwd").val();
//	var cpwd=$("#cpwd").val();
//	var phone=$("#phone").val();

//	var code1=$("#code1").val();
//	var code2=$("#code2").val();
	

	var a=true;
	var u=true;
	var c=true;
	var p=true;
	var reg_a=/^[a-z]{3,8}\@[a-z]{3,8}\.[a-z]{2,6}$/;//账号
	var reg_u=/^\w{6,10}$/;   //密码
	var reg_p=/^1[34578]\d{9}$/;//手机号
	//验证用户名重复
	$("#account").blur(function(){
		var account=$("#account").val();
		//console.log(100);
		if(!reg_a.test(account)){
			$("#show_acc").html("账号格式不正确")
                			.css("color","red");
			a=false;
		}else{
			$.ajax({
				type:"get",
				url:"php/yz.php",
				data:{account:account},
				success:function(data){
					if(data.code>0){
						$("#show_acc").html(data.msg)
                       				 .css("color","green");
						a=true;
					}else{
						$("#show_acc").html(data.msg)
                           			 .css("color","red");
						a=false;
					}
				},
				error:function(){alert("网络故障请检查")}
			})
		}
	})
	//验证密码格式
	$("#upwd").blur(function(){
		var upwd=$("#upwd").val();
		if(!reg_u.test(upwd)){
			$("#show_upwd").html("密码格式不正确")
							.css("color","red");
			u=false;
		}else{
			$("#show_upwd").html("通过")
               				 .css("color","green");
			u=true;
		}
	})
	//重复密码
	$("#cpwd").blur(function(){
		var cpwd=$("#cpwd").val();
		if(cpwd!=$("#upwd").val()){
			$("#show_cpwd").html("两次密码输入不一致")
                			.css("color","red");
			c=false;
		}else{
			$("#show_cpwd").html("通过")
               				 .css("color","green");
			c=true;
		}
	})
	//验证手机号
	$("#phone").blur(function(){
		var phone=$("#phone").val();
		if(!reg_p.test(phone)){
			$("#show_phone").html("手机号格式不正确")
                			.css("color","red");
			p=false;
		}else{
			$("#show_phone").html("通过")
                			.css("color","green");
			p=true;
		}
	})

	/****验证码*****/
	/***刷新**/
	$("#yzm1").attr("src","php/03_code_gg.php");
	$("#yzm2").attr("src","php/04_code_gg.php");

	$("#yzm1").click(function(){
		//console.log($(this));
		//console.log(this);
		$(this).attr("src","php/03_code_gg.php");
	});
	$("#yzm2").click(function(){
		$(this).attr("src","php/04_code_gg.php");
	});

	/*****注册******/
	var agr;
	$("#agr_check").click(function(){
		if($(this).is(":checked")){
			 $("#btn>a.register_btn").css("opacity",1);
			 agr=true;
			 btn_reg();
		}else{
			$("#btn>a.register_btn").css("opacity",0.5);
			agr=false;
		}
	});
	//console.log($("#agr_check").prop("checked"));

	function btn_reg(){
		$("#btn>a.register_btn").click(function(){
			var account=$("#account").val();
			var upwd=$("#upwd").val();
			var phone=$("#phone").val();
			var code1=$("#code1").val();
			var code2=$("#code2").val();
			if(agr){
				if(a&&u&&c&&p){
					$.ajax({
						type:"post",
						url:"php/register.php",
						data:{
							account:account,
							upwd:upwd,
							phone:phone,
							yzm1:code1,
							yzm2:code2
						},
						success:function(data){
								console.log(data);
								if(data.code>0){
									alert(data.msg);
									location.href="login.html";
								}else{
									alert(data.msg);
								}		
							},
						error:function(){alert("网络故障请检查")}
					})
				}else{
					alert("注册失败");
				}
			}
		});
	}
	
		
	
	});