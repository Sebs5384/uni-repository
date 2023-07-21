<?php 
    
    class Productos{

        protected $id;
        public $nombre;
        public $descripcion;
        public $precio;
        public $categoria;
        public $existe = false;


        function __construct($id){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $select = $query->select("productos", "id=?", null, null, array($id));
            print_r($select);

            if(isset($select[0]['ID'])){

                $this->id = $select[0]['ID'];
                $this->nombre = $select[0]['nombre_producto'];
                $this->descripcion = $select[0]['descripcion_producto'];
                $this->precio = $select[0]['precio_producto'];
                $this->categoria = $select[0]['id_categoria'];
                $this->existe = true;
            }
        }

        private function insertar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $columnas = 'nombre_producto, descripcion_producto, precio_producto, id_categoria';
            $valores = '?,?,?,?';
            $parametros = array($this->nombre, $this->descripcion, $this->precio, $this->categoria);
            $query->insert('productos', $columnas, $valores, $parametros);
        
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
            $query->delete("productos", "id=?", array($this->id));
        }      

        private function actualizar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $query->update("productos", 'nombre_productos=?, descripcion_productos=?, precio_productos=?, id_categorias=?', 'id=?', array( $this->id, $this->nombre, $this->descripcion, $this->precio, $this->categoria));
        }

        public static function listar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            return $query->select("productos");
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