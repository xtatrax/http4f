<?php
	session_start();
	//#$_SESSION["ID"];
	if( isset( $_COOKIE["ID"] ) ) {
		echo $_COOKIE["ID"];
	}else{
		echo "not found";
	}


	include "template.html";
?>