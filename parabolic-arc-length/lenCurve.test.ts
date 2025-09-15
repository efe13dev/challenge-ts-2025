// @bun
import { describe, expect, test } from "bun:test";

import { lenCurve } from "./lenCurve.js";

describe("Tests para lenCurve", () => {
  // Test 1: n = 1 (debería ser la distancia entre (0,0) y (1,1))
  // Pero en la curva y = x^2, el punto final es (1,1), el inicial (0,0)
  // Distancia euclidiana: sqrt((1-0)^2 + (1-0)^2) = sqrt(2) ≈ 1.4142

  test("lenCurve con n=1", () => {
    // Usar Math.SQRT2 (raíz cuadrada de 2) en vez de valor aproximado
    expect(Number(lenCurve(1).toFixed(4))).toBeCloseTo(Math.SQRT2, 3);
  });

  // Test 2: n = 2 (más precisión)
  test("lenCurve con n=2", () => {
    const res = lenCurve(2);

    // Valor esperado aproximado: suma de distancias entre (0,0)-(0.5,0.25) y (0.5,0.25)-(1,1)
    // d1 = sqrt((0.5-0)^2 + (0.25-0)^2) = sqrt(0.25 + 0.0625) = sqrt(0.3125) ≈ 0.5590
    // d2 = sqrt((1-0.5)^2 + (1-0.25)^2) = sqrt(0.25 + 0.5625) = sqrt(0.8125) ≈ 0.9014
    // total ≈ 1.4604
    // El valor esperado ≈ 1.4604 se calcula como suma de distancias, no existe constante estándar
    expect(Number(res.toFixed(4))).toBeCloseTo(1.4604, 3);
  });

  // Test 4: n = 0 (caso borde)
  test("lenCurve con n=0", () => {
    expect(lenCurve(0)).toBe(0);
  });

  // Test 5: n negativo (caso borde)
  test("lenCurve con n=-5", () => {
    expect(lenCurve(-5)).toBe(0);
  });
});
