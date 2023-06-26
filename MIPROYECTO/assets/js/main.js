import { validarCampoId, validarCampoNombre } from "./validaciones.js";
import { mostrarMensajeSiEsExitoso, $botonGuardar, $botonCancelar, resetearFormulario } from "./ui.js";

$botonGuardar.onclick = function enviarFormulario() {
  mostrarMensajeSiEsExitoso(validarCampoId(), validarCampoNombre());
};

$botonCancelar.onclick = resetearFormulario;
