<?php 

    require_once 'autoload.php';

    $conexionDb = new ConexionDatabase('localhost', 'root', '', 'testeandoo');
    $conexionDb->conectar();
    $queries = new database($conexionDb);

    if($_SERVER["REQUEST_METHOD"] === "GET"){
        if(isset ($_GET['tabla'])){
            $tabla = $_GET['tabla'];
            $filas = $queries->consultarFilas($tabla);
            echo $filas;
        } else {
            echo "El paramatero de la tabla es requerido, por favor agreguelo al request cuando sea llamado o refiera a autoload.php";
        }
    }
    elseif($_SERVER["REQUEST_METHOD"] === "POST"){
        if(isset ($_GET['tabla'])){
            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $precio = $_POST['precio'];
            $tabla = $_GET['tabla'];

            $insercion = $queries->insertarFilas($nombre, $descripcion, $precio, $tabla);
            echo $insercion;
        } else{
            echo "El paramatero de la tabla es requerido, por favor agreguelo al request cuando sea llamado o refiera a autoload.php";
        }
        
    }
?>