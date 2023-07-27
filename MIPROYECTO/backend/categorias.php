<?php 

    include "../class/autoload.php";

    $ocultarElementos = ".techbyte, #home, #formulario-productos { display: none; }";
    $incluirEstilos = "href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"";
    $incluirImagen = "src=\"../assets/img/tech-byte-solutions.png\" class=\"techbyte-php\"";
    $incluirHome = "id=\"nuevo-home\" href=\"../views/home.html\"";
    $incluirAltaProductos = "id=\"formulario-productos-nuevo\" href=\"../views/productos.html\"";

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        $nuevaCategoria = new Categorias(null);
        $nuevaCategoria->nombre=$_POST['nombre'];
        $nuevaCategoria->guardar();

    } else if(isset($_GET['agregar-categoria'])){
        echo <<<HTML
        <style>{$ocultarElementos}</style>
        <link {$incluirEstilos}/>
        <img {$incluirImagen}/>
        <a {$incluirHome}>Home</a>
        <a {$incluirAltaProductos}>Alta de productos</a>
        HTML;
        include "views/categorias.html";
        die();
    }

    $listarCategorias = Categorias::listar();
    echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
    include "views/lista-categorias.html";
?>