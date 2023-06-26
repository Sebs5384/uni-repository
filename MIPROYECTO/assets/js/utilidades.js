import { mostrarErrores } from "./ui.js";

export function obtenerElemento(selector) {
  const $elemento = document.querySelector(selector);
  return $elemento;
}

export function manejarErrores(errores, selector) {
  const llaves = Object.keys(errores);
  const noErrores = mostrarErrores(llaves, errores, selector);
  return noErrores;
}
