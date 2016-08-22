var submitEmail, submitPass, submitUser, submitBir;
var alertString, idAlert;

//check the characters of username
function  checkUsername() {
    var usernameLen = document.getElementById("username").value.length;
    if (usernameLen == 0) {
        alertString = "Empty username";
        submitUser = 0;
    }
    else {
        if (usernameLen < 8) {
            alertString = "Username length min 8 letter";
            submitUser = 0;
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
        submitPass = 0;
    }
    else {
        if (passwordLen < 8) {
            alertString = "Password length min 8 letter";
            submitPass = 0;
        }
        else {
            alertString = "OK";
            submitPass = 1;
        }
    }
    idAlert = "alertPassword";
    alertAll();
}

//check the characters of email
function checkEmail() {
    var email, emailLen;
    var emailReg = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    email = document.getElementById("email").value;
    emailLen = email.length;

    if(emailLen == 0) {
        alertString = "Empty email";
        submitEmail = 0;
    }
    else {
        if (email.search(emailReg) >= 0) {
            alertString = "OK";
            submitEmail = 1;
        }
        else {
            alertString = "Email wrong format";
            submitEmail = 0;
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
            submitBir = 1;
            break;
        }
        else {
            alertString = "Birthday wrong format";
            submitBir = 0;
        }
    }
    idAlert = "alertBirthday";
    alertAll();
}

//submit form
function submitAll() {
    if (submitUser == 1 && submitPass == 1 && submitEmail == 1 && submitBir == 1) {
        alert("Submit successfully!");
        refreshAll();
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
    document.getElementById("selectMonth").value = monthInput;
    document.getElementById("selectYear").value = yearInput;
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
                submitUser = 1;
            }
            else {
                submitUser = 0;
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