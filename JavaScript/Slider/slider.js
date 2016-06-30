/* Slider.js */

var slideCurrent = 0;
var n;
var i;
var x = document.getElementsByClassName("image");
var y = document.getElementsByClassName("iconImage");

function prev_next(n) {
	showImage(slideCurrent += n);
}

function numberClick(n) {
	showImage(slideCurrent = n);
}

function showImage(n) {
	//back when the final pass
	if (n > x.length) {
		slideCurrent = 1;
	}
	if (n < 1) {
		slideCurrent = x.length;
	}
	//hidden all image
	for ( i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	//hidden all image-border
	for ( i = 0; i < y.length; i++) {
		y[i].style.border = "0px";
	}
	//show 1 image and image-border
	x[slideCurrent-1].style.display = "block";
	y[slideCurrent-1].style.border = "2px solid #f44336";

}

function autoNextImage() {
	slideCurrent++;
	//back when the final pass
	if (slideCurrent > x.length) {
		slideCurrent = 1;
	}
	if (slideCurrent < 1) {
		slideCurrent = x.length;
	}
	//hidden all image
	for ( i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	//hidden all image-border
	for ( i = 0; i < y.length; i++) {
		y[i].style.border = "0px";
	}
	//show 1 image and image-border
	x[slideCurrent-1].style.display = "block";
	y[slideCurrent-1].style.border = "2px solid #f44336";
}
setInterval(autoNextImage, 5000);
