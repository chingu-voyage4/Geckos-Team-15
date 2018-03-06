//Auto update footer copyright year
var copy = document.querySelector(".cp");
var year = new Date().getFullYear();
copy.textContent += year;

//start of slideshow banner js
var i = 0;
var images = [];
var time = 10000;

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
// change image by clicking arrows
document.getElementById("nextBtn").addEventListener("click", function() {
	if (i < images.length - 1) {
		i++;
		document.slide.src = images[i];
	} else {
		i = 0;
		document.slide.src = images[i];
	}
});

document.getElementById("prevBtn").addEventListener("click", function() {
	if (i > 0) {
		i--;
		document.slide.src = images[i];
	} else {
		i = images.length - 1;
		document.slide.src = images[i];
	}
});

window.onload = changeImage();

//fullscreen nav bar
function openNav() {
	document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mobile-nav").style.width = "0%";
}