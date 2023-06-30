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
            if($this->conexion){
                echo "La conexion a la base de datos fue exitosa <br>";
            } else{
                echo "No se pudo conectar a la base de datos";
            }
        }

        public function insertar($id, $name){
            $query = "INSERT INTO informacion (id, nombre) VALUES ('$id', '$name')";
            if($this->conexion->query($query) === true){
                echo "La informacion fue insertada correctamente";
            } else {
                echo "No se inserto correctamente";
            }
        }
    }




?>