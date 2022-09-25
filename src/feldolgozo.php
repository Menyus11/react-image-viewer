<?php

header("Content-Type:application/json;");

if (in_array($_SERVER["HTTP_ORIGIN"], ['http://localhost:3000', 'http://127.0.0.1']))
    header('Access-Control-Allow-Origin: ' .$_SERVER["HTTP_ORIGIN"]);
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

print_r(
    json_decode(
        file_get_contents("php://input")
    )
);
