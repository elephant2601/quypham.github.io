/*Calendar Javascript*/

var date = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
var dateLen, tabCalendar;
var dayArr = [];
var numDayNowMonth;// so ngay thang nay
var numDayLastWeek; //so ngay tuan cuoi cua thang truoc
var a = 0; //bien vong lap
var monthInput = 6;
var dayInput = 1;
var yearInput = 2016;

// lay so ngay tuan cuoi thang truoc
function getNumDayLastWeek(datePrev) {
	return datePrev.getDay()
}
var datePrev = new Date(yearInput, monthInput, 1);
var numDayLastWeek = getNumDayLastWeek(datePrev);


// lay so ngay thang nay
function getNumDayNowMonth(dateNow) {
	return dateNow.getDate() 
}
var dateNow = new Date(yearInput, monthInput + 1, 0);
var numDayNowMonth = getNumDayNowMonth(dateNow); 

// ngay cuoi thang nay la thu may?
function getDayLastMonth(dateLast) {
	return dateLast.getDay()
}
var dateLast = new Date(yearInput, monthInput + 1, 0);
var dayLastMonth = getNumDayLastWeek(dateLast);		

dateLen = date.length;

//gan gia tri cho tung phan tu dayArr[]
for (i = 0; i < numDayNowMonth; i++) {
	dayArr[i] = i+1;
}

//ke bang calendar (phan thu)
tabCalendar = "<table>";
tabCalendar += "<tr>";
for (i = 0; i < dateLen; i++) {
	tabCalendar += "<th>" + date[i] + "</th>";
}
tabCalendar +="</tr>";

//ke bang calendar (phan ngay)
for (x = 0; x < 6; x++) {
	tabCalendar += "<tr>";
	for (i = 0; i < 7; i++) {
		if (a < numDayNowMonth) {
			//ke bang so ngay tuan cuoi cua thang truoc
			if (numDayLastWeek > 0) {
				tabCalendar += "<th>";
				tabCalendar += "</th>";
				numDayLastWeek--;
			}
			//ke bang tiep so ngay cua thang nay
			else {
				tabCalendar += "<th>" + dayArr[a] + "</th>";
				a++;
			}
		}
	}
	tabCalendar +="</tr>";
}
tabCalendar +="</table>";
document.getElementById("calendar").innerHTML = tabCalendar;
