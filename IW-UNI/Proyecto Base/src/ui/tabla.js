function crearTablaProductos(productos) {
  const $listaProductos = document.querySelector('#lista-productos');

  console.log('hola');
  console.log($listaProductos);
  productos.forEach((producto) => {
    const $item = document.createElement('th');
    const $descripcion = document.createElement('th');
    const $precioUnidad = document.createElement('th');
    const $unidades = document.createElement('th');
    const $importe = document.createElement('th');
    const $contenedorBoton = document.createElement('th');
    const $botonEliminarProducto = document.createElement('button');

    $item.innerText = `hola`;
    $descripcion.innerText = `holamundo`;
    $precioUnidad.innerText = `$`;
    $botonEliminarProducto.innerText = 'x';

    $listaProductos.appendChild($item);
    $listaProductos.appendChild($descripcion);
    $listaProductos.appendChild($precioUnidad);
    $listaProductos.appendChild($unidades);
    $listaProductos.appendChild($importe);
    $contenedorBoton.appendChild($botonEliminarProducto);
    $listaProductos.appendChild($contenedorBoton);
  });
}
