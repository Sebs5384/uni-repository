<?php 

    include '../class/autoload.php';

    $ocultarElementos = ".techbyte, #home, #formulario-categorias { display: none; }";
    $incluirEstilos = "href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"";
    $incluirImagen = "src=\"../assets/img/tech-byte-solutions.png\" class=\"techbyte-php\"";
    $incluirHome = "id=\"nuevo-home\" href=\"../views/home.html\"";
    $incluirAltaCategorias = "id=\"formulario-categorias-nuevo\" href=\"views/categorias.html\"";

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $nuevoProducto = new Productos(null);
        $nuevoProducto->nombre=$_POST['nombre'];
        $nuevoProducto->descripcion=$_POST['descripcion'];
        $nuevoProducto->precio=$_POST['precio'];
        $nuevoProducto->categoria=$_POST['categoria'];
        
        $imagenName = $_FILES['imagen']['name'];
        $imagenTmpName = $_FILES['imagen']['tmp_name'];
        $folder = '../assets/img/';
        move_uploaded_file($imagenTmpName, $folder.$imagenName);
        $nuevoProducto->imagen=$folder.$imagenName;

        $nuevoProducto->guardar();
    
    } else if(isset($_GET['agregar-producto'])){
        
        echo <<<HTML
        <style>{$ocultarElementos}</style>
        <link {$incluirEstilos}/>
        <img {$incluirImagen}/>
        <a {$incluirHome}>Home</a>
        <a {$incluirAltaCategorias}>Alta de categorias</a>
        HTML;
        
        $listarCategorias = Categorias::listar();
        include 'views/productos.html';
        die();
    
    }

    $listarProductos = Productos::listar();
    echo "<link ${incluirEstilos}/>";
    include './views/lista-productos.html'; 

    
?>