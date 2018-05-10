/*峡谷，大乱斗装备*/
var pattern=document.getElementById("pattern");
var patterns=document.querySelectorAll("#pattern p");
var conts=document.querySelectorAll(".cont");
patterns[0].style.color="#51BCC1";
patterns[1].style.backgroundColor="#f0f0f0";
pattern.onclick=e=>{
	var p=e.target;
	for(var i=0;i<conts.length;i++){
		if(conts[i].style.zIndex!=""){
			conts[i].style.zIndex="";
		}
	}
	for(var j=0;j<patterns.length;j++){
		if(patterns[j].style.backgroundColor!=""){
			patterns[j].style.backgroundColor="";
		}
	}
	for(var j=0;j<patterns.length;j++){
		if(patterns[j].style.color!=""){
			patterns[j].style.color="";
		}
	}
	if(p.id=="gorge"){
		conts[0].style.zIndex=10;
		p.style.backgroundColor="";
		p.style.color="#51BCC1";
		p.parentNode.children[1].style.backgroundColor="#f0f0f0";
	}else if(p.id=="polar"){
		conts[1].style.zIndex=10;
		p.style.backgroundColor="";
		p.style.color="#51BCC1";
		p.parentNode.children[0].style.backgroundColor="#f0f0f0";
	}
}
