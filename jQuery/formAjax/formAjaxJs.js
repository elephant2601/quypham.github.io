var submitEmail, submitPass, submitUser, submitBir;
var alertString, idAlert;

//check the characters of username
function  checkUsername() {
    var usernameLen = $("#username").val().length;

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
            alertString = "Enough letter";
            submitUser = 1;
        }   
    }
    idAlert = "alertUserName";
    alertAll();
}

//check the characters of password
function checkPassword() {
    var passwordLen = $('#password').val().length;

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

    email = $('#email').val();
    emailLen = email.length;

    if(emailLen == 0) {
        alertString = "Empty email";
        submitEmail = 0;
    }
    else {
        if (email.search(emailReg) >= 0) {
            alertString = "Correct format";
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
    var checkBir = $('#showCalendar').val();
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
                    submitUser = 0;
                }
                else {
                    alertString = 'OK';
                    submitUser = 2;
                }
                idAlert = "alertUserName";
                alertAll();

                if (result[1] == 3) {
                    alertString = 'Email already exists';
                    submitEmail = 0;
                }
                else {
                    alertString = 'OK';
                    submitEmail = 2;
                }
                idAlert = "alertEmail";
                alertAll();
                if (submitUser == 2 && submitPass == 1 && submitEmail == 2 && submitBir == 1) {
                    alert("Submit successfully!");
                    refreshAll();
                }
            }
        });
    }
    else {
        alert("Please fill again!");
    }
}

//refresh form
function refreshAll() {
    $('#alertUserName').html(null);
    $('#alertPassword').html(null);
    $('#alertEmail').html(null);
    $('#alertBirthday').html(null);
    $('#showCalendar').val(null);
    document.getElementById("myForm").reset();
    $('#selectMonth').val(monthInput);
    $('#selectYear').val(yearInput);
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