/*Javascript Calendar*/

var date = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayLastMonth;
var dayArr = [];
var numDayNowMonth;// This month's dates
var numDayLastWeek; // Last week's number of days last month
var varloop;
var today = new Date();
var monthInput = today.getMonth();
var dayInput = today.getDate();
var yearInput = today.getFullYear();

//create calendar
function initCalendar() {
	varloop = 0;
	// taking the number of days the last week of the previous month
	numDayLastWeek = new Date(yearInput, monthInput, 1).getDay();
	// taking the number of days this month
	numDayNowMonth = new Date(yearInput, monthInput + 1, 0).getDate();
	document.write("<div id = 'main'>");
	document.write("<input id = 'showCalendar' style = 'height: 36px; position: relative;'><img  onclick = 'openCalendar()' src = 'calendar.png' alt = '' style = 'position: absolute; top: 10px; left: 146px;'>");
	document.write("<table id = 'calendar' style = 'border: 1px solid black; text-align: center; background-color: #2D2D2D'>");
	optionMonthYear();
	setCalendar();
	document.write("</table>");
	document.write("</div>");
	document.getElementById("selectMonth").value = monthInput;
	document.getElementById("selectYear").value = yearInput;
}

//create optional month and year
function optionMonthYear() {
	document.write("<tr>");
	document.write("<td class = 'click' id = 'prevYear' onclick = 'prevYear()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&#8647</td>");
	document.write("<td class = 'click' id = 'prevMonth' onclick = 'prevMonth()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&larr;</td>");
	buildMonth();
	buildYear();
	document.write("<td class = 'click' id = 'nextMonth' onclick = 'nextMonth()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&rarr;</td>");
	document.write("<td class = 'click' id = 'nextYear' onclick = 'nextYear()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&#8649;</td>");
	document.write("</tr>");
}

//create optional month
function buildMonth() {
	document.write("<td class = 'click' colspan = '2' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'><select id = 'selectMonth' onchange='changeMonth();'>");
	for (i = 0; i < 12; i++) {
		document.write("<option value ='" + i + "'>" + month[i] + "</option>");
	};
	document.write("</select>" + "</td>");
}

//creat optional year
function buildYear() {
	document.write("<td class = 'click' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'><select id = 'selectYear' onchange='changeYear()'>");
	for (y = 1970; y <= 2100; y++) {
		document.write("<option value ='" + y + "'>" + y + "</option>");
	};
	document.write("</select>" + "</td>");
}

// create row and column, fill the number day
function setCalendar() {
	//assign a value to each element of dayArr[]
	for (i = 0; i < numDayNowMonth; i++) {
		dayArr[i] = i+1;
	}

	//drawing table calendar (day)
	document.write("<tr>");
	for (i = 0; i < 7; i++) {
		document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px; background-color: #BEBEBE; color: red; font-weight: bold; font-size: 18pt;'>" + date[i] + "</td>");
	}
	document.write("</tr>");

	//drawing table calendar (date)
	for (x = 0; x < 6; x++) {
		document.write("<tr>");
		for (i = 0; i < 7; i++) {
			if (varloop < numDayNowMonth) {
				//drawing the number of days the last week of the previous month
				if (numDayLastWeek > 0) {
					document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px;'>" + "</td>");
					numDayLastWeek--;
				}
				//drawing the number of days this month
				else {
					//highlight today
					if ((dayArr[varloop] == dayInput) && (monthInput == today.getMonth()) && (yearInput == today.getFullYear())) {
						document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px; color: red; font-weight: bold; background-color: white; cursor: pointer;' onclick='selectDay(" + varloop + ")'>" + dayArr[varloop] + "</td>");
					}
					else {
					document.write("<td style = 'border: 1px solid black; width: 61px; height: 33px; background-color: white; cursor: pointer;' onclick='selectDay(" + varloop + ")'>" + dayArr[varloop] + "</td>");
					}
					varloop++;
				}
			}
		}
		document.write("</tr>");
	}
}

//previous year button
function prevYear() {
	clearCalendar();
	yearInput--;
	initCalendar();
}

//previous month button
function prevMonth() {
	clearCalendar();
	monthInput--;
	if (monthInput < 0) {
		monthInput = 11;
		yearInput--;
	}
	initCalendar();
}

//next month button
function nextMonth() {
	clearCalendar();
	monthInput++;
	if (monthInput > 11) {
		monthInput = 0;
		yearInput++;
	}
	initCalendar();
}

//next year button
function nextYear() {
	clearCalendar();
	yearInput++;
	initCalendar();
}

//change month
function changeMonth() {
	//clearCalendar();
	monthInput = document.getElementById("selectMonth").selectedIndex;
	clearCalendar();
	initCalendar();
}

//change year
function changeYear() {
	//clearCalendar();
	yearInput = document.getElementById("selectYear").selectedIndex + 1970;
	clearCalendar();
	initCalendar();
}

//select the day and show up input
function selectDay(position) {
	var day = position + 1;
	var monthShow = monthInput + 1;
	var dayMonthYear = day + "/" + monthShow + "/" + yearInput;
	document.getElementById('showCalendar').value = dayMonthYear;
	document.getElementById('calendar').style.display = 'none';
}

//show calendar when onclick
function openCalendar() {
	document.getElementById('calendar').style.display = 'block';
}

//clear calendar in order to create new calendar
function clearCalendar() {
	var item = document.getElementById("main");
	item.parentNode.removeChild(item);
}