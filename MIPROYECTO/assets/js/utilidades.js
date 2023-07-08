import { mostrarErrores } from "./ui.js";

export function manejarErrores(errores, selector) {
  const llaves = Object.keys(errores);
  const noErrores = mostrarErrores(llaves, errores, selector);
  return noErrores;
}

export function removerGuionesBajos(array, index) {
  return array.map((item) => item[index].replace(/_/g, " "));
}
