<?php 

    class Autoload{

        static public function cargarClases($clase){
            $clases = [
                'Conexion' => 'base-datos.php',
                'Basedatos' => 'basedatos.php',
                'Productos' => 'productos.php',
            ];

            $ruta = __DIR__ . DIRECTORY_SEPARATOR;
            
            if(isset($clases[$clase])){
                include $clases[$clase];
            } else {
                throw new Exception("Clase no encontrada");
            }
        }
    }
    
    spl_autoload_register('Autoload::cargarClases');

?>