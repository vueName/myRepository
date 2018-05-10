
/*大海报人物切换*/
	window.onload=function(){
		var $btn=$("div.poster_character>.btn");
	console.log($btn);
	var $div=$(".poster_character");
	var $p=$div.children("p");
	$btn.click(e=>{
		$p.toggleClass("show");
	})
	/*页面头部固定定位的导航栏*/
		var div=document.querySelector("div.nav_fixed");
		window.onscroll=()=>{
			var scrollTop=document.body.scrollTop;
			div.style.display=
			scrollTop>100?"block":"none";
		}

	}
	
	
	
		