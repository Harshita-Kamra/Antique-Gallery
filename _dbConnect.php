<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "antique gallery";

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn){
    die("Error". mysqli_connect_error());
}
?>