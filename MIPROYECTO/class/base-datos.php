<?php 

    class Conexion{
        private $databaseDriver;
        private $host;
        private $nombreUsuario;
        private $contrasenia;
        private $basedatos;

        function __construct($databaseDriver, $host, $nombreUsuario, $contrasenia, $basedatos){
            $this-> databaseDriver = $databaseDriver;
            $this-> host = $host;
            $this-> nombreUsuario = $nombreUsuario;
            $this-> contrasenia = $contrasenia;
            $this-> basedatos = $basedatos;
            
        }

        public function conectar(){
            try{
                $conectado = $this->conexion = new PDO("$this->databaseDriver:host=$this->host;dbname=$this->basedatos",$this->nombreUsuario,$this->contrasenia);

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
        

        public function select($tabla, $filtro = null, $orden = null, $limite = null){
            try{
                $conexion = $this->conexionBd->obtenerConexion();

                $consulta = "SELECT * FROM $tabla";
                if($filtro != null){
                    $consulta .= " WHERE " . $filtro;
                }
                if($orden != null){
                    $consulta .= " ORDER BY " . $orden;
                }
                if($limite != null){
                    $consulta .= " LIMIT " . $limite;
                }
                
                $consultaExitosa = $conexion->query($consulta);

                if($consultaExitosa){
                    $filas = $consultaExitosa->fetchAll(PDO::FETCH_ASSOC);
                    
                    echo "<table>";
                    echo "<tr>";
                    foreach ($filas[0] as $columna => $valor) {
                        echo "<th>$columna</th>";
                    }
                    echo "</tr>";
                    foreach ($filas as $fila) {
                        echo "<tr>";
                        foreach ($fila as $valor) {
                            echo "<td>$valor</td>";
                        }
                        echo "</tr>";
                    }
                    echo "</table>";
                    return $filas;
                }

            } catch(Exception $error){
                echo "Fallo la consulta a las filas: " . $error->getMessage();
            }

        }

        public function delete($tabla, $filtro = null){
            try{
                $conexion = $this->conexionBd->obtenerConexion();

                $consulta = "DELETE FROM $tabla WHERE " . $filtro;
                $consultaExitosa = $conexion->query($consulta);

                if($consultaExitosa) echo "Eliminacion exitosa"; return true;
        
            } catch(Exception $error){
                echo "Fallo la eliminacion: " . $error->getMessage();
            }
        }

        public function insert($tabla, $columnas, $valores){
            try{
                $conexion = $this->conexionBd->obtenerConexion();

                $consulta = "INSERT INTO $tabla ($columnas) VALUES ($valores)";
                $consultaExitosa = $conexion->query($consulta);
    
                if($consultaExitosa) echo "Registro exitoso"; return true;
    
            } catch(Exception $error){
                echo "Fallo la insercion: " . $error->getMessage();
            }
      

        }
    }

    $db = new Conexion('mysql','localhost', 'root', '', 'miproyecto');
    $db->conectar();
    $query = new Basedatos($db);

    $query->select('productos', null, 'ID asc', '3');
    //$query->delete('productos', 'id = 2');
    $query->insert('productos', 'nombre_producto, descripcion_producto, precio_producto, id_categoria', '"RTX-3000", "SERIES 3000", "3000", "1"');
?>