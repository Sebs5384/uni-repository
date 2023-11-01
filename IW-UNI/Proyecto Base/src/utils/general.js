const carritoProductos = [];

function agregarAlCarrito(productoId, productos) {
  const producto = productos.find((producto) => producto.id === Number(productoId));

  if (producto !== undefined) {
    carritoProductos.push(producto);
  } else {
    console.error('El producto no existe.');
  }
}

function removerDelCarrito(productoId) {
  const productos = cargarProductos('carrito');

  productos.forEach((producto, index) => {
    if (producto.id === Number(productoId)) {
      productos.splice(index, 1);
    }
  });

  console.log(productos);
  return productos;
}

function manejarClickTabla(event) {
  const productoId = event.target.dataset.id;

  const productos = removerDelCarrito(productoId);
}

function manejarClickProductos(event, productos) {
  const productoId = event.target.dataset.id;

  agregarAlCarrito(productoId, productos);
  almacenarProducto('carrito', carritoProductos);
}

function calcularCantidades(productosCarrito) {
  const cantidades = {};

  productosCarrito.forEach((producto, index) => {
    if (cantidades[producto.nombre]) {
      cantidades[producto.nombre]++;
    } else {
      cantidades[producto.nombre] = 1;
    }
  });

  const productos = productosCarrito.filter((producto, index, array) => {
    return array.findIndex((fruta) => fruta.nombre === producto.nombre) === index;
  });

  productos.forEach((producto) => {
    producto.cantidades = cantidades[producto.nombre];
  });

  return productos;
}
