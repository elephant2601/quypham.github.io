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
            alertString = "Enough letter";
            //check();
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
            alertString = "Correct format";
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
    $.ajax ({
        url : 'formAjaxPHP.php',
        type : 'post',
        dataType : 'text',
        data : {
            username : $('#username').val(),
            password : $('#password').val(),
            email : $('#email').val(),
            birthday : $('#showCalendar').val()
            
        },
        success : function(result) {
            result = result.split("");
            if (result[0] == 1) {
                alertString = 'Username already exists';
            }
            else {
                alertString = 'OK';
            }
            idAlert = "alertUserName";
            alertAll();

            if (result[1] == 3) {
                alertString = 'Email already exists';
            }
            else {
                alertString = 'OK';
            }
            idAlert = "alertEmail";
            alertAll();
        }
    });
}

//refresh form
function refreshAll() {
    $('#alertUserName').html(null);
    $('#alertPassword').html(null);
    $('#alertEmail').html(null);
    $('#alertBirthday').html(null);
}

//alert after entering
function alertAll() {
    document.getElementById(idAlert).innerHTML = alertString;
    if (alertString == "OK" || alertString == "Correct format" || alertString == "Enough letter") {
        document.getElementById(idAlert).style.color = "#039be5";
    }
    else {
        document.getElementById(idAlert).style.color = "#f44336";
    }
    alertString = null;
}