function getButtonClass() {
	var navigation = document.getElementById('nav');
	var elementsWithButtonClassinNav = navigation.getElementsByClassName('button');
	return elementsWithButtonClassinNav;
}

var x = getButtonClass();
console.log(x);	
var y = x.length; 
console.log(y);
