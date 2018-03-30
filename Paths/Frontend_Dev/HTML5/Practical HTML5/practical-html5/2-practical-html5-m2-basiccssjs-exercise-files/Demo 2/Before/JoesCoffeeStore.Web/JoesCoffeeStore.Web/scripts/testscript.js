
var testButton = document.getElementsByClassName('addtocartbutton');

for (var i=0; i < testButton.length; i++) {
	testButton[i].onclick = function () {
	    alert("Coffee added to your cart: No." + i);
	}
}