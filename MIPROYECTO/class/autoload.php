<?php

    spl_autoload_register(function($clase){
        require_once str_replace('\\', '/', $clase) . 'php';
    });

    class database{
        private $host;
        private $nombreUsuario;
        private $contrasenia;
        private $database;
        private $conexion;

        public function __construct($host, $nombreUsuario, $contrasenia, $database){
            $this-> host = $host;
            $this-> nombreUsuario = $nombreUsuario;
            $this-> contrasenia = $contrasenia;
            $this-> database = $database;

            $this->conectar();
        }

        private function conectar(){
            $this->conexion = mysqli_connect($this->host, $this->nombreUsuario, $this->contrasenia, $this->database);
      
        }

        public function insertarFilas($id, $name){
            $respuesta = new stdClass();
            $query = "INSERT INTO informacion (id, nombre) VALUES ('$id', '$name')";
            if($this->conexion->query($query) === true){
                $respuesta->estado = 'Exitoso';
                $respuesta->mensaje = 'La informacion fue insertada correctamente';
            } else {
                $respuesta->estado = 'error';
                $respuesta->mensaje = 'No se pudo insertar la informacion';
            }
            header('Content-Type: application/json');
            return json_encode($respuesta);
        }
        
        public function consultarFilas(){
            $query = "SELECT * FROM informacion";
            $resultado = $this->conexion->query($query);
            if($resultado){
                $columnas = $resultado->fetch_all(MYSQLI_ASSOC);
                $columnasJson = json_encode($columnas);
                return $columnasJson;
            } else {
                echo "Error: " . $query . "<br>" . $this->conexion->error;
            }
        }   

        public function consultarTabla(){
            $query = "SHOW TABLES;";
            $resultado = $this->conexion->query($query);
            if($resultado){
                $tablas = $resultado->fetch_all(MYSQLI_ASSOC);
                $nombreTablas = new stdClass();
                $nombreTablas->tablas = $tablas;
                $tablaJson = json_encode($nombreTablas);
                return $tablaJson;
            } else {
                echo "Error" . $query . "<br>" . $this->conexion->error;
            }
        }
        
    }
?>