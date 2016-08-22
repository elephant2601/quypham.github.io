/* Slider.js */

//first image
var slideCurrent = 0;
var n;
//variable loop
var i;
//taking the elements of class "image"
var image = document.getElementsByClassName("image");
//taking the elements of class "iconImage"
var iconImage = document.getElementsByClassName("iconImage");

//next or previous when onclick launch
function prev_next(n) {
	showImage(slideCurrent += n);
}

//select the image to display
function numberClick(n) {
	showImage(slideCurrent = n);
}

//automatically forward every 5 seconds
function autoNextImage(n) {	
	slideCurrent++;
	showImage(n = slideCurrent);
}
setInterval(autoNextImage, 5000);

function showImage(n) {
	//back when the final pass
	if (n > image.length) {
		slideCurrent = 1;
	}
	if (n < 1) {
		slideCurrent = image.length;
	}
	//hidden all image
	for ( i = 0; i < image.length; i++) {
		image[i].style.display = "none";
	}
	//hidden all image-border
	for ( i = 0; i < iconImage.length; i++) {
		iconImage[i].style.border = "0px";
	}
	//show 1 image and image-border
	image[slideCurrent-1].style.display = "block";
	iconImage[slideCurrent-1].style.border = "2px solid #f44336";
}