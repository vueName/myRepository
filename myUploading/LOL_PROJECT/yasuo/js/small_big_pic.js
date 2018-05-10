/*压索大小图切换*/
var big=document.getElementById("big");
var bottom=document.getElementById("bottom");
var big_imgs=document.querySelectorAll("#big img");
var small_imgs=document.querySelectorAll("#bottom img");
//默认第一张小图边框有颜色
small_imgs[0].style.borderColor="#00A483";
bottom.onclick=e=>{
	if(e.target.nodeName=="IMG"){
		var small_img=e.target;
		var i=small_img.alt;
		for(var big_img of big_imgs){
			if(big_img.style.zIndex!=""){
				big_img.style.zIndex="";
			}
		}
		for(var s_img of small_imgs){
			if(s_img.style.borderColor!="transparent"){
				s_img.style.borderColor="transparent";
			}
		}
		big_imgs[i].style.zIndex=10;
		small_img.style.borderColor="#00A483";
	}
}