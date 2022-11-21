<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: PUT');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include 'db_connect.php';
$data = json_decode(file_get_contents("php://input"));
$sql = "select * from registration where id='" . $_GET['id'] . "'";
$result = mysqli_query($con, $sql);
$output = "";
while ($rs = mysqli_fetch_assoc($result)) {
    if ($output != "") {
        $output .= ",";
    }
    $output .= '{"first_name":"' . $rs["first_name"] . '",';
    $output .= '"last_name":"' . $rs["last_name"] . '",';
    $output .= '"id":"' . $rs["id"] . '",';
    $output .= '"email":"' . $rs["email"] . '"}';
}
$output = '{"records":[' . $output . ']}';
echo $output;
