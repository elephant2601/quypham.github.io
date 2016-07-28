

/*if(isset($_REQUEST["username"])) {
    $username = array("elephant", "elephant2601");
        if(in_array($_REQUEST["username"], $username)) {
            echo 'Username already exists';
        }
        else {
            echo 'OK';
        }
}
else {
    echo 'NULL';
}*/


<?php
    $username = isset($_POST['username']) ? $_POST['username'] : false;
    $email = isset($_POST['email']) ? $_POST['email'] : false;

    //connect database
    $conn = mysqli_connect('sql208.freevnn.com', 'freev_18514815', 'quy2601', 'freev_18514815_formAjax') or die ('{error:"bad_request"}');

    // check username
    if ($username)
    {
        $query = mysqli_query($conn, 'select count(*) as count from formAjax where USERNAME = \''.  addslashes($username).'\'');
     
        if ($query){
            $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
            if ((int)$row['count'] > 0){
                echo 'Username already exists';
            }
            else {
                echo 'OK';
            }
        }
    }
     
    // check mail
    if ($email) {
        $query = mysqli_query($conn, 'select count(*) as count from formAjax where EMAIL = \''.  addslashes($email).'\'');     
        if ($query) {
            $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
            if ((int)$row['count'] > 0) {
                echo 'Email already exists';
            }
            else {
                echo 'OK';
            }
        }
    }
     
    if (!$error['username'] && !$error['email']){
        // insert into database if no error
        $query = mysqli_query($conn, "insert into member(username, email) value ('$username','$email')");
    }
    die (json_encode($error));
?>