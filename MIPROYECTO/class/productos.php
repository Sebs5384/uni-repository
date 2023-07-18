<?php 

    include "base-datos.php";

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

        public function mostrarObjeto(){
            if($this->existe){
                echo"<pre>";
                print_r($this);
                echo"</pre>";     
            }
           
        }

        private function insertar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            $query->insert('productos', 'nombre_productos=?, descripcion_productos=?, precio_productos=?, id_categorias=?', '?,?,?,?', array($this->nombre, $this->descripcion, $this->precio, $this->categoria));
        
            if($query){
                $this->id = $query;
                $this->existe = true;
                return true;
            } else {
                return false;
            }
        }

        public static function listar(){
            $conexion = new Conexion('mysql', 'localhost', 'root', '', 'miproyecto');
            $conexion->conectar();
            $query = new Basedatos($conexion);
            return $query->select("productos");
        }
    }

    $verProductos = new Productos(3);
    $verProductos->mostrarObjeto();
    $verProductos::listar();
    
?>