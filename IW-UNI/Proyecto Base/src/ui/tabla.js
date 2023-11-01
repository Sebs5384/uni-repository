function crearTablaProductos(productos, manejarClickTabla) {
  const $listaProductos = document.querySelector('#lista-productos');

  productos.forEach((producto) => {
    const $fila = document.createElement('tr');
    const $item = document.createElement('th');
    const $descripcion = document.createElement('th');
    const $precioUnidad = document.createElement('th');
    const $unidades = document.createElement('th');
    const $importe = document.createElement('th');
    const $contenedorBoton = document.createElement('th');
    const $botonEliminarProducto = document.createElement('button');

    $fila.className = 'centrar';
    $botonEliminarProducto.className = 'button button-outline button-small';

    $item.innerText = `${producto.nombre}`;
    $unidades.innerText = `${producto.cantidades}`;
    $importe.innerText = `$ ${producto.precio * producto.cantidades}`;
    $descripcion.innerText = `${producto.descripcion}`;
    $precioUnidad.innerText = `$ ${producto.precio}`;

    $botonEliminarProducto.innerText = 'x';
    $botonEliminarProducto.dataset.id = producto.id;
    $botonEliminarProducto.onclick = manejarClickTabla;

    $fila.appendChild($item);
    $fila.appendChild($descripcion);
    $fila.appendChild($precioUnidad);
    $fila.appendChild($unidades);
    $fila.appendChild($importe);
    $contenedorBoton.appendChild($botonEliminarProducto);
    $fila.appendChild($contenedorBoton);
    $listaProductos.appendChild($fila);
  });
}
