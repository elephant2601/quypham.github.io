var submit = 0;

//check the characters of username
function  checkUsername() {
	var usernameLen = document.getElementById("username").value.length;
	if (usernameLen == 0) {
		document.getElementById("alertUserName").innerHTML = "Empty username";
		document.getElementById("alertUserName").style.color = "#f44336";
	}
	else {
		if (usernameLen < 8) {
		document.getElementById("alertUserName").innerHTML = "Username length min 8 letter";
		document.getElementById("alertUserName").style.color = "#f44336";
		}
		else {
			check();
		}	
	}
}

//check the characters of password
function checkPassword() {
	var passwordLen = document.getElementById("password").value.length;

	if (passwordLen == 0) {
		document.getElementById("alertPassword").innerHTML = "Empty password";
		document.getElementById("alertPassword").style.color = "#f44336";
	}
	else {
		if (passwordLen < 8) {
			document.getElementById("alertPassword").innerHTML = "Password length min 8 letter";
			document.getElementById("alertPassword").style.color = "#f44336";
		}
		else {
			document.getElementById("alertPassword").innerHTML = "OK";
			document.getElementById("alertPassword").style.color = "#039be5";
			submit++;
		}
	}
}

//check the characters of email
function checkEmail() {
	var email, emailArr, emailLen;
	var counter = 0;

	email = document.getElementById("email").value;
	emailLen = email.length;
	emailArr = email.split("");

	for (i = 0; i < emailArr.length; i++) {
		if (emailArr[i] == "@" || emailArr[i] == ".") {
			counter++;
		}
	}

	if(emailLen == 0) {
		document.getElementById("alertEmail").innerHTML = "Empty email";
		document.getElementById("alertEmail").style.color = "#f44336";
	}
	else {
		if (counter == 2) {
			document.getElementById("alertEmail").innerHTML = "OK";
			document.getElementById("alertEmail").style.color = "#039be5";
			submit++;
		}
		else {
			document.getElementById("alertEmail").innerHTML = "Email wrong format";
			document.getElementById("alertEmail").style.color = "#f44336";
		}
	}
}

//check after entering birthday
function checkBirthday1() {
	checkBirthday();
}

//check after selecting birthday
function checkBirthday2() {
	checkBirthday();
}

function checkBirthday() {
	var checkBir = document.getElementById("showCalendar").value;
	var checkBirArr = checkBir.split("");

	for (i = 0; i < checkBirArr.length; i++) {
		if (checkBirArr[i] == "/") {
			document.getElementById("alertBirthday").innerHTML = "OK";
			document.getElementById("alertBirthday").style.color = "#039be5";
			submit++;
			break;
		}
		else {
			document.getElementById("alertBirthday").innerHTML = "Birthday wrong format";
			document.getElementById("alertBirthday").style.color = "#f44336";
		}
	}
}

//submit form
function submitAll() {
	if (submit == 4) {
		alert("Submit successfully!")
		submit = 0;
	}
	else {
		alert("Please fill again!")
	}
}

//refresh form
function refreshAll() {
	document.getElementById("alertUserName").innerHTML = null;
	document.getElementById("alertPassword").innerHTML = null;
	document.getElementById("alertEmail").innerHTML = null;
	document.getElementById("alertBirthday").innerHTML = null;
	document.getElementById("myForm").reset();
	submit = 0;
}

//check valid username
function check() {
	var checkUser, result;

	if(window.XMLHttpRequest) {
		checkUser = new XMLHttpRequest;
	}
	else {
		checkUser = new ActiveXObject("Microsoft.XMLHTTP");
	}

	checkUser.onreadystatechange = function() {
		if (checkUser.readyState == 4 && checkUser.status == 200) {
			result = checkUser.responseText;
			document.getElementById("alertUserName").innerHTML = result;
			if (result == "OK") {
				document.getElementById("alertUserName").style.color = "#039be5";
				submit++;
			}
			else {
				document.getElementById("alertUserName").style.color = "#f44336";
			}
		}
	}
	var usern = document.getElementById("username").value;
	checkUser.open("GET", "formAjaxPHP.php?username=" + usern, true);
	checkUser.send();
}