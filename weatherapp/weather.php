<?php
$arr = array (
array(
    "day" => "Δευτέρα",
    "temperature" => 17,
    "humidity" => 95,
    "status" => "rain"
    ),
    array(
        "day" => "Τρίτη",
        "temperature" => 19,
        "humidity" => 80,
        "status" => "sunny"
    ),
    array(
        "day" => "Τετάρτη",
        "temperature" => 20,
        "humidity" => 70,
        "status" => "cloudywind"
    )
);
echo json_encode($arr);
?>