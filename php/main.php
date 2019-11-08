<?php

$comando = $_GET['data'];

$object = new stdClass();

if($comando == 'pull'){
		
	$object->lista = scandir("../arquivos");


}else if ($comando == 'push') {
	# code...
}



echo json_encode($object);


?>