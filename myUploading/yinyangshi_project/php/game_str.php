<?php
require("0_init.php");
$type=$_REQUEST["type"];
$sql="select * from game_str WHERE type='$type'";
$result=mysqli_query($conn,$sql);
$pics=mysqli_fetch_all($result,1);
echo json_encode($pics);
?>