//start of slideshow banner js
var i = 0;
var images = [];
var time = 7500;
var counter = 0;

// image list
images[0] = "images/gardening.jpg";
images[1] = "images/shrubs.jpg";
images[2] = "images/children-playing-outside.jpg";
images[3] = "images/monarch-butterfly.jpg";

// change image
function changeImage(){
	document.getElementById("hero").style.backgroundImage = "url("+images[i]+")";

	if (i < images.length - 1){
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImage()", time);
}
// change image by clicking arrows
document.getElementById("nextBtn").addEventListener("click", function() {
	if (i < images.length - 1) {
		i++;
		document.getElementById("hero").style.backgroundImage = "url("+images[i]+")";
	} else {
		i = 0;
		document.getElementById("hero").style.backgroundImage = "url("+images[i]+")";
	}
});

document.getElementById("prevBtn").addEventListener("click", function() {
	if (i > 0) {
		i--;
		document.getElementById("hero").style.backgroundImage = "url("+images[i]+")";
	} else {
		i = images.length - 1;
		document.getElementById("hero").style.backgroundImage = "url("+images[i]+")";
	}
});

window.onload = changeImage();
