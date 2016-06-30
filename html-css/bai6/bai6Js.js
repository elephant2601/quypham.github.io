/* Javascript
hide or show the content when onclick lauch
image change when onlick lauch
variable i corresponds to the order content
*/
function showHideinfo(i) {
	var display = document.getElementById("thehouse" + i).style.display;
	//the content hidden when click
	if(display != "none") {
		document.getElementById("arrow" + i).style.backgroundPosition = "2px -19px";
		document.getElementById("thehouse" + i).style.display = "none";
	}
	//the content show when click
	else {
		document.getElementById("arrow" + i).style.backgroundPosition="0px 6px";
		document.getElementById("thehouse" + i).style.display = "block";
	}
}