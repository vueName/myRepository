<?php
require("0_init.php");
$sql="select * from pay_carousel";
$result=mysqli_query($conn,$sql);
$pics=mysqli_fetch_all($result,1);

echo json_encode($pics);
?>
