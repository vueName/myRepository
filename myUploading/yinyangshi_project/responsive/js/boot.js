//大海报上的小按钮
$(()=>{
    var WIDTH=100;
    $("ul.slide_list").on("click","li",function(){
        $(this).addClass("slide_color")
                .siblings().removeClass("slide_color");
        var n=$(this).index();
        // console.log(n);
        $("div.slide_p").css("margin-left",-WIDTH*n+"%")
    })
})
