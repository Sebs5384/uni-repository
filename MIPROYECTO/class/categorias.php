<?php

    require_once 'autoload.php';

    $db = new database('localhost', 'root', '', 'testeandoo');
    
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $id = $_POST['id'];
        $name = $_POST['nombre'];

        $db->insertar($id, $name);
    }



?>