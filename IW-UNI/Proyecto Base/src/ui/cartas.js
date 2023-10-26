function crearCartasProductos(productos, callback) {
  const $contenedorCartas = document.querySelector('#contenedor-cartas');

  productos.forEach((producto, indice) => {
    const $carta = document.createElement('div');
    const $imagenCarta = document.createElement('div');
    const $nombreCarta = document.createElement('div');
    const $precioCarta = document.createElement('div');
    const $contenedorBotonAgregar = document.createElement('div');
    const $botonAgregar = document.createElement('button');

    $carta.className = 'card';
    $imagenCarta.className = 'card-image';
    $nombreCarta.className = 'card-name';
    $precioCarta.className = 'card-price';
    $contenedorBotonAgregar.className = 'card-button';
    $botonAgregar.className = 'button button-outline boton-agregar';

    $imagenCarta.innerText = `${producto.imagen}`;
    $nombreCarta.innerText = producto.nombre;
    $precioCarta.innerText = `$ ${producto.precio}`;
    $botonAgregar.innerText = '+';

    $botonAgregar.id = `agregar-producto-${indice + 1}`;
    $botonAgregar.dataset.id = `${indice + 1}`;
    $botonAgregar.onclick = (event) => callback(event);

    $contenedorBotonAgregar.appendChild($botonAgregar);
    $carta.appendChild($imagenCarta);
    $carta.appendChild($nombreCarta);
    $carta.appendChild($precioCarta);
    $carta.appendChild($contenedorBotonAgregar);
    $contenedorCartas.appendChild($carta);
  });
}
