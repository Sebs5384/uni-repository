<?php

    require_once 'autoload.php';

    $conexionDb = new ConexionDatabase('localhost', 'root', '', 'testeandoo');
    $conexionDb->conectar();
    $queries = new Database($conexionDb);
    
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $id = $_POST['id'];
        $name = $_POST['nombre'];

        $respuesta = $queries->insertarFilas($id, $name);
        echo json_encode($respuesta);
    }elseif($_SERVER["REQUEST_METHOD"] === "GET"){
        $resultado = $queries->consultarTabla();
        echo $resultado;
    }




?>