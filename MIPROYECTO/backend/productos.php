<?php 

    include '../class/autoload.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $nuevoProducto = new Productos(null);
        $nuevoProducto->nombre=$_POST['nombre'];
        $nuevoProducto->descripcion=$_POST['descripcion'];
        $nuevoProducto->precio=$_POST['precio'];
        $nuevoProducto->categoria=$_POST['categoria'];
        $nuevoProducto->guardar();
    
    } else if(isset($_GET['agregar'])){
        echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
        echo "<style>.techbyte { display: none; }</style>";
        echo "<img src=\"../assets/img/tech-byte-solutions.png\" class=\"techbyte-php\" />";

        include 'views/productos.html';
        die();
    
    }

    $listarProductos = Productos::listar();
    echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
    include './views/lista-productos.html'; 

    
?>