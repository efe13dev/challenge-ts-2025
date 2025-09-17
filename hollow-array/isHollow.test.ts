import { describe, expect, it } from "bun:test";

import isHollow, { isHollow as isHollowNamed } from "./isHollow";

// Aseguramos que ambas exportaciones apuntan a la misma función
const impl = isHollow ?? isHollowNamed;

describe("isHollow", () => {
  it("debe retornar true para un arreglo hueco válido con 3 ceros en el centro", () => {
    expect(impl([2, 3, 0, 0, 0, 5, 6])).toBe(true);
  });

  it("debe retornar false si hay diferente número de no-ceros a los lados", () => {
    expect(impl([2, 0, 0, 0, 5, 6])).toBe(false); // 1 a la izquierda, 2 a la derecha
  });

  it("debe retornar false si hay menos de 3 ceros en el bloque central", () => {
    expect(impl([2, 3, 0, 0, 5, 6])).toBe(false);
  });

  it("debe retornar false si hay ceros fuera del bloque central", () => {
    expect(impl([0, 2, 0, 0, 0, 5, 6])).toBe(false);
  });

  it("debe retornar true cuando todo son ceros (bloque central con 0 no-ceros a cada lado)", () => {
    expect(impl([0, 0, 0, 0, 0])).toBe(true);
  });

  it("debe retornar false para arreglo vacío", () => {
    expect(impl([])).toBe(false);
  });

  it("debe retornar false cuando hay múltiples bloques de ceros", () => {
    expect(impl([1, 0, 0, 0, 2, 0])).toBe(false);
  });
});
