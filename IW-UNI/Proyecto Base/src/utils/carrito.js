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
  const productoClickeado = event.target.dataset.id;
  const frutaClickeada = event.target.dataset.fruta;

  try {
    return obtenerProductosDeStorage('productos', frutaClickeada);
  } catch (error) {
    agregarAlCarrito(productoClickeado);
    almacenarProducto('productos', carritoProductos);
  }
}

function almacenarProducto(llave, valor) {
  localStorage.setItem(llave, JSON.stringify(valor));
}

function obtenerProductosDeStorage(productos, fruta) {
  const producto = JSON.parse(localStorage.getItem(productos));
  const frutaAlmacendas = producto.some((producto) => producto.nombre === fruta);

  if (!frutaAlmacendas) {
    throw new Error('No se encontro el producto en memoria.');
  }

  return producto;
}
