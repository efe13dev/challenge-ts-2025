import { describe, expect, test } from "bun:test";

import { SafeInteger } from "./safeInteger.ts";

describe("SafeInteger", () => {
  test("debería retornar true para números enteros seguros", () => {
    expect(SafeInteger(9007199254740990)).toBe(true);
    expect(SafeInteger(-90)).toBe(true);
  });

  test("debería retornar false para números enteros no seguros", () => {
    expect(SafeInteger(9007199254740992)).toBe(false);
  });
});
