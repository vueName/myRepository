//轮播图
$(()=>{
    var $ul=$(".pic_container");
    var $ulInds=$(".left_carousel>.button");
    LIWIDTH=1900,INTERVAL=500,WAIT=3000,
    moved=0,timer=null,canMove=true;
    $.get("php/pay_carousel.php")
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
        /********左右滑动箭头******/
        $("div.left_carousel>[data-move=right]").click(()=>{
            if(moved==data.length){
            moved=0;
            $ul.css("left",0);
        }
        move(1);
        });
        $("div.left_carousel>[data-move=left]").click(()=>{
            //如果是第一张
            if(moved==0){//就跳到最后一张
            moved=data.length;
            $ul.css("left",-LIWIDTH*moved);
        }
        move(-1);
        })
    });
});

/******主体内容导航******/
    $(()=>{
        $("div.content_nav>ul").on("click","li",function () {
            $(this).addClass("active")
                .siblings().removeClass("active");
            var type=$(this).html();
            getType(type);
        });
        var val=$("div.content_nav>ul>li:first-child").html();
        function getType(type) {
            $.ajax({
                type:"get",
                url:"php/pay_pro.php",
                data:{type:type},
                success:function(data){
                    //console.log(data);
                    var html="";
                    for(var p of data){
                        html+=`
                            <p class="lf clear">
                                <a href="#"><img src="${p.pic}" alt=""></a>
                                 <span class="img_det">${p.title}</span>
                            </p>
                        `;
                    }
                    $("div.content_pic").html(html);
                },
                error:function(){alert("网络故障请检查")}
            })
        }
        getType(val);
    })



