/* Slider.js */

var slideCurrent = 1;
showImage(slideCurrent);

function prev_next(n) {
	showImage(slideCurrent += n);
}

function numberClick(n) {
	showImage(slideCurrent = n);
}

function showImage(n) {
	var i;
	var x = document.getElementsByClassName("image");
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
	//show 1 image
	x[slideCurrent-1].style.display = "block";
}
