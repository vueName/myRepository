<?php
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
require("0_init.php");
$sql="select * from lol where uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$info=mysqli_fetch_row($result);
if($info!=null){
	echo 1;
}else{
	echo 0;
}
?>