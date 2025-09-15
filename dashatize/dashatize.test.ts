import { describe, it, expect } from "bun:test";

import { dashatize } from "./dashatize.ts";

describe("dashatize", () => {
  it("devuelve una cadena vacía si el número es null", () => {
    expect(dashatize(null)).toBe("");
  });

  it("devuelve una cadena vacía si el número es NaN", () => {
    expect(dashatize(Number.NaN)).toBe("");
  });

  it("coloca guiones alrededor de los dígitos impares", () => {
    expect(dashatize(274)).toBe("2-7-4");
    expect(dashatize(5311)).toBe("5-3-1-1");
  });

  it("no pone guiones extra ni al principio ni al final", () => {
    expect(dashatize(86320)).toBe("86-3-20");
    expect(dashatize(1234567890)).toBe("1-2-3-4-5-6-7-8-9-0");
  });

  it("funciona con números negativos", () => {
    expect(dashatize(-5311)).toBe("5-3-1-1");
    expect(dashatize(-274)).toBe("2-7-4");
  });
});
