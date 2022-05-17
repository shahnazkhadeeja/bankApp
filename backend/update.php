


<?php
include "dBase.php";
$dbase = new dBase();
$tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$final_out = array('status' => 'fail');

$error = "";
$postdata = file_get_contents("php://input");






// Extract the data.
$recvd = json_decode($postdata);
$request = json_decode($recvd->send);
 print_r($request);

 $id= mysqli_real_escape_string($tcon, $request->id);
$customer_name = mysqli_real_escape_string($tcon, $request->customer_name);

$bank_name = mysqli_real_escape_string($tcon, $request->bank_name);

$branch_name = mysqli_real_escape_string($tcon, $request->branch_name);

$bank_address = mysqli_real_escape_string($tcon, $request->bank_address);

$iban = mysqli_real_escape_string($tcon, $request->iban);

$account_number = mysqli_real_escape_string($tcon, $request->account_type);

$swift = mysqli_real_escape_string($tcon, $request->swift);

$account_type = mysqli_real_escape_string($tcon, $request->account_type);
//mysqli_real_escape_string(this is to safely transfer data from frontend to backend)

$sql = $dbase->execute("UPDATE  bankd SET `customer_name`='$customer_name',`bank_name`='$bank_name',`branch_name`='$branch_name',`bank_address`='$bank_address',`account_number`='$account_number',`iban`='$iban',`swift`='$swift',`account_type`='$account_type' WHERE `id` ='$id' ");



echo json_encode($sql);

?>