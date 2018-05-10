<?php
session_start();
require("0_init.php");
@$account=$_REQUEST["account"];
@$upwd=$_REQUEST["upwd"];
@$phone=$_REQUEST["phone"];
@$yzm1=$_REQUEST["yzm1"];
@$yzm2=$_REQUEST["yzm2"];

//正则验证
$yzmPattern1='/[a-zA-Z]{4}/';
$yzmPattern2='/[0-9]{4}/';
if(!preg_match($yzmPattern1,$yzm1)){
   echo '{"code":-2,"msg":"验证码格式不正确"}';
   exit;//停止php执行
}
if(!preg_match($yzmPattern2,$yzm2)){
   echo '{"code":-3,"msg":"验证码格式不正确"}';
   exit;//停止php执行
}
$code1=$_SESSION["code1"];
if($code1!=$yzm1){
   echo '{"code":-4,"msg":"验证码不正确"}';
   exit;
}
$code2=$_SESSION["code2"];
if($code2!=$yzm2){
   echo '{"code":-5,"msg":"验证码不正确"}';
   exit;
}
$sql="INSERT INTO reg_login VALUES(null,'$account','$upwd','$phone')";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row>0){
	echo '{"code":1,"msg":"注册成功"}';
}else{
	echo '{"code":-1,"msg":"注册失败"}';
}
?>