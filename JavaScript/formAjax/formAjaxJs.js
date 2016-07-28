var submit = 0;
var alertString, idAlert;

//check the characters of username
function  checkUsername() {
    var usernameLen = document.getElementById("username").value.length;
    if (usernameLen == 0) {
        alertString = "Empty username";
    }
    else {
        if (usernameLen < 8) {
            alertString = "Username length min 8 letter";
        }
        else {
            check();
        }   
    }
    idAlert = "alertUserName";
    alertAll();
}

//check the characters of password
function checkPassword() {
    var passwordLen = document.getElementById("password").value.length;

    if (passwordLen == 0) {
        alertString = "Empty password";
    }
    else {
        if (passwordLen < 8) {
            alertString = "Password length min 8 letter";
        }
        else {
            alertString = "OK";
            submit++;
        }
    }
    idAlert = "alertPassword";
    alertAll();
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
        alertString = "Empty email";
    }
    else {
        if (counter == 2) {
            alertString = "OK";
            submit++;
        }
        else {
            alertString = "Email wrong format";
        }
    }
    idAlert = "alertEmail";
    alertAll();
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
            alertString = "OK";
            submit++;
            break;
        }
        else {
            alertString = "Birthday wrong format";
        }
    }
    idAlert = "alertBirthday";
    alertAll();
}

//submit form
function submitAll() {
    if (submit == 4) {
        alert("Submit successfully!");
        submit = 0;
    }
    else {
        alert("Please fill again!");
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

    var usern = document.getElementById("username").value;
    checkUser.open("GET", "formAjaxPHP.php?username=" + usern, true);
    checkUser.send();

    checkUser.onreadystatechange = function() {
        if (checkUser.readyState == 4 && checkUser.status == 200) {
            result = checkUser.responseText;
            alertString = result;
            idAlert = "alertUserName";
            alertAll();
            if (result == "OK") {
                submit++;
            }
        }
    }
}

//alert after entering
function alertAll() {
    document.getElementById(idAlert).innerHTML = alertString;
    if (alertString == "OK") {
        document.getElementById(idAlert).style.color = "#039be5";
    }
    else {
        document.getElementById(idAlert).style.color = "#f44336";
    }
    alertString = null;
}