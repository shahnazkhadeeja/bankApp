<?php
include "dBase.php";
$dbase= new dBase();
$tcon=$dbase->con;


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include('upload/class.upload.php');
// error_reporting(0);
$response = array('status' => 'fail', 'message' => 'Something went wrong Please try again');

if (!empty($_FILES) ) {

    if (isset($_POST['APIKEY'])) {
        $key_ = mysqli_real_escape_string($tcon, $_POST['APIKEY']);
        // $key = md5($key_);
        // check API Validity
      

            if (isset($_POST['id_data'])) {

                $id_data = json_decode($_POST['id_data']);
                echo($id_data);

                // if (isset($id_data->refID) and isset($id_data->for)) {
                  $customer_name =mysqli_real_escape_string($tcon,$id_data->customer_name);

                  $bank_name = mysqli_real_escape_string($tcon,$id_data->bank_name);
                  
                  $branch_name = mysqli_real_escape_string($tcon,$id_data->branch_name);
                  
                  $bank_address = mysqli_real_escape_string($tcon,$id_data->bank_address);
                  
                  $iban = mysqli_real_escape_string($tcon,$id_data->iban);
                  
                  $account_number = mysqli_real_escape_string($tcon,$id_data->account_type);
                  
                  $swift = mysqli_real_escape_string($tcon,$id_data->swift);
                  
                  $account_type = mysqli_real_escape_string($tcon,$id_data->account_type);
                    
                  
                            //   $path = '../../uploads/';
                            // if (isset($_FILES['file'])) {
                            //     $attach = $dbase->file_upload('file', $path, array('jpg', 'jpeg', 'png', 'gif', 'JPG', 'PNG'));
                            // }
                            // $attach_2 = '';
                            
                            $dbase->execute("INSERT INTO  bankd ( `id`,`customer_name`, `bank_name`, `branch_name`, `bank_address`, `account_number`, `iban`, `swift`, `account_type`,`image`) VALUES ('id','$customer_name','$bank_name','$branch_name','$bank_address','$account_number','$iban','$swift','$account_type','$image_name')");
                            $response = array('status' => 'success', 'message' => 'data saved', 'id' => $docID);
                        }
                    }
                }
            // }
        


echo json_encode($response);





// $final_out=array('status'=>'fail');



// $file=$_FILES['file'];




// if(isset($postdata) && !empty($postdata))
// {

  
  // Extract the data.
  // $request = json_decode($postdata);

  
  //Validate.
  
  
  // if(trim($request->customer_name) === '' || $request->bank_name < 0)
  // {
  //   return http_response_code(400);
  // }
// get the post records

// $image_name=uniqid().".jpg";
// $file =$request->file;
// print_r($file);
// $customer_name =mysqli_real_escape_string($tcon,$request->customer_name);

// $bank_name = mysqli_real_escape_string($tcon,$request->bank_name);

// $branch_name = mysqli_real_escape_string($tcon,$request->branch_name);

// $bank_address = mysqli_real_escape_string($tcon,$request->bank_address);

// $iban = mysqli_real_escape_string($tcon,$request->iban);

// $account_number = mysqli_real_escape_string($tcon,$request->account_type);

// $swift = mysqli_real_escape_string($tcon,$request->swift);

// $account_type = mysqli_real_escape_string($tcon,$request->account_type);
// //mysqli_real_escape_string(this is to safely transfer data from frontend to backend)

// $dbase->execute("INSERT INTO  bankd ( `id`,`customer_name`, `bank_name`, `branch_name`, `bank_address`, `account_number`, `iban`, `swift`, `account_type`,`image`) VALUES ('id','$customer_name','$bank_name','$branch_name','$bank_address','$account_number','$iban','$swift','$account_type','$image_name')");
// header("location:index.php");

//     }
//     else{
//         echo "Invalid email ID";
//     }


// }else{
//     echo "Please fill mandatory fields";
// }

// }else{
//     echo "Please fill mandatory fields";

// $final_out=array('status'=>'DONE');


// }

// echo json_encode($final_out);
