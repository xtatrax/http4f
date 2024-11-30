<?php
	session_start();
	$_SESSION["ID"];
	if( isset( $_COOKIE["ID"] ) ) {

	}else{
		#isset
	}


	include "template.html"
?>