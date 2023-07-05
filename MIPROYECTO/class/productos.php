<?php 

    require_once 'autoload.php';

    $conexionDb = new ConexionDatabase('localhost', 'root', '', 'testeandoo');
    $conexionDb->conectar();
    $queries = new database($conexionDb);

    if($_SERVER["REQUEST_METHOD"] === "GET"){
        if(isset ($_GET['table'])){
            $tabla = $_GET['table'];
            $filas = $queries->consultarFilas($tabla);
            echo $filas;
        } else {
            echo "El paramatero de la tabla es requerido, por favor agreguelo al request cuando sea llamado o refiera a autoload.php";
        }
    }
    elseif($_SERVER["REQUEST_METHOD"] === "POST"){
        $id = $_POST['id'];
        $name = $_POST['nombre'];

        $insercion = $queries->insertarFilas($id, $name);
        echo $insercion;
    }
?>