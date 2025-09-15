import { expect, test, describe } from "bun:test";

import { sumFracts } from "./sumFracts.ts";

describe("sumFracts", () => {
  test("debe sumar fracciones simples y reducirlas", () => {
    expect(
      sumFracts([
        [1, 2],
        [1, 2],
      ]),
    ).toBe("1");
    expect(
      sumFracts([
        [1, 3],
        [1, 6],
      ]),
    ).toBe("[1, 2]");
  });

  test("debe manejar fracciones con diferentes denominadores", () => {
    expect(
      sumFracts([
        [1, 2],
        [1, 3],
        [1, 4],
      ]),
    ).toBe("[13, 12]");
  });

  test("debe retornar null para un array vacío", () => {
    expect(sumFracts([])).toBe(null);
  });

  test("debe manejar fracciones que resultan en números enteros", () => {
    expect(
      sumFracts([
        [1, 3],
        [2, 3],
      ]),
    ).toBe("1");
    expect(
      sumFracts([
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
      ]),
    ).toBe("2");
  });

  test("debe manejar fracciones grandes y reducirlas correctamente", () => {
    expect(
      sumFracts([
        [15, 45],
        [20, 60],
      ]),
    ).toBe("[2, 3]");
  });
});
