var divs=document.querySelectorAll("#list_container div");
//console.log(divs);
var p=document.querySelector("div.select>p.left");
//console.log(p);
p.onclick=e=>{
	var input;
	for(var i=0;i<divs.length;i++){
		if(divs[i].style.display!="none")
			divs[i].style.display="none";
	}
	if(e.target.value!=""){
		input=e.target;
		var j=parseInt(input.value);
		divs[j].style.display="block";
	}	
}