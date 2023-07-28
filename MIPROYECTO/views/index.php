<?php 
    include "../class/autoload.php";
    
    $ocultarElementos = ".techbyte, #home, #formulario-categorias, #formulario-productos { display: none; }";
    $incluirEstilos = "href=\"assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"";
    $incluirImagen = "src=\"../assets/img/tech-byte-solutions.png\" class=\"techbyte-php\"";
    $incluirAltaCategorias = "id=\"formulario-categorias-nuevo\" href=\"views/categorias.html\"";
    $incluirAltaProductos = "id=\"formulario-productos-nuevo\" href=\"views/productos.html\"";

    $listarProductos = Productos::listar();
    $listarCategorias = Categorias::listar();
    echo <<<HTML
    <style>{$ocultarElementos}</style>
    <link {$incluirEstilos}/>
    <img {$incluirImagen}/>
    <a {$incluirAltaCategorias}>Alta de categorias</a>
    <a {$incluirAltaProductos}>Alta de productos</a>
    HTML;
    include "home.html";
?>