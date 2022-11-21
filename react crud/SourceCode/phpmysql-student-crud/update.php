<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: PUT');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include 'db_connect.php';
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;

$sql = "UPDATE registration set first_name='$first_name', last_name='$last_name', email='$email' where id='$id'";
$result = mysqli_query($con, $sql);
if ($result) {
    echo json_encode(['message' => 'Student Updated successfully.']);
} else {
    echo json_encode(['message' => 'Student not added!']);
}
