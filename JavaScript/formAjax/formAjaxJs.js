function  checkUsername() {
	var username;
	username = document.getElementById("username").value.length;	

	if (username < 8) {
		document.getElementById("alertUserName").innerHTML = "Username length min 8 letter";
		document.getElementById("alertUserName").style.color = "#f44336";
	}
	else {
		check();	
		document.getElementById("alertUserName").style.color = "#039be5";
	}	
}

function checkPassword() {
	var password;

	password = document.getElementById("password").value.length;

	if (password < 8) {
		document.getElementById("alertPassword").innerHTML = "Password length min 8 letter";
		document.getElementById("alertPassword").style.color = "#f44336";
	}
	else {
		document.getElementById("alertPassword").innerHTML = "OK";
		document.getElementById("alertPassword").style.color = "#039be5";
	}
}

function checkEmail() {
	var email, emailArr;
	var counter = 0;

	email = document.getElementById("email").value;
	emailArr = email.split("");

	for (i = 0; i < emailArr.length; i++) {
		if (emailArr[i] == "@" || emailArr[i] == ".") {
			counter++;
		}
	}

	if (counter == 2) {
		document.getElementById("alertEmail").innerHTML = "OK";
		document.getElementById("alertEmail").style.color = "#039be5";
	}
	else {
		document.getElementById("alertEmail").innerHTML = "Email wrong format";
		document.getElementById("alertEmail").style.color = "#f44336";
	}
}

function submitAll() {

}

function refreshAll() {
	document.getElementById("alertUserName").innerHTML = null;
	document.getElementById("alertPassword").innerHTML = null;
	document.getElementById("alertEmail").innerHTML = null;
	document.getElementById("showCalendar").value = "";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("email").value = "";
}

function check() {
	var checkUser;

	if(window.XMLHttpRequest) {
		checkUser = new XMLHttpRequest;
	}
	else {
		checkUser = new ActiveXObject("Microsoft.XMLHTTP");
	}

	checkUser.onreadystatechange = function() {
		if (checkUser.readyState == 4 && checkUser.status == 200) {
			document.getElementById("alertUserName").innerHTML = checkUser.responseText;
		}
	}
	var usern = document.getElementById("username").value;
	checkUser.open("GET", "formAjaxPHP.php?username=" + usern, true);
	checkUser.send();
}