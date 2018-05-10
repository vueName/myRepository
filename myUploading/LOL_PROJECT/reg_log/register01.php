<?php
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
$phone=$_REQUEST["phone"];
$email=$_REQUEST["email"];
$user_name=$_REQUEST["user_name"];
$gender=$_REQUEST["gender"];
require("0_init.php");
$sql="insert into lol(uname,upwd,phone,email,user_name,gender)values
('$uname','$upwd','$phone','$email','$user_name','$gender')";
$result=mysqli_query($conn,$sql);
if($result==true){
	echo 1;
}else{
	echo 0;
}
?>