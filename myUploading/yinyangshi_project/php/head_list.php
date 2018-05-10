<?php
	require("0_init.php");
	@$pno=$_REQUEST["pno"];
	@$pageSize=$_REQUEST["pageSize"];
	@$type=$_REQUEST["type"];
	if(!$pno){
		$pno=1;
	}else{
		$pno=intval($_REQUEST["pno"]);
	}
	if(!$pageSize){
		$pageSize=12;
	}else{
		$pageSize=intval($_REQUEST["pageSize"]);
	}
	if($type==""||$type=="全部"){
		$sql="SELECT COUNT(*) FROM index_roles";
		$result=mysqli_query($conn,$sql);
		$row=mysqli_fetch_row($result);
		$rows=$row[0]; //总条数
		$pageCount=ceil($rows/$pageSize); //总页数
		$startRow=($pno-1)*$pageSize;  //当前页开始行

		$sql="SELECT * FROM index_roles
		LIMIT $startRow,$pageSize";
		$result=mysqli_query($conn,$sql);
		$info=mysqli_fetch_all($result,1);//查询结果
	}else{
		$sql="SELECT COUNT(*) FROM index_roles WHERE	type = '$type'";
		$result=mysqli_query($conn,$sql);
		$row=mysqli_fetch_row($result);
		$rows=$row[0]; //总条数

		$pageCount=ceil($rows/$pageSize); //总页数
		$startRow=($pno-1)*$pageSize;  //当前页开始行

		$sql="SELECT * FROM index_roles WHERE type='$type' 
		LIMIT $startRow,$pageSize";
		$result=mysqli_query($conn,$sql);
		$info=mysqli_fetch_all($result,1);//查询结果
	}

	$output=[
		"pno"=>$pno,    //当前页
		"pageSize"=>$pageSize, //每页的大小
		"pageCount"=>$pageCount,//总页数
		"info"=>$info      //查询结果
	];
	//var_dump($output);
	echo json_encode($output);
?>