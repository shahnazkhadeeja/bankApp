<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$id=$_GET['id'];


$result = $dbase->queryto_fetch_api( 'SELECT `customer_name`, `bank_name`, `branch_name`, `bank_address`, `account_number`, `iban`, `swift`, `account_type` FROM `bankd` WHERE id = ' . $id );

$response=array('result'=>$result);

echo json_encode($response);

?>