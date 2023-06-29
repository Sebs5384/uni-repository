import { validarCampoId } from "../validaciones.js";
import { manejarErrores } from "../utilidades.js";

jest.mock("../utilidades.js", () => ({
  manejarErrores: jest.fn(),
}));

describe("testea validarCampoId", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deberia de llamar a manejarErrores y retornar true si no hay errores", () => {
    manejarErrores.mockReturnValue(0);

    const input = { value: 1234 };
    const result = validarCampoId(input);

    expect(result).toBe(true);
    expect(manejarErrores).toHaveBeenCalledTimes(1);
    expect(manejarErrores).toHaveBeenCalledWith({ id: "" }, "#error-id");
  });

  it("Deberia de llamar a manejarErrores y retornar false si se le pasa un decimal", () => {
    manejarErrores.mockReturnValue(1);

    const input = { value: 1.2 };
    const result = validarCampoId(input);

    expect(result).toBe(false);
    expect(manejarErrores).toHaveBeenCalledTimes(1);
    expect(manejarErrores).toHaveBeenCalledWith({ id: "El campo ID no acepta decimales" }, "#error-id");
  });

  it("Deberia de llamar a manejarErrores y retorna false si se le pasa un input vacio", () => {
    manejarErrores.mockReturnValue(1);

    const input = { value: "" };
    const result = validarCampoId(input);

    expect(result).toBe(false);
    expect(manejarErrores).toHaveBeenCalledTimes(1);
    expect(manejarErrores).toHaveBeenCalledWith({ id: "El campo ID no puede estar vacio" }, "#error-id");
  });

  it("Deberia de llamar a manejarErrores y retornar false si se le pasa un numero que empiece con 0", () => {
    manejarErrores.mockReturnValue(1);

    const input = { value: 0 };
    const result = validarCampoId(input);

    expect(result).toBe(false);
    expect(manejarErrores).toHaveBeenCalledTimes(1);
    expect(manejarErrores).toHaveBeenCalledWith({ id: "El campo ID solo acepta numeros y no puede empezar con 0" }, "#error-id");
  });

  it("Deberia de llamar a manejarErrores y retornar false si se le pasa un numero mayor a 4 digitos", () => {
    manejarErrores.mockReturnValue(1);

    const input = { value: 123456 };
    const result = validarCampoId(input);

    expect(result).toBe(false);
    expect(manejarErrores).toHaveBeenCalledTimes(1);
    expect(manejarErrores).toHaveBeenCalledWith({ id: "El campo ID solo acepta 4 digitos como maximo" }, "#error-id");
  });
});
