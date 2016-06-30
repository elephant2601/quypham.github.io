/* Javascript */
function showHideinfo(i) {
	var display = document.getElementById("thehouse" + i).style.display;
	if(display != "none") {
		document.getElementById("arrow" + i).style.backgroundPosition = "2px -19px";
		document.getElementById("thehouse" + i).style.display = "none";
	}
	else {
		document.getElementById("arrow" + i).style.backgroundPosition="0px 6px";
		document.getElementById("thehouse" + i).style.display = "block";
	}
}