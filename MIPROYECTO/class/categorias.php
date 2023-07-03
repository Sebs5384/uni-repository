<?php

    require_once 'autoload.php';

    $db = new database('localhost', 'root', '', 'testeandoo');
    
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $id = $_POST['id'];
        $name = $_POST['nombre'];

        $respuesta = $db->insertar($id, $name);
        echo json_encode($respuesta);
    } elseif($_SERVER["REQUEST_METHOD"] === "GET"){
        $respuesta = $db->consultar();
        echo json_encode($respuesta);
    }



?>