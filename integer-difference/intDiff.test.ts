import { describe, expect, test } from "bun:test";

import { intDiff } from "./intDiff.ts";

describe("integerDifference", () => {
  test("debe encontrar 3 pares con diferencia de 4 en el array [1, 1, 5, 6, 9, 16, 27]", () => {
    expect(intDiff([1, 1, 5, 6, 9, 16, 27], 4)).toBe(3);
  });

  test("debe encontrar 4 pares con diferencia de 2 en el array [1, 1, 3, 3]", () => {
    expect(intDiff([1, 1, 3, 3], 2)).toBe(4);
  });

  test("debe retornar 0 cuando no hay pares con la diferencia buscada", () => {
    expect(intDiff([1, 2, 3, 4], 10)).toBe(0);
  });

  test("debe manejar arrays con un solo elemento retornando 0", () => {
    expect(intDiff([1], 5)).toBe(0);
  });
});
