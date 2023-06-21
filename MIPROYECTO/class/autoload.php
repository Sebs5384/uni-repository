<?php /* @autor Sebastian Araya */
    
    class database{
        private $host;
        private $nombreUsuario;
        private $contrasenia;
        private $database;
        private $conexion;

        public function __construct($host, $nombreUsuario, $contrasenia, $database){
            $this-> host = $host;
            $this-> username = $nombreUsuario;
            $this-> password = $contrasenia;
            $this-> database = $database;

            $this->conectar();
        }

        private function conectar(){
            $this->conexion = mysqli_connect($this->host, $this->username, $this->password, $this->database);
            if($this->conexion){
                Echo "La conexion a la base de datos fue exitosa";
            } else{
                Echo "No se pudo conectar a la base de datos";
            }
        }

    }

    $db = new database('localhost', 'root', '', 'miproyecto')

?>