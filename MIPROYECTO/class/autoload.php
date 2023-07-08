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
        
        public function crearTabla($nombre){
            $conexion = $this->conexionDb->obtenerConexion();
            
            $tablaSeleccionada = "SHOW TABLES LIKE '$nombre'";
            $verificarTablaExiste = mysqli_query($conexion, $tablaSeleccionada);

            if(mysqli_num_rows($verificarTablaExiste) > 0){
                $respuesta = new stdClass();
                $respuesta->estado = 'existente';
                $respuesta->mensaje = 'La tabla ya existe';
            } else{
            
                $query = "CREATE TABLE $nombre (id SERIAL PRIMARY KEY, nombre_producto VARCHAR(15), descripcion_producto VARCHAR(50), precio FLOAT, update_at TIMESTAMP, image BLOB)";
                $queryExitosa = mysqli_query($conexion, $query);

                if($queryExitosa){
                    $respuesta = new stdClass();
                    $respuesta->estado = 'Exitoso';
                    $respuesta->mensaje = 'La tabla fue creada correctamente';
                } else {
                    $respuesta = new stdClass();
                    $respuesta->estado = 'Error';
                    $respuesta->mensaje = 'No se pudo crear la tabla';
                }
            }
            
            $respuestaJson = json_encode($respuesta);
            return $respuestaJson;
        }

        
        public function consultarTablas(){
            
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "SHOW TABLES;";
            $queryExitosa = mysqli_query($conexion, $query);
            
            if($queryExitosa){
                $tablas = mysqli_fetch_all($queryExitosa, MYSQLI_ASSOC);
                $tablasJson = json_encode($tablas);
                return $tablasJson;
            } else {
                echo "Error, no se pudo consultar la tablas";
            }
        }

        public function borrarTabla($tabla){
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "DROP TABLE $tabla";
            $queryExitosa = mysqli_query($conexion, $query);
            
            if($queryExitosa){
                $respuesta = new stdClass();
                $respuesta->estado = 'Exitoso';
                $respuesta->mensaje = 'La tabla fue borrada correctamente';
            } else {
                $respuesta = new stdClass();
                $respuesta->estado = 'Error';
                $respuesta->mensaje = 'No se pudo borrar la tabla';
            }
            $respuestaJson = json_encode($respuesta);
            return $respuestaJson;
        }


        public function insertarFilas($id, $nombre){
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "INSERT INTO placasdevideo (nombre_producto, tipo_categoria) VALUES ('$id', '$nombre')"; 
            $queryExitosa = mysqli_query($conexion, $query);

            if($queryExitosa){
                $respuesta = new stdClass();
                $respuesta->estado = 'Exitoso';
                $respuesta->mensaje = 'La informacion fue insertada correctamente';
            } else {
                $respuesta = new stdClass();
                $respuesta->estado = 'error';
                $respuesta->mensaje = 'No se pudo insertar la informacion';
            }
            
            $respuestaJson =  json_encode($respuesta);
            return $respuestaJson;
        }
        
        public function consultarFilas($table){
            
            $conexion = $this->conexionDb->obtenerConexion();
            $query = "SELECT * FROM $table";
            $queryExitosa = mysqli_query($conexion, $query);
            
            if($queryExitosa){
                $columnas = mysqli_fetch_all($queryExitosa, MYSQLI_ASSOC);
                $columnasJson = json_encode($columnas);
                return $columnasJson;
            } else {
                echo "Error, no se pudo consultar las filas";
            }
        }   
    }
?>