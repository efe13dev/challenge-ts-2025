import { describe, expect, test } from "bun:test";

import { convert } from "./lettersFromNumbers.ts";

describe("Función convert", () => {
  test("Caso básico del README", () => {
    expect(convert("658776")).toBe("AWL"); // 65(A) 87(W) 76(L)
  });

  test("Caso con espacios", () => {
    expect(convert("73327673756932858080698267658369")).toBe("I LIKE UPPERCASE"); // 73(I) 32(space) 76(L) 73(I) 75(K) 69(E)...
  });

  test("Palabra corta", () => {
    expect(convert("726989")).toBe("HEY"); // 72(H) 69(E) 89(Y)
  });

  test("Palabra completa", () => {
    expect(convert("8779827668")).toBe("WORLD"); // 87(W) 79(O) 82(R) 76(L) 68(D)
  });

  test("String vacío", () => {
    expect(convert("")).toBe("");
  });
});
