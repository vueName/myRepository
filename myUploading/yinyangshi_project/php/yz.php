<?php
require("0_init.php");
$account=$_REQUEST["account"];
$sql="SELECT * FROM reg_login WHERE account='$account'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row){
	echo '{"code":-1,"msg":"账号已存在"}';
}else{
	echo '{"code":1,"msg":"账号可以使用"}';
}
?>