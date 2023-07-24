<?php 
    include '../class/autoload.php';

    if($_SERVER['REQUEST_METHOD'] == "GET"){
        $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
        $conexion->conectar();
        $query = new Basedatos($conexion);
        $listaCategoria = $query->select("categorias");
        echo json_encode($listaCategoria);
    }
?>