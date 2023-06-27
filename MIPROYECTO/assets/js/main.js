import { validarCampoId, validarCampoNombre } from "./validaciones.js";
import { mostrarMensajeSiEsExitoso, resetearFormulario, $botonEnviar, $botonRestablecer } from "./ui.js";

$botonEnviar.onclick = function enviarFormulario() {
  mostrarMensajeSiEsExitoso(validarCampoId(), validarCampoNombre());
};

$botonRestablecer.onclick = resetearFormulario;
