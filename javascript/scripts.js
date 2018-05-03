function getButtonClass() {
	var navigation = document.getElementById('nav');
	var elementsWithButtonClassinNav = navigation.getElementsByClassName('button');
	return elementsWithButtonClassinNav;
}

var x = getButtonClass();
var y = x.length; 
console.log(y);

function showElementsContent(a,b){
	for(var i=0; i<y; i++){
		alert(x[i].innerText);
	}
}

showElementsContent(x,y); 