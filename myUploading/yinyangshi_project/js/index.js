
	
/*******主页内容**********/
	/*日历侧边下载*/
	$(()=>{
		var $div=$("div.side_code");
		var $btn=$("div.side_code>p.btn");
		$btn.click(e=>{
			var width=parseInt($div.css("width"));
			console.log(width);
			if(width==33){
				$div.css("width",500);
				
				console.log(width);
			}else{
				$div.css("width",33);
				}
		})
	});
		
	/*最新公告、新闻、媒体*/
		/**公告栏中导航条可移动按钮框**/
		$(()=>{
			var $p=$("p.news_nav");
			var $btn=$("div.slide_btn");
			var $cont=$("div.content_container");
			$p.mouseover(e=>{
				var $a=$(e.target);
				if($a.is("a")){
					//console.log($a);
					var i=$a.index();
					$btn.css("margin-left",102*i);
					$cont.css("margin-left",-i*520);
				}
			})
		});	

		/*********轮播图导入**********/
		$(()=>{
			var $ul=$(".pic_container");
			var $ulInds=$(".left_carousel>.button");
			LIWIDTH=360,INTERVAL=500,WAIT=3000,
			 moved=0,timer=null,canMove=true;
			$.get("php/index_carousel.php")
			.then(data=>{
				//console.log(data);
				var html="";
				for(var p of data){
					html+=`
						<li class="lf">
							<a href="#"><img src="${p.pic}" alt=""></a>
						</li>	
					`;
				}
				html+=`
					<li class="lf">
						<a href="#"><img src="${data[0].pic}" alt=""></a>
					</li>	
				`;
				$ul.html(html);
				$ul.css("width",(data.length+1)*LIWIDTH);
				$ulInds.html("<li></li>".repeat(data.length))
							.children().first().addClass("hover");
				function autoMove(){
					if(canMove){
						if(moved==data.length){
							moved=0;
							$ul.css("left",0);
						}
						timer=setTimeout(()=>{
							move(1,autoMove);
						},WAIT)
					}
				}
				autoMove();
				$("div.left_carousel").hover(
					()=>{
						canMove=false;
						clearTimeout(timer);
						timer=null;
					},
					()=>{
						canMove=true;
						autoMove();
					}
				);
				$ulInds.on("click","li",e=>{
					moved=$(e.target).index();
					$ul.stop(true).animate({
						left:-LIWIDTH*moved
					},INTERVAL);
					$ulInds.children(":eq("+moved+")")
								.addClass("hover")
								.siblings().removeClass("hover");
				})
				function move(dir,callback){
					moved+=dir;
					if(moved<data.length){
						$ulInds.children(":eq("+moved+")")
								.addClass("hover")
								.siblings().removeClass("hover");
					}else{
						$ulInds.children(":eq(0)")
								.addClass("hover")
								.siblings().removeClass("hover");
					}
					$ul.stop(true).animate({
						left:-LIWIDTH*moved
					},INTERVAL,callback);
				};

			});
	
		});
		
	
	
	

	/***式神导航栏及下方详情栏***/
		$(()=>{
			var $span=$("span.intro_btn");
			var $div=$("div.slide_box");
			var $container_char=$(".bottom_character>.container_char");
			$span.click(e=>{
				var $img=$(e.target);
				if($img.is("img")){
					var i=$img.attr("alt");
					//console.log(i);
					$div.css("margin-left",180*i);
					/******式神人物头像栏和主角详情的切换******/
					$container_char.children(":eq("+i+")").addClass("show_details")
									.siblings().removeClass("show_details");
					$container_char.children(":eq("+i+")").css("zIndex",3)
										.siblings().css("zIndex",1);
					//console.log($container_char.children());
					//console.log($container_char.children(":eq("+i+")"));
				}
			})
		});
		
		/**********************左侧式神头像栏的事件***********************/
			$(()=>{
				
				/*******函数******/
				function getRoles(pno,pageSize,type){
					$.ajax({
						type:"get",
						url:"php/head_list.php",
						data:{pno:pno,pageSize:pageSize,type:type}
					}).then(data=>{
						console.log(data);
						var datas=data.info;
						var pno=data.pno;
						console.log(pno);
						var pageCount=data.pageCount;
						var html="";
						for(var p of datas){
							html+=`
								<li class="lf">
									<a href="#">
										<img src="${p.pic}">
										<span>${p.uname}</span>
									</a>
								</li>	
							`;
						}
						//console.log(pageCount);
						//console.log(pno);
						$("ul.head_list").html(html);
                        $("div.head_char>ul.head_list>li>a").hover(function(){
                                $(this).children("img").css({
                                    transform:"rotateY(-180deg)",
                                    opacity:0
                                });
                                var timer=setInterval(function(){
                                    $(this).children("span").css("zIndex",2);
                                    console.log(1000);
                                    clearInterval(timer);
                                },600);

                            },
                            function(){
                                $(this).children("img").css({
                                    transform:"rotateY(0deg)",
                                    opacity:1
                                });
                                $(this).children("span").css("zIndex",-2);
                            });

						var html="";
						html+=`<li class="lf page"data-page="${pageCount}">上一页</li>`;

						if(pno-2>0){
							html+=`<li class="lf"data-page="${pageCount}">${pno-2}</li>`;
						}
						if(pno-1>0){
							html+=`<li class="lf"data-page="${pageCount}">${pno-1}</li>`;
						}

							html+=`<li class="lf active_color"data-page="${pageCount}">${pno}</li>`;

						if(pno+1<=pageCount){
							html+=`<li class="lf"data-page="${pageCount}">${pno+1}</li>`;
						}
						if(pno+2<=pageCount){
							html+=`<li class="lf"data-page="${pageCount}">${pno+2}</li>`;
						}
						html+=`<li class="lf page"data-page="${pageCount}">下一页</li>`;
						$("ul.head_list_btn").html(html);

					})
				}
				getRoles();
				var type="";
				$("div.nav_character>ul.nav_char").on("click","li",function(){
					$("ul.head_list_btn").css("display","block");
					$(this).css("color","#CEA441")
							 .siblings().css("color","#000");
					type=$(this).html();
					getRoles(1,12,type);
				});
				/*********底部小按钮********/
					var currentPage=1;
					$("ul.head_list_btn").on("click","li:not('li.page')",function(){
						currentPage=parseInt($(this).html());
						//console.log(currentPage);
						getRoles(currentPage,12,type);
					});
					
					$("ul.head_list_btn").on("click","li.page",function(){
						var pageCount=$(this).data("page");
						var val=$(this).html();
						//console.log(pageCount);
						if(val=="上一页"){
							if(currentPage>1){
								currentPage--;
							}else{
								currentPage=1;
							}
						}else if(val=="下一页"){
							if(currentPage<pageCount){
								currentPage++;
							}else{
								currentPage=pageCount;
							}
						}
						getRoles(currentPage,12,type);
					})

				/**********************/



				/********侧边搜索框*********/
					$("div.nav_character>div.input_border>input").keyup(function(e){
						if(e.keyCode==13){
							var uname=$("div.nav_character>div.input_border>input").val();
							//console.log(uname);
							$.ajax({
								type:"get",
								url:"php/index_input.php",
								data:{uname:uname}
							}).then(data=>{
								//console.log(data);
								var html="";
								for(var p of data){
									html+=`
										<li class="lf">
											<a href="#">
												<img src="${p.pic}"title="">
												<span>${p.uname}</span>
											</a>
										</li>	
									`;
								}
								//console.log(pageCount);
								//console.log(pno);
								$("ul.head_list").html(html);
								$("ul.head_list_btn").css("display","none");
                                $("div.head_char>ul.head_list>li>a").hover(function(){
                                        $(this).children("img").css({
                                            transform:"rotateY(-180deg)",
                                            opacity:0
                                        });
                                        var timer=setInterval(function(){
                                            $(this).children("span").css("zIndex",2);
                                            console.log(1000);
                                            clearInterval(timer);
                                        },600);

                                    },
                                    function(){
                                        $(this).children("img").css({
                                            transform:"rotateY(0deg)",
                                            opacity:1
                                        });
                                        $(this).children("span").css("zIndex",-2);
                                    });
							})
						}
					})
					
			});

			
	



































	/***********式神人物头像栏和主角详情的切换*********/
		/*****主角栏左侧列表和右侧详情简介的对应*****/
			$(()=>{
				var $ul=$(".left_list_role");
				var $move=$(".move_container");
				var moveTop=340;
				$ul.on("click","li",e=>{
					var $li=$(e.target);
					var i=$li.index();
					$li.addClass("show_white")
						.siblings().removeClass("show_white");
					$move.css("marginTop",-i*moveTop);
				})
			})

	/*********第二部分左侧小海报*********/
		/****小按钮及上方小海报****/
			$(()=>{
				var $p_btn=$(".question_btn");
				var $div_container=$(".question_container");
				var moveWidth=371;
				$p_btn.on("click","span",e=>{
					$span=$(e.target);
					var i=$span.index();
					/**更改背景色**/
					$span.addClass("show_black")
							.siblings().removeClass("show_black");
					/***更换上方小海报**/
					$div_container.css("margin-left",-i*moveWidth)
				})
			})

		/*******小海报下方的文字移动*******/
			$(()=>{
			var $a=$(".question_list>li>a");
				$a.mouseenter(e=>{
					$(e.target).css("top",-10);
			})
				.mouseleave(e=>{
					$(e.target).css("top",0);
					})
			})
	/*********第二部分右侧攻略***************/
		/*****上方小导航条*****/
			$(()=>{
				var $cont_nav=$(".content_two_right>.content_nav");
				var $slide_nav=$(".slide_nav");
				var moveWidth=90;
				var $container_strate=$("div.container_strate");
				var moveLeft=880;
				$cont_nav.on("mouseenter","span>img",e=>{
					var $img=$(e.target);
					var i=$img.attr("alt");
					//console.log(i);
					//只对非小圆点图片触发事件
					if(i!=0){
						$slide_nav.css("opacity",0.8);
						$slide_nav.css("left",(i-2)*moveWidth+212);
						
					}else{
						$slide_nav.css("opacity",0);
						$slide_nav.css("left",0);	
					}
					//导航条与下方内容详情匹配
					$container_strate.css("marginLeft",-i/2*moveLeft);
					
				})
			})

	/*******************第三部分**********************/
		/*********顶部导航条********/
			$(()=>{
				var $ul=$("ul.content_three_nav");
				$ul.on("mouseenter","li.target",function(){
					//console.log($(this));
					//console.log($(this).find("span"));
					$(this).siblings(".target").find("span").css("marginTop",50);
					$(this).siblings(".target").find("img").css("bottom",-60);
					$(this).find("span").css("marginTop",40);
					$(this).find("img").css("bottom",-2);
					var spec=$(this).find("span").html();
					//console.log(spec);
					getSpec(spec);
				});

				
			/**************数据库动态加载人物********************/
			
				function getSpec(spec){
					$.ajax({
						type:"get",
						url:"php/index_fan.php",
						data:{spec:spec}
					}).then(data=>{
						//console.log(data);
						var html="";
						for(var p of data){
							html+=`
								<div>
									<a href="#"><img src="${p.pic}"
									title="${p.title}"></a>
									<p>${p.title}</p>
								</div>	
							`;
						}
						$("div.action_container_middle").html(html);
					})
				}
				 getSpec();
			})

		


	/*******************第五部分***********************/
		
	/*******************第六部分**********************/
		$(()=>{
			var map = new BMap.Map("content_six_map");          // 创建地图实例
			var point = new BMap.Point(113.379555,23.132);  // 创建点坐标
			map.centerAndZoom(point, 19);                 // 初始化地图，设置中心点坐标和地图级别
			map.addControl(new BMap.NavigationControl());
			map.addControl(new BMap.ScaleControl());
			map.addControl(new BMap.OverviewMapControl());
			//添加地图类型控制
			 map.addControl(new BMap.MapTypeControl());
		//  map.setCurrentCity("武汉"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

			//添加地图上覆盖物
			 var mk=new BMap.Marker(point);
			mk.setAnimation(BMAP_ANIMATION_BOUNCE);
			map.addOverlay(mk);
		})

















