import { describe, expect, it } from "bun:test";

import { multiplicador } from "./generator.ts";

describe("multiplicador", () => {
  it("debería generar la secuencia correcta para el número 5", () => {
    const gen = multiplicador(5);

    expect(gen.next().value).toBe("5 x 1 = 5");
    expect(gen.next().value).toBe("5 x 2 = 10");
    expect(gen.next().value).toBe("5 x 3 = 15");
  });

  it("debería generar la secuencia correcta para el número 2", () => {
    const gen = multiplicador(2);

    expect(gen.next().value).toBe("2 x 1 = 2");
    expect(gen.next().value).toBe("2 x 2 = 4");
    expect(gen.next().value).toBe("2 x 3 = 6");
  });

  it("debería funcionar con números negativos", () => {
    const gen = multiplicador(-3);

    expect(gen.next().value).toBe("-3 x 1 = -3");
    expect(gen.next().value).toBe("-3 x 2 = -6");
    expect(gen.next().value).toBe("-3 x 3 = -9");
  });
});
