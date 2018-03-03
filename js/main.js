//Auto update footer copyright year
var copy = document.querySelector(".cp");
var year = new Date().getFullYear();
copy.textContent += year;

//start of slideshow banner js
var i = 0;
var images = [];
var time = 5000;

// image list
images[0] = "images/thomashafeneth-holding-flowers-unsplash.jpg";
images[1] = "images/irenedavila-watering-unsplash.jpg";
images[2] = "images/markusspiske-tomatoes-unsplash.jpg";
images[3] = "images/jellekevanooteghem-child-unsplash.jpg";

// change image
function changeImage(){
	document.slide.src = images[i];

	if (i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImage()", time);
}

window.onload = changeImage();

//fullscreen nav bar
function openNav() {
	document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mobile-nav").style.width = "0%";
}