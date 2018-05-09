function getButtonsClass() {
	var navigation = document.getElementById('nav');
	var elementsWithButtonClassinNav = navigation.getElementsByClassName('button');
	return elementsWithButtonClassinNav;
}
function showElementsContent(buttons,amount){
	for(var i = 0; i < amount; i++){
		alert(buttons[i].innerText);
	}
}
var btns = getButtonsClass();
showElementsContent(btns, btns.length);