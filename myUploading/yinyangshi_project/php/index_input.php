<?php
	require("0_init.php");
	@$uname=$_REQUEST["uname"];
	$sql="SELECT * FROM index_roles WHERE uname LIKE '%$uname%'";
	$result=mysqli_query($conn,$sql);
	$user=mysqli_fetch_all($result,1);
	echo json_encode($user);
?>