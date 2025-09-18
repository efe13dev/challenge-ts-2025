import { describe, expect, it } from "bun:test";

import { dist, speed } from "./breakingWell";

describe("breakingWell", () => {
  // Test basado en el ejemplo del README
  it("debería calcular correctamente la distancia para v=100, μ=0.7", () => {
    const result = dist(100, 0.7);

    expect(result).toBeCloseTo(83.9598760937531, 10);
  });

  // Test basado en el ejemplo del README
  it("debería calcular correctamente la velocidad para d=83.9598760937531, μ=0.7", () => {
    const result = speed(83.9598760937531, 0.7);

    expect(result).toBeCloseTo(100, 10);
  });

  // Verificar que dist y speed son funciones inversas
  it("deberían ser funciones inversas: dist(speed(d, μ), μ) = d", () => {
    const d = 50;
    const mu = 0.8;
    const v = speed(d, mu);
    const result = dist(v, mu);

    expect(result).toBeCloseTo(d, 10);
  });

  // Verificar que dist y speed son funciones inversas (otro caso)
  it("deberían ser funciones inversas: speed(dist(v, μ), μ) = v", () => {
    const v = 120;
    const mu = 0.6;
    const d = dist(v, mu);
    const result = speed(d, mu);

    expect(result).toBeCloseTo(v, 10);
  });

  // Test con diferentes valores
  it("debería calcular correctamente con diferentes valores", () => {
    const v = 60;
    const mu = 0.5;
    const result = dist(v, mu);

    // d1 = (16.6667)² / (2 * 0.5 * 9.81) = 277.78 / 9.81 ≈ 28.31
    // d2 = 16.6667 * 1 = 16.6667
    // total ≈ 44.98
    expect(result).toBeGreaterThan(44);
    expect(result).toBeLessThan(45);
  });
});
