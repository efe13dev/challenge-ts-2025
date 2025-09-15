import { describe, expect, test } from "bun:test";

import { specialNumber } from "./specialNumber.ts";

describe("Special Number", () => {
  test("debe retornar Special!! para un número de un solo dígito dentro del rango [1-5]", () => {
    expect(specialNumber(2)).toBe("Special!!");
    expect(specialNumber(5)).toBe("Special!!");
  });

  test("debe retornar NOT!! para un número de un solo dígito fuera del rango [1-5]", () => {
    expect(specialNumber(9)).toBe("NOT!!");
    expect(specialNumber(7)).toBe("NOT!!");
  });

  test("debe retornar Special!! para números con todos los dígitos dentro del rango [0-5]", () => {
    expect(specialNumber(23)).toBe("Special!!");
    expect(specialNumber(513)).toBe("Special!!");
    expect(specialNumber(1050)).toBe("Special!!");
  });

  test("debe retornar NOT!! para números que contengan al menos un dígito fuera del rango [0-5]", () => {
    expect(specialNumber(39)).toBe("NOT!!");
    expect(specialNumber(709)).toBe("NOT!!");
    expect(specialNumber(538)).toBe("NOT!!");
  });
});
