import { enviarFormulario, resetearFormulario, $botonEnviar, $botonRestablecer } from "./ui.js";
import { $camposProducto } from "./ui.js";

$botonEnviar.onclick = () => {
  enviarFormulario("productos", $camposProducto);
};

$botonRestablecer.onclick = () => {
  resetearFormulario(".productos");
};
