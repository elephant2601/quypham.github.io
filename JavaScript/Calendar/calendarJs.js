/*Javascript Calendar*/

var date = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dateLen, numDayLastWeek, numDayNowMonth, dayLastMonth;
var dayArr = [];
var numDayNowMonth;// so ngay thang nay
var numDayLastWeek; //so ngay tuan cuoi cua thang truoc
var varloop; //bien vong lap
var today = new Date();
var monthInput = today.getMonth();
var dayInput = today.getDate();
var yearInput = today.getFullYear();



initCalendar();

function initCalendar() {
	varloop = 0;
	// lay so ngay tuan cuoi thang truoc
	numDayLastWeek = new Date(yearInput, monthInput, 1).getDay();
	// lay so ngay thang nay
	numDayNowMonth = new Date(yearInput, monthInput + 1, 0).getDate();
	// ngay cuoi thang nay la thu may?
	dayLastMonth = new Date(yearInput, monthInput + 1, 0).getDay();
	document.write("<div id = 'main'>");
	document.write("<input id = 'showCalendar' style = 'height: 36px; position: relative;'><img  onclick = 'showCalendar()' src = 'calendar.png' alt = '' style = 'position: absolute; top: 10px; left: 146px;'>");
	document.write("<table id = 'calendar' style = 'border: 1px solid black; text-align: center;'>");
	optionMonthYear();
	setCalendar();
	document.write("</table>");
	document.write("</div>");
	document.getElementById("month").value = monthInput;
	document.getElementById("year").value = yearInput;
}

function optionMonthYear() {
	document.write("<tr>");
	document.write("<td class = 'click' id = 'prevYear' onclick = 'prevYear()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'>&#8647</td>");
	document.write("<td class = 'click' id = 'prevMonth' onclick = 'prevMonth()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'>&larr;</td>");
	buildMonth();
	buildYear();
	document.write("<td class = 'click' id = 'nextMonth' onclick = 'nextMonth()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'>&rarr;</td>");
	document.write("<td class = 'click' id = 'nextYear' onclick = 'nextYear()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'>&#8649;</td>");
	document.write("</tr>");
}

//creat optional month
function buildMonth() {
	document.write("<td class = 'click' colspan = '2' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'><select id = 'month' onchange='changeMonth();'>");
	for (i = 0; i < 12; i++) {
		document.write("<option value ='" + i + "'>" + month[i] + "</option>");
	};
	document.write("</select>");
	document.write("</td>");
}

//creat optional year
function buildYear() {
	document.write("<td class = 'click' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'><select id = 'year' onchange='changeYear()'>");
	for (i = 1970; i <= 2100; i++) {
		document.write("<option value ='" + i + "'>" + i + "</option>");
	};
	document.write("</select>");
	document.write("</td>");
}

function setCalendar() {
	dateLen = date.length;
	//gan gia tri cho tung phan tu dayArr[]
	for (i = 0; i < numDayNowMonth; i++) {
		dayArr[i] = i+1;
	}

	//ke bang calendar (phan thu)
	document.write("<tr>");
	for (i = 0; i < dateLen; i++) {
		document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px;'>" + date[i] + "</td>");
	}
	document.write("</tr>");

	//ke bang calendar (phan ngay)
	for (x = 0; x < 6; x++) {
		document.write("<tr>");
		for (i = 0; i < 7; i++) {
			if (varloop < numDayNowMonth) {
				//ke bang so ngay tuan cuoi cua thang truoc
				if (numDayLastWeek > 0) {
					document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px;'>");
					document.write("</td>");
					numDayLastWeek--;
				}
				//ke bang tiep so ngay cua thang nay
				else {
					document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px;'>" + dayArr[varloop] + "</td>");
					varloop++;
				}
			}
		}
		document.write("</tr>");
	}
}

function prevYear() {
	clearCalendar();
	yearInput--;
	initCalendar();
}

function prevMonth() {
	clearCalendar();
	monthInput--;
	if (monthInput < 0) {
		monthInput = 11;
		yearInput--;
	}
	initCalendar();
}

function nextMonth() {
	clearCalendar();
	monthInput++;
	if (monthInput > 11) {
		monthInput = 0;
		yearInput++;
	}
	initCalendar();
}

function nextYear() {
	clearCalendar();
	yearInput++;
	initCalendar();
}

function changeMonth() {
	//clearCalendar();
	monthInput = document.getElementById("month").selectedIndex;
	//document.getElementById("demo").innerHTML = parseInt(document.getElementById("selectMonth").value);	
	initCalendar();
}

function changeYear() {
	//clearCalendar();
	yearInput = document.getElementById("year").selectedIndex;
	//document.getElementById("demo").innerHTML = parseInt(document.getElementById("selectYear").value);
	initCalendar();
}

function showCalendar() {
	document.getElementById('calendar').style.display = 'block';
}

function clearCalendar() {
	var item = document.getElementById("main");
	item.parentNode.removeChild(item);
}