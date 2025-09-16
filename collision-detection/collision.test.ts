import { describe, expect, test } from "bun:test";

import { collision } from "./collision";

describe("collision function tests", () => {
  test("debería devolver true cuando los círculos se superponen", () => {
    expect(collision(0, 0, 2, 2, 0, 2)).toBe(true);
  });

  test("debería devolver true cuando los círculos se tocan", () => {
    expect(collision(0, 0, 1, 2, 0, 1)).toBe(true);
  });

  test("debería devolver false cuando los círculos no se tocan", () => {
    expect(collision(0, 0, 1, 3, 0, 1)).toBe(false);
  });

  test("debería devolver true cuando un círculo está dentro del otro", () => {
    expect(collision(0, 0, 3, 0, 0, 1)).toBe(true);
  });

  test("debería devolver true cuando los círculos están en la misma posición", () => {
    expect(collision(0, 0, 1, 0, 0, 1)).toBe(true);
  });
});
