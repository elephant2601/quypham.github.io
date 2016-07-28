<?php
    $username = isset($_POST['username']) ? $_POST['username'] : false;
    $password = isset($_POST['password']) ? $_POST['password'] : false;
    $email = isset($_POST['email']) ? $_POST['email'] : false;
    $birthday = isset($_POST['birthday']) ? $_POST['birthday'] : false;



    //connect database
    //$conn = mysqli_connect('sql208.freevnn.com', 'freev_18514815', 'quy2601', 'freev_18514815_formAjax') or die ('{error:"bad_request"}');
    $conn = mysqli_connect('localhost', 'root', 'vertrigo', 'formajax') or die ('{error:"bad_request"}');

    // Khai báo biến lưu lỗi
    $error = array(
        'error' => 'success',
        'password' => '',
        'username' => '',
        'email' => '',
        'birthday' => ''
    );

    // check username
    if ($username) {
        $query = mysqli_query($conn, "SELECT `USERNAME` FROM `formajax` WHERE USERNAME = $username");
        //$query = mysqli_query($conn, 'select * from formajax where USERNAME = $username');
        if ($query) {
            $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
            if ( count($row) > 0){
                $error['username'] = 'Username already exists';
            }
            else {
                $error['username'] = 'OK';
            }
        }
    }

    // check mail
    if ($email) {
        //$query = mysqli_query($conn, 'select count(*) as count from formajax where EMAIL = \''.  addslashes($email).'\'');
        $query = mysqli_query($conn, "SELECT `EMAIL` FROM `formajax` WHERE EMAIL = $email");
        if ($query) {
            $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
            if ( count($row) > 0) {
                $error['email'] = 'Email already exists';
            }
            else {
                $error['email'] = 'OK';
            }
        }
    }
     
    if (!$error['username'] && !$error['email'] && !$error['password'] && !$error['birthday']) {
        // insert into database if no error
        //$query = mysqli_query($conn, "insert into formajax(USERNAME, PASSWORD, EMAIL, BIRTHDAY) values ('$username', '$password', '$email', '$birthday')");
        $query = mysqli_query($conn, "INSERT INTO `formajax`(`USERNAME`, `PASSWORD`, `EMAIL`, `BIRTHDAY`) VALUES ('$username', '$password', '$email', '$birthday')");
    }
    die ($error);
?>