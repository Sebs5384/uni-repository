<?php 

    include "../class/autoload.php";

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        $nuevaCategoria = new Categorias(null);
        $nuevaCategoria->nombre=$_POST['nombre'];
        $nuevaCategoria->guardar();

    } else if(isset($_GET['agregar'])){
        echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
        echo "<style>.techbyte { display: none; }</style>";
        echo "<img src=\"../assets/img/tech-byte-solutions.png\" class=\"techbyte-php\" />";
        include "views/categorias.html";
        die();
    }

    $listarCategorias = Categorias::listar();
    echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
    include "views/lista-categorias.html";
?>