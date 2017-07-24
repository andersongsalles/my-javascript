<?php
$str = file_get_contents('json.txt');

$obj = new stdClass;
$obj->codigo = 1;
$obj->uf = "MG";
$obj->nome = "Minas Gerais";
$response = [];

array_push($response, $obj);

$obj2 = new stdClass;
$obj2->codigo = 2;
$obj2->uf = "SP";
$obj2->nome = "São Paulo";

array_push($response, $obj2);

$obj3 = new stdClass;
$obj3->codigo = 3;
$obj3->uf = "GO";
$obj3->nome = "Goiás";

array_push($response, $obj3);

//echo json_encode($response, JSON_UNESCAPED_UNICODE);
//// resultado: {"a":"áéíóú -------- \/\/"}

echo json_encode($response, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
// resultado: {"a":"áéíóú -------- //"}

//echo json_encode($response);