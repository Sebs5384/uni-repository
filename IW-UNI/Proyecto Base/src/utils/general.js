const carrito = [];

function agregarAlCarrito(productoId, productos) {
  const producto = productos.find((producto) => producto.id === Number(productoId));

  if (producto !== undefined) {
    carrito.push(producto);
  } else {
    console.error('El producto no existe.');
  }

  return carrito;
}

function removerDelCarrito(productoId, productos) {
  productos.forEach((producto, index) => {
    if (producto.id === Number(productoId)) {
      productos.splice(index, 1);
    }
  });

  return productos;
}

function manejarClickTabla(event, productos) {
  const productoId = event.target.dataset.id;

  const nuevoCarrito = removerDelCarrito(productoId, productos);
  almacenarProducto('carrito', nuevoCarrito);
}

function manejarClickProductos(event, productos) {
  const productoId = event.target.dataset.id;

  const carritoProductos = agregarAlCarrito(productoId, productos);
  almacenarProducto('carrito', carritoProductos);
}

function calcularCantidades(productosCarrito) {
  if (productosCarrito.every((producto) => 'cantidades' in producto)) return productosCarrito;

  const cantidades = {};

  productosCarrito.forEach((producto, index) => {
    if (cantidades[producto.nombre]) {
      cantidades[producto.nombre]++;
    } else {
      cantidades[producto.nombre] = 1;
    }
  });

  productosCarrito.forEach((producto) => {
    producto.cantidades = cantidades[producto.nombre];
  });

  return productosCarrito;
}

function filtarProductos(productosCarrito) {
  const productos = productosCarrito.filter((producto, index, arrayProductos) => {
    return arrayProductos.findIndex((fruta) => fruta.nombre === producto.nombre) === index;
  });

  return productos;
}
