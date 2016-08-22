<?php
    if(isset($_REQUEST["username"])) {
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
    }
?>