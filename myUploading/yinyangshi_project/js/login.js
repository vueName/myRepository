$(()=>{
	$("p.login_change").on("click","span",function(){
		var n=$(this).index();
		//console.log(n);
		$("div.login_detail").children(":eq("+n+")").css("display","block")
			.siblings().css("display","none");

		$(this).css("background","#E2F2FC")
					.siblings().css("background","#89CAF4");
	})
})

/*********登录验证********/
	$(()=>{
		var reg_a=/^[a-z]{3,8}\@[a-z]{3,8}\.[a-z]{2,6}$/;//账号
		var reg_u=/^\w{6,10}$/;   //密码
		$("#account").blur(function(){
			var account=$(this).val();
			if(!reg_a.test(account)){
				$("#show_msg1").html("账号格式不正确");
			}
		});
		$("#upwd").blur(function(){
			var upwd=$(this).val();
			if(!reg_u.test(upwd)){
				$("#show_msg2").html("密码格式不正确");
			}
		});

		/**************登录*****************/
		$("#btn").click(function(){
			var account=$("#account").val();
			var upwd=$("#upwd").val();
			$.ajax({
				type:"post",
				url:"php/login.php",
				data:{account:account,upwd:upwd},
				success:function(data){
					if(data.code>0){
						if($("p.login_rem>input").prop("checked")){
                            localStorage["account"]=account;
                            localStorage["upwd"]=upwd;
						}else{
							localStorage.clear();
						}
						sessionStorage["account"]=account;
						alert(data.msg);
						location.href="index.html";
					}else{
						alert(data.msg);
					}
				},
				error:function(){alert("网络故障请检查")}
			});
		});
	});
