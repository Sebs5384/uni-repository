<?php 

    class Conexion{
        private $host;
        private $nombreUsuario;
        private $contrasenia;
        private $basedatos;

        function __construct($host, $nombreUsuario, $contrasenia, $basedatos){
            $this-> host = $host;
            $this-> nombreUsuario = $nombreUsuario;
            $this-> contrasenia = $contrasenia;
            $this-> basedatos = $basedatos;
            
        }

        public function conectar(){
            try{
                $conectado = $this->conexion = new PDO("mysql:host=$this->host;dbname=$this->basedatos",$this->nombreUsuario,$this->contrasenia);

                if($conectado) echo "Conexion exitosa"; return true;
                
            } catch (Exception $error){
                echo "Fallo la conexion a la base de datos: " . $error->getMessage();
                return false;
            }
        }

        public function obtenerConexion(){
            return $this->conexion;
        }
    }
    

?>