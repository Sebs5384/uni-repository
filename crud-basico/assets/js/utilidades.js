import { mostrarErrores } from "./ui.js";

export function manejarErrores(errores, selector) {
  const llaves = Object.keys(errores);
  const noErrores = mostrarErrores(llaves, errores, selector);
  return noErrores;
}

export function reemplazarEnNombre(nombres, index, remplazar, remplazo) {
  if (typeof nombres === "string") {
    return nombres.replace(remplazar, remplazo);
  } else {
    return nombres.map((item) => item[index].replace(remplazar, remplazo));
  }
}
