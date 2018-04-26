var button = document.getElementsByClassName('button');

function showText() {
  for(i = 0; i < button.length; i++) {
      alert(button[i].innerText);
  }
}

window.onload = function() {
  var timeout = setTimeout(showText, 1000);
}