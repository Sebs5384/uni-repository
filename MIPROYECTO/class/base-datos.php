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

                if($conectado) echo "Conexion exitosa <br><br>"; return true;
                
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
        

        public function select($tabla){
            try{
                $conexion = $this->conexionBd->obtenerConexion();
                $consulta = "SELECT * FROM $tabla";
                $consultaExitosa = $conexion->query($consulta);

                if($consultaExitosa){
                    $filas = $consultaExitosa->fetchAll(PDO::FETCH_ASSOC);
                    print_r($filas);
                    return $filas;
                }

            } catch(Exception $error){
                echo "Fallo la consulta a las filas: " . $error->getMessage();
            }

        }
    }

    $db = new Conexion('localhost', 'root', '', 'miproyecto');
    $db->conectar();
    $query = new Basedatos($db);

    $query->select('productos');
?>