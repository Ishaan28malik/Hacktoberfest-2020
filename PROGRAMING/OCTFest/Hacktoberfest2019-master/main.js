var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	
	if(filled)
		document.body.style.background="green";
	else
		document.body.style.background="blue";
	filled=!filled;
});
