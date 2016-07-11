function submit() {
	var username, password, email, emailArr;
	var counter = 0;

	username = document.getElementById("username").value.length;
	password = document.getElementById("password").value.length;
	email = document.getElementById("email").value;
	emailArr = email.split("");

	if (username < 8) {
		document.getElementById("alertUserName").innerHTML = "Username length min 8 letter";
	}
	else {
		document.getElementById("alertUserName").innerHTML = "OK";
	}

	if (password < 8) {
		document.getElementById("alertPassword").innerHTML = "Password length min 8 letter";
	}
	else {
		document.getElementById("alertPassword").innerHTML = "OK";
	}

	for (i = 0; i < emailArr.length; i++) {
		if (emailArr[i] == "@" || emailArr[i] == ".") {
			counter++;
		}
	}

	if (counter == 2) {
		document.getElementById("alertEmail").innerHTML = "OK";
	}
	else {
		document.getElementById("alertEmail").innerHTML = "Email wrong format"
	}
	couter = 0;
}

function refresh() {

}