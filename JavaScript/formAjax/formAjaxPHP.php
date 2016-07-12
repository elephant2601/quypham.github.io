<?php
//echo "<pre>";print_r($_POST);exit;
if(isset($_REQUEST["username"])) {
	$username = array("elephant", "elephant2601");
		if(in_array($_REQUEST["username"], $username)) {
			echo 'username already exists';
		}
		else {
			echo 'OK';
		}
}
else {
	echo 'NULL';
}
?>