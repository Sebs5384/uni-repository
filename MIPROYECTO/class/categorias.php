<?php

    require_once 'autoload.php';

    $conexionDb = new ConexionDatabase('localhost', 'root', '', 'testeandoo');
    $conexionDb->conectar();
    $queries = new Database($conexionDb);
    

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        
        if(isset($_POST['categoria'])){
            $nombreCategoria = $_POST['categoria'];
            $crearTable = $queries->crearTabla($nombreCategoria);
            echo $crearTable;
        } else {
            echo "El nombre de la tabla a crear es requerido, por favor agreguelo al request cuando sea llamado o refiera a autoload.php";
        }
    
    }elseif($_SERVER["REQUEST_METHOD"] === "GET"){
        $tablas = $queries->consultarTabla();
        echo $tablas;
    }




?>