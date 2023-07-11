<?php

    require_once 'autoload.php';

    $conexionDb = new ConexionDatabase('localhost', 'root', '', 'testeandoo');
    $conexionDb->conectar();
    $queries = new Database($conexionDb);
    

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        
        if(isset($_POST['categoria'])){
            $categoria = $_POST['categoria'];
            $tablaCreada = $queries->crearTabla($categoria);
            echo $tablaCreada;
        } else {
            echo "El nombre de la tabla a crear es requerido, por favor agreguelo al request cuando sea llamado o refiera a autoload.php";
        }
    
    }elseif($_SERVER["REQUEST_METHOD"] === "GET"){
        $tablas = $queries->consultarTablas();
        echo $tablas;
    }elseif($_SERVER["REQUEST_METHOD"] === "DELETE"){
        $categoria = $_GET['tabla'];
        $tablaBorrada = $queries->borrarTabla($categoria);
        echo $tablaBorrada;
    }




?>