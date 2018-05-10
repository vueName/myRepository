<?php
require("0_init.php");
$account=$_REQUEST["account"];
$upwd=$_REQUEST["upwd"];
$sql="SELECT * FROM reg_login WHERE account='$account' AND upwd=binary('$upwd')";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row){
	echo '{"code":1,"msg":"登录成功"}';
}else{
	echo '{"code":1,"msg":"登录失败"}';
}
?>