const carritoProductos = [];

const agregarAlCarrito = (productoId) => {
  if (productoId <= 0) return console.error('El id del producto no puede ser menor o igual a 0.');

  const producto = productos.find((producto) => producto.id === Number(productoId));

  if (producto !== undefined) {
    carritoProductos.push(producto);
  } else {
    console.error('El producto no existe.');
  }
};

function manejarClickProductos(event) {
  const productoId = event.target.dataset.id - 1;

  obtenerProductos(productoId);
}
