const carritoProductos = [];

function agregarAlCarrito(productoId, productos) {
  const producto = productos.find((producto) => producto.id === Number(productoId));

  if (producto !== undefined) {
    carritoProductos.push(producto);
  } else {
    console.error('El producto no existe.');
  }
}

function manejarClickProductos(event, productos) {
  const productoId = event.target.dataset.id;

  agregarAlCarrito(productoId, productos);
  almacenarProducto('carrito', carritoProductos);
}
