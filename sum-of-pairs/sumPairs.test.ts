import { describe, it, expect } from "bun:test";

import { sumPairs } from "./sumPairs.ts";

describe("sumPairs", () => {
  it("devuelve el primer par que suma el objetivo (ejemplo 1)", () => {
    expect(sumPairs([11, 3, 7, 5], 10)).toEqual([3, 7]);
  });

  it("elige el par cuyo segundo elemento tiene el índice menor (ejemplo 2)", () => {
    expect(sumPairs([4, 3, 2, 3, 4], 6)).toEqual([4, 2]);
  });

  it("devuelve undefined si no hay ningún par", () => {
    expect(sumPairs([0, 0, -2, 3], 2)).toBeUndefined();
  });

  it("funciona con números negativos y duplicados", () => {
    expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6]);
  });

  it("elige el par correcto en caso de múltiples opciones", () => {
    expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7]);
  });
});
