<?php 
    class Categorias{
        
        protected $id;
        public $nombre;
        private $existe = false;

        function __construct($id){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);

            $select = $query->select("categorias", "id=?", null, null, array($id));
        
            if(isset($select[0]['ID'])){
                $this->id = $select[0]['ID'];
                $this->nombre = $select[0]['nombre_categoria'];
                $this->existe = true;
            }
        }
        
        private function insertar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            
            $columnas = 'nombre_categoria';
            $valores = '?';
            $parametros = array($this->nombre);
            $query->insert("categorias", $columnas, $valores, $parametros);
            
            if($query){
                $this->id = $query;
                $this->existe = true;
                return true;
            } else {
                return false;
            }
        }

        public function eliminar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $query->delete("categorias", "id=?", array($this->id));
        }

        private function actualizar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $query->update("categorias", 'nombre_categoria=?', 'id=?', array($this->nombre, $this->id));
        }

        public static function listar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $lista = $query->select("categorias");
            return $lista;
        }

        public function mostrarObjeto(){
            if($this->existe){
                echo"<pre>";
                print_r($this);
                echo"</pre>";     
            }     
        }

        public function guardar(){
            if($this->existe){
                print_r($this->existe);
                return $this->actualizar();
            } else{
                return $this->insertar();
            }
        }
    }
?>