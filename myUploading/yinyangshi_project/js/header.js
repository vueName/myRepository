/******ajax动态引入头部*******/
	$(()=>{
		$.ajax({
			type:"get",
			url:"header.html",
			datatype:"html"
		}).then(data=>{
			//console.log(data);
			$("#header").html(data);
		/*大海报人物切换*/
			var $btn=$("div.poster_character>.btn");
			//console.log($btn);
			var $div=$(".poster_character");
			var $p=$div.children("p");
			$btn.click(e=>{
				$p.toggleClass("show");
			})
		/*页面头部固定定位的导航栏*/
			var $div_nav=$("div.nav_fixed");
			$(window).scroll(function(){
				var scrollTop=$(window).scrollTop();
				if(scrollTop>300)
					$div_nav.css("display","block");
				else
					$div_nav.css("display","none");
			});
			//判断用户是否登录
           
				//判断sessionStorage是否有数据
				var account=sessionStorage["account"];
            if(account){
            	var account=account.split("@")[0];
                $("li.reg_log_one").html(`
              欢迎回来: ${account}  <a href="#"class="a_btn_reg"> 注销 </a>
            `);
                $("li.reg_log_one").css("width",200);
                $("li.reg_log_two").css("display","none");
					 $("a.a_btn_reg").click(function(e){
						e.preventDefault();
						sessionStorage.clear();
						$("li.reg_log_one").html(`
							<a href="register.html">注册</a>
						 `);
						 $("li.reg_log_one").css("width","32");
						 $("li.reg_log_two").css("display","block");

					 })
            }
				//判断localStorage是否有数据
				var account2=localStorage["account"];
				if(account2){
						var account2=account2.split("@")[0];
						$("li.reg_log_one").html(`
              欢迎回来: ${account2}  <a href="#"class="a_btn_reg"> 注销 </a>
            `);
                $("li.reg_log_one").css("width",200);
                $("li.reg_log_two").css("display","none");
					 $("a.a_btn_reg").click(function(e){
						e.preventDefault();
						localStorage.clear();
						//localStorage["num"]=0;
						$("li.reg_log_one").html(`
							<a href="register.html">注册</a>
						 `);
						 $("li.reg_log_one").css("width","32");
						 $("li.reg_log_two").css("display","block");

					 })
					}
		});
	});
	
	
		