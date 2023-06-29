import { validarCampoId, validarCampoNombre } from "./validaciones.js";
import { mostrarMensajeSiEsExitoso, resetearFormulario, $botonEnviar, $botonRestablecer, $campoId, $campoNombre } from "./ui.js";

$botonEnviar.onclick = function enviarFormulario() {
  mostrarMensajeSiEsExitoso(validarCampoId($campoId), validarCampoNombre($campoNombre));
};

$botonRestablecer.onclick = resetearFormulario;
