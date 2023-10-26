const carritoProductos = [];

const agregarAlCarrito = (productoId) => {
  if (productoId <= 0) return console.error('El id del producto no puede ser menor o igual a 0.');

  const productoExistente = carritoProductos.find((producto) => producto.id === Number(productoId));
  if (productoExistente) return alert('El producto ya existe en el carrito.');

  const producto = productos.find((producto) => producto.id === Number(productoId));

  if (producto !== undefined) {
    carritoProductos.push(producto);
    console.table(carritoProductos);
  } else {
    console.error('El producto no existe.');
  }
};

function manejarClickProductos(event) {
  const productoClickeado = event.target.dataset.id;

  agregarAlCarrito(productoClickeado);
}
