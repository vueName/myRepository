<?php
header("Content-Type:application/json;charset=utf8");
$conn=mysqli_connect("127.0.0.1","root","","YYS",3306);
$sql="set names utf8";
mysqli_query($conn,$sql);
?>