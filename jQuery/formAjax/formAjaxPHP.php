<?php
    $username = isset($_POST['username']) ? $_POST['username'] : false;
    $password = isset($_POST['password']) ? $_POST['password'] : false;
    $email = isset($_POST['email']) ? $_POST['email'] : false;
    $birthday = isset($_POST['birthday']) ? $_POST['birthday'] : false;

    //connect database
    $conn = mysqli_connect('sql208.freevnn.com', 'freev_18514815', 'quy2601', 'freev_18514815_formAjax') or die ('{error:"bad_request"}');

    //variable data saved is sent to
    $error = array(
        'error' => 'success',
        'password' => $password,
        'username' => $username,
        'email' => $email,
        'birthday' => $birthday
    );

    // check username
    if ($username) {
        $query = mysqli_query($conn, "SELECT `USERNAME` FROM `formajax`");
        if ($query) {
            $row = false;
            while ($varArr = mysqli_fetch_array($query, MYSQLI_NUM)) {
                $varArr = implode($varArr);
                if ($username == $varArr) {
                    $row = true;
                }
            }
            if ($row) {
                $error['username'] = '1';
            }
            else {
                $error['username'] = '2';
            }
            echo $error['username'];
        }
        else {
            echo 'Cannot select username';
        }
    }

    // check mail
    if ($email) {
        $query = mysqli_query($conn, "SELECT `EMAIL` FROM `formajax`");
        if ($query) {
            $row = false;
            while ($varArr = mysqli_fetch_array($query, MYSQLI_NUM)) {
                $varArr = implode($varArr);
                if ($email == $varArr) {
                    $row = true;
                }
            }
            if ($row) {
                $error['email'] = '3';
            }
            else {
                $error['email'] = '4';
            }
            echo $error['email'];
        }
        else {
            echo 'Cannot select email';
        }
    }
    
    // insert into database if no error
    if ($error['username'] == '2' && $error['email'] == '4' && $error['password'] && $error['birthday']) {
        $query = mysqli_query($conn, "INSERT INTO `formajax`(`USERNAME`, `PASSWORD`, `EMAIL`, `BIRTHDAY`) VALUES ('$username', '$password', '$email', '$birthday')");
    }
    mysql_close($conn);
?>