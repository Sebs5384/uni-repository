<?php 

    require_once 'autoload.php';

    $conexionDb = new ConexionDatabase('localhost', 'root', '', 'testeandoo');
    $conexionDb->conectar();
    $queries = new database($conexionDb);

    if($_SERVER["REQUEST_METHOD"] === "GET"){
        if(isset ($_GET['table'])){
            $table = $_GET['table'];
            $respuesta = $queries->consultarFilas($table);
            echo json_encode($respuesta);
        } else {
            echo "El paramatero de la tabla es requerido, por favor agreguelo al request cuando sea llamado o refiera a productos.php";
        }
    }

?>