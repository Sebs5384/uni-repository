import { manejarErrores } from "../utilidades.js";
import { mostrarErrores } from "../ui.js";

jest.mock("../ui.js", () => ({
  mostrarErrores: jest.fn(),
}));

describe("Testea manejarErrores", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Deberia de retornar 0 cuando no hay errores", () => {
    const noHayError = { id: "" };
    const llavesSinError = Object.keys(noHayError);
    const selector = document.createElement("input");

    mostrarErrores.mockReturnValue(0);
    const resultados = manejarErrores(noHayError, selector);

    expect(resultados).toBe(0);
    expect(mostrarErrores).toHaveBeenCalledWith(llavesSinError, noHayError, selector);
  });

  test("Deberia de devolver 1 si se encuentra un error", () => {
    const errorEnCampo = { id: "El campo ID no puede estar vacio" };
    const llavesConError = Object.keys(errorEnCampo);
    const selector = document.createElement("input");

    mostrarErrores.mockReturnValue(1);
    const resultados = manejarErrores(errorEnCampo, selector);

    expect(resultados).toBe(1);
    expect(mostrarErrores).toHaveBeenCalledWith(llavesConError, errorEnCampo, selector);
  });
});
