/*********游戏攻略导航栏*******/
    $(()=>{
        $("div.game_nav>ul.game_list").on("click","li",function(){
            $(this).addClass("active")
                .siblings().removeClass("active");
            var val=$(this).html();
            getStr(val);
        });
        function getStr(type){
            $.ajax({
                type:"get",
                url:"php/game_str.php",
                data:{type:type},
                datatype:"json",
                success:function(data){
                    console.log(data);
                    var html="";
                    for(var p of data){
                        html+=`
                            <div class="list_detail">
                                <div class="list_container">
                                    <!--左侧小type-->
                                    <div class="left_type"><a href="#">${p.type}</a></div>
                                    <!--右侧详情-->
                                    <div class="right_detail">
                                        <p class="p_title">
                                            <a href="#">${p.title}</a>
                                        </p>
                                        <p class="p_info">
                                            <a href="#">${p.detail}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                    $("div.container_detail").html(html);
                },
                error:function(){alert("网络故障请检查")}
            })
        }
        var new_val=$("div.game_nav>ul.game_list>li:first-child").html();
        getStr(new_val);
    });
    /********视频点击事件*********/
   $(()=>{
        $("div.container>a.btn_clear").click(function(e){
            e.preventDefault();
            $(this).css("opacity",0);
        });
        $("div.modal-content>span.close").click(function(){
            $("div.container>a.btn_clear").css("opacity","1");

        });
    })
	 