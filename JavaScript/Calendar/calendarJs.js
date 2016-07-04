var date = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
var dateLen, tabCalendar;
var dayArr = [];
var numDayNowMonth;// so ngay thang nay
var numDayLastWeek; //so ngay tuan cuoi cua thang truoc
var varloop = 0; //bien vong lap
var today = new Date();
var monthInput = today.getMonth();
var dayInput = today.getDate();
var yearInput = today.getFullYear();

// lay so ngay tuan cuoi thang truoc
var datePrev = new Date(yearInput, monthInput, 1);
var numDayLastWeek = datePrev.getDay();
// lay so ngay thang nay
var dateNow = new Date(yearInput, monthInput + 1, 0);
var numDayNowMonth = dateNow.getDate();
// ngay cuoi thang nay la thu may?}
var dayLastMonth = dateNow.getDay();


function initCalendar() {

 document.write("<table>");
 document.write("<tr>");
 document.write("<th class = 'click' id = 'prevYear' onclick = 'prevYear()'>&#8647</th>");
 document.write("<th class = 'click' id = 'prevMonth' onclick = 'prevMonth()'>&larr;</th>");
 document.write("<th class = 'click' id = 'selectMonth' colspan = '2'></th>");
 document.write("<th class = 'click' id = 'selectYear'></th>");
 document.write("<th class = 'click' id = 'nextMonth' onclick = 'nextMonth()'>&rarr;</th>");
 document.write("<th class = 'click' id = 'nextYear' onclick = 'nextYear()'>&#8649;</th>");
 document.write("</tr>");
setCalendar();
document.write("</table>");
}
initCalendar();


function prevYear() {
 yearInput--;
 initCalendar();
}
function prevMonth() {
 monthInput--;
 initCalendar();
}
function nextMonth() {
 monthInput++;
 initCalendar();
}
function nextYear() {
 yearInput++;
 initCalendar();
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
  document.write("<th>" + date[i] + "</th>");
 }
 document.write("</tr>");

 //ke bang calendar (phan ngay)
 for (x = 0; x < 6; x++) {
  document.write("<tr>");
  for (i = 0; i < 7; i++) {
   if (varloop < numDayNowMonth) {
    //ke bang so ngay tuan cuoi cua thang truoc
    if (numDayLastWeek > 0) {
      document.write("<th>");
      document.write("</th>");
     numDayLastWeek--;
    }
    //ke bang tiep so ngay cua thang nay
    else {
     document.write("<th>" + dayArr[varloop] + "</th>");
     varloop++;
    }
   }
  }
  document.write("</tr>");

 }
}