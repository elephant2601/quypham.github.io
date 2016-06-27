/*
lanclick = 0; click prev 1 cai -> lanclick--
click next 1 cai -> lanclick++
pos0=-851px, pos1=0px, pos2=851px
bt img-1 pos1, img-2345 pos2
onclick + next + lanclick=2 img-1 pos0, img2 pos1 , img-345 pos3
onclick + prev + lanclick=
*/
var numberClick = 1;
function previous() {
	if (numberClick == 1) {
		break;
	}
	else {
		numberClick--;
	}
}
function next() {
	if (numberClick == 5) {
		break;
	}
	else {
		numberClick++;
	}
}