<?php

$object = new stdClass();
$dir = $_SERVER["DOCUMENT_ROOT"] . "/arquivos/";
 $urlfile = $dir . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $urlfile)){
	$object->mensagem = "Arquivo salvo";
}else{
	$object->mensagem = "Erro";
	$object->log = $_FILES;
}




echo json_encode($object);



?>