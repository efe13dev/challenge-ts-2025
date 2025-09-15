import { describe, expect, test } from "bun:test";

import { longestConsec } from "./longestConsec.ts";

describe("longestConsec", () => {
  test('Ejemplo 1: debe devolver "folingtrashy"', () => {
    const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
    const k = 2;

    expect(longestConsec(strarr, k)).toBe("folingtrashy");
  });

  test('Ejemplo 2: debe devolver "abigailtheta"', () => {
    const strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
    const k = 2;

    expect(longestConsec(strarr, k)).toBe("abigailtheta");
  });

  test("Casos especiales", () => {
    // Array vacío
    expect(longestConsec([], 1)).toBe("");

    // k > n
    expect(longestConsec(["a", "b", "c"], 4)).toBe("");

    // k <= 0
    expect(longestConsec(["a", "b", "c"], 0)).toBe("");
    expect(longestConsec(["a", "b", "c"], -1)).toBe("");
  });

  test("Casos adicionales", () => {
    // k = 1 (debe devolver la cadena más larga)
    expect(longestConsec(["zone", "abigail", "theta"], 1)).toBe("abigail");

    // Todas las cadenas tienen la misma longitud
    expect(longestConsec(["abc", "def", "ghi"], 2)).toBe("abcdef");
  });
});
