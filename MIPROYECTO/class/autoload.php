<?php

    spl_autoload_register(function($clase){
        require_once str_replace('\\', '/', $clase) . 'php';
    });

    class ConexionDatabase{
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

        public function conectar(){
            $this->conexion = mysqli_connect($this->host, $this->nombreUsuario, $this->contrasenia, $this->database);
            if(!$this-> conexion){
                echo 'No se pudo conectar a la base de datos';
            }
        }

        public function obtenerConexion(){
            return $this->conexion;
        }
    }


    class Database{

        private $conexionDb;

        public function __construct(ConexionDatabase $conexionDb){
            $this-> conexionDb = $conexionDb;
        }

        public function insertarFilas($id, $name){
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "INSERT INTO informacion (id, nombre) VALUES ('$id', '$name')"; 
            if(mysqli_query($conexion, $query)){
                $respuesta = new stdClass();
                $respuesta->estado = 'Exitoso';
                $respuesta->mensaje = 'La informacion fue insertada correctamente';
            } else {
                $respuesta = new stdClass();
                $respuesta->estado = 'error';
                $respuesta->mensaje = 'No se pudo insertar la informacion';
            }
            header('Content-Type: application/json');
            return json_encode($respuesta);
        }
        
        public function consultarFilas($table){
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "SELECT * FROM $table";
            $resultado = mysqli_query($conexion, $query);
            if($resultado){
                $columnas = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
                $columnasJson = json_encode($columnas);
                return $columnasJson;
            } else {
                echo "Error: " . $query . "<br>" . $this->conexion->error;
            }
        }   

        public function consultarTabla(){
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "SHOW TABLES;";
            $resultado = mysqli_query($conexion, $query);
            if($resultado){
                $tablas = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
                $tablaJson = json_encode($tablas);
                return $tablaJson;
            } else {
                echo "Error" . $query . "<br>" . $this->conexion->error;
            }
        }
        
    }
?>