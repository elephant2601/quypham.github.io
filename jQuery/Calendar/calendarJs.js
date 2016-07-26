/*Javascript Calendar*/

var date = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayLastMonth, content;
var dayArr = [];
var numDayNowMonth;// This month's dates
var numDayLastWeek; // Last week's number of days last month
var varloop;
var today = new Date();
var monthInput = today.getMonth();
var dayInput = today.getDate();
var yearInput = today.getFullYear();

initCalendar();

//create calendar
function initCalendar() {
    varloop = 0;
    // taking the number of days the last week of the previous month
    numDayLastWeek = new Date(yearInput, monthInput, 1).getDay();
    // taking the number of days this month
    numDayNowMonth = new Date(yearInput, monthInput + 1, 0).getDate();
    content = "<div id = 'main'>";
    content +="<input id = 'showCalendar' style = 'height: 32px; position: relative;'><img  onclick = 'openCalendar()' src = 'calendar.png' alt = '' style = 'position: absolute; top: 10px; left: 146px;'>";
    content += "<table id = 'calendar' style = 'border: 1px solid black; text-align: center; background-color: #2D2D2D'>";
    optionMonthYear();
    setCalendar();
    content += "</table>";
    content += "</div>";
    $("#demo").html(content);
    $("#selectMonth").val(monthInput);
    $("#selectYear").val(yearInput);
}

//create optional month and year
function optionMonthYear() {
    content += "<tr>";
    content += "<td class = 'click' id = 'prevYear' onclick = 'prevYear()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&#8647</td>";
    content += "<td class = 'click' id = 'prevMonth' onclick = 'prevMonth()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&larr;</td>";
    buildMonth();
    buildYear();
    content += "<td class = 'click' id = 'nextMonth' onclick = 'nextMonth()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&rarr;</td>";
    content += "<td class = 'click' id = 'nextYear' onclick = 'nextYear()' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px; cursor: pointer;'>&#8649;</td>";
    content += "</tr>";
}

//create optional month
function buildMonth() {
    content += "<td class = 'click' colspan = '2' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'><select id = 'selectMonth' onchange='changeMonth()'>";
    for (i = 0; i < 12; i++) {
        content += "<option value ='"; 
        content += i;
        content += "'>";
        content += month[i];
        content += "</option>";
    };
    content += "</select>";
    content += "</td>";
}

//creat optional year
function buildYear() {
    content += "<td class = 'click' style = 'background-color: #a9cce3; color: #2e86c1; border: 1px solid black; width: 61px; height: 33px;'><select id = 'selectYear' onchange='changeYear()'>";
    for (i = 1970; i <= 2100; i++) {
        content += "<option value ='";
        content += i;
        content += "'>";
        content += i;
        content += "</option>";
    };
    content += "</select>";
    content += "</td>";
}

// create row and column, fill the number day
function setCalendar() {
    //assign a value to each element of dayArr[]
    for (i = 0; i < numDayNowMonth; i++) {
        dayArr[i] = i+1;
    }

    //drawing table calendar (day)
    content += "<tr>";
    for (i = 0; i < 7; i++) {
        content += "<td style = 'border: 1px solid black; width: 61px; height: 33px; background-color: #BEBEBE; color: red; font-weight: bold; font-size: 18pt;'>";
        content += date[i];
        content += "</td>";
    }
    content += "</tr>";

    //drawing table calendar (date)
    for (x = 0; x < 6; x++) {
        content += "<tr>";
        for (i = 0; i < 7; i++) {
            if (varloop < numDayNowMonth) {
                //drawing the number of days the last week of the previous month
                if (numDayLastWeek > 0) {
                    content += "<td style = 'border: 1px solid black; width: 61px; height: 33px;'>";
                    content += "</td>";
                    numDayLastWeek--;
                }
                //drawing the number of days this month
                else {
                    //hightlight today
                    if ((dayArr[varloop] == dayInput) && (monthInput == today.getMonth()) && (yearInput == today.getFullYear())) {
                        content += "<td style = 'border: 1px solid black; width: 61px; height: 33px; color: red; font-weight: bold; background-color: white; cursor: pointer;' onclick='selectDay(";
                        content += varloop;
                        content += ")'>";
                        content += dayArr[varloop];
                        content += "</td>";
                    }
                    else {
                    content += "<td style = 'border: 1px solid black; width: 61px; height: 33px; background-color: white; cursor: pointer;' onclick='selectDay(";
                    content += varloop;
                    content += ")'>";
                    content += dayArr[varloop];
                    content += "</td>";
                    }
                    varloop++;
                }
            }
        }
        content += "</tr>";
    }
}

//previous year button
function prevYear() {
    clearCalendar();
    yearInput--;
    initCalendar();
    $("#calendar").slideDown();
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
    $("#calendar").slideDown();
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
    $("#calendar").slideDown();
}

//next year button
function nextYear() {
    clearCalendar();
    yearInput++;
    initCalendar();
    $("#calendar").slideDown();
}

//change month
function changeMonth() {
    monthInput = $("#selectMonth").val();
    clearCalendar();
    initCalendar();
    $("#calendar").slideDown();
}

//change year
function changeYear() {
    yearInput = $("#selectYear").val();
    clearCalendar();
    initCalendar();
    $("#calendar").slideDown();
}

//select the day and show up input
function selectDay(position) {
    var day = position + 1;
    var monthShow = monthInput + 1;
    var dayMonthYear = day + "/" + monthShow + "/" + yearInput;
    $("#showCalendar").val(dayMonthYear);
    $("#calendar").slideUp();
}

//show calendar when onclick
function openCalendar() {
    $("#calendar").slideDown();
}

//clear calendar in order to create new calendar
function clearCalendar() {
    $("#showCalendar").slideUp();
    $("#calendar").slideUp();
}