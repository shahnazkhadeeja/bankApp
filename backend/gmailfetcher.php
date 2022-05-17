<?php
// include "dBase.php";
// $dbase = new dBase();
// $tcon = $dbase->con;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

set_time_limit(4000);

//Connect to gmail
$imapPath = '{imap.gmail.com:993/imap/ssl}INBOX';
$username = 'induswebjunior@gmail.com';
$password = 'Indus2022';

$inbox = imap_open($imapPath, $username, $password) or die('Cannot connect: ' . imap_last_error());
$status = "success";
$emails = imap_search($inbox, 'ALL');


if (isset($emails)) {
    $output = '';

    rsort($emails);
    $email_data = [];
    $i = 0;
    foreach ($emails as $email_number) {
        $i++;
        if ($i <= 10) {
            $header = imap_headerinfo($inbox, $email_number);

            $from = $header->from[0]->mailbox . "@" . $header->from[0]->host;
            $toaddress = $header->toaddress;
            $replyto = $header->reply_to[0]->mailbox . "@" . $header->reply_to[0]->host;
            $datetime = date("Y-m-d H:i:s", $header->udate);
            $subject = (isset($header->subject)) ? $header->subject : '';


            $toaddress = str_replace('"', '', $toaddress);

            // echo '<strong>To:</strong> '.$toaddress.'<br>';
            // echo '<strong>From:</strong> '.$from.'<br>';
            // if(isset($subject)){
            // echo '<strong>Subject:</strong> '.$subject.'<br>';
            // }
            //get message body
            // $message = (imap_fetchbody($inbox,$email_number,1.1)); 
            $message = quoted_printable_decode(imap_fetchbody($inbox, $email_number, 1.1));
            if ($message == '') {
                $message = (imap_fetchbody($inbox, $email_number, 1));
            }

            $temp_email_data = array('subject' => $subject, 'date' => $datetime, 'from' => $from, 'replyto' => $replyto, 'toaddress' => $toaddress,);
            array_push($email_data, $temp_email_data);
        }
    }


    $data = array('output' => $email_data, 'status' => $status);
}

echo json_encode($data);
