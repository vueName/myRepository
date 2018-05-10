<?php
require("0_init.php");
@$spec=$_REQUEST["spec"];
if(!$spec){
	$spec="精选推荐";
}
$sql="SELECT * FROM fan_zone WHERE spec='$spec'";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
echo json_encode($rows);
?>