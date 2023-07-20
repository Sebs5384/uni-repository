<?php 

    class Autoload{

        static public function cargarClases($clase){
            $clases = array();
            $ruta = __DIR__ . DIRECTORY_SEPARATOR;
            $clases['Conexion'] = $ruta. "base-datos.php";
            $clases['Basedatos'] = $ruta. "base-datos.php";
            $clases['Productos'] = $ruta. "productos.php";
            $clases['Categorias'] = $ruta. "categorias.php";

            if(isset($clases[$clase])){
                if(file_exists($clases[$clase])){
                    include $clases[$clase];
                }
            } else {
                throw new Exception("Clase no encontrada");
            }
        }
    }
    
    spl_autoload_register('Autoload::cargarClases');

?>