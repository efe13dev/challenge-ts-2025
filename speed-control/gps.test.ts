import { describe, expect, test } from "bun:test";

import { gps } from "./gps.ts";

describe("Control de Velocidad - Tests", () => {
  test("Ejemplo del README", () => {
    const s = 15;
    const x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];

    expect(gps(s, x)).toBe(74);
  });

  test("Coche sin movimiento - array vacío", () => {
    const s = 15;
    const x: number[] = [];

    expect(gps(s, x)).toBe(0);
  });

  test("Coche sin movimiento - un solo elemento", () => {
    const s = 15;
    const x = [5.0];

    expect(gps(s, x)).toBe(0);
  });

  test("Velocidades constantes", () => {
    const s = 10;
    const x = [0.0, 0.5, 1.0, 1.5, 2.0];

    // Cada sección recorre 0.5 unidades en 10 segundos
    // Velocidad = (3600 * 0.5) / 10 = 180 por hora
    expect(gps(s, x)).toBe(180);
  });

  test("Velocidades variables", () => {
    const s = 20;
    const x = [0.0, 0.23, 0.46, 0.69, 1.0, 1.4, 1.8];

    // La mayor diferencia es 0.4 unidades (entre 1.0 y 1.4)
    // Velocidad máxima = (3600 * 0.4) / 20 = 72 por hora
    expect(gps(s, x)).toBe(72);
  });
});
