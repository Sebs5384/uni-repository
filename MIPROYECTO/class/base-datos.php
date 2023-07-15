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
                $conectado = $this->conexion = mysqli_connect($this->host, $this->nombreUsuario, $this->contrasenia,  $this->basedatos);

                if($conectado) echo "Conexion exitosa"; return true;
                
            } catch (Exception $error){
                echo "Fallo la conexion a la base de datos: " . $error->getMessage();
                return false;
            }
        }

        public function obtenerConexion(){
            $conexionObtenida = $this->conexion;
            return $conexionObtenida;
        }
    }
    
    class Basedatos{

        private $conexionBd;

        function __construct(Conexion $conexionBd){
            $this-> conexionBd = $conexionBd;
        }
        
        public function consultarFilas($tabla){
            try{
                $conexion = $this->conexionBd->obtenerConexion();
                $consulta = "SELECT * FROM $tabla";
                $consultaExitosa = mysqli_query($conexion, $consulta);

                if($consultaExitosa){
                    $filas = mysqli_fetch_all($consultaExitosa, MYSQLI_ASSOC);
                    print_r($filas);
                    return $filas;
                }

            } catch(Exception $error){
                echo "Fallo la consulta a las filas: " . $error->getMessage();
            }

        }
    }
?>