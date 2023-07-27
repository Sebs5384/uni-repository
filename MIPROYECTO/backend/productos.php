<?php 

    include '../class/autoload.php';

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
    
    } else if(isset($_GET['agregar'])){
        
        echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
        echo "<style>.techbyte { display: none; }</style>";
        echo "<img src=\"../assets/img/tech-byte-solutions.png\" class=\"techbyte-php\" />";
        echo "<style>.categorias { display: none; }</style>";

        $listarCategorias = Categorias::listar();
        include 'views/productos.html';
        die();
    
    }

    $listarProductos = Productos::listar();
    echo "<link href=\"../assets/css/estilos.css\" rel=\"stylesheet\" type=\"text/css\"/>";
    include './views/lista-productos.html'; 

    
?>