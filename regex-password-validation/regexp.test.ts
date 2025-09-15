import { describe, expect, it } from "bun:test";

import { REGEXP } from "./regexp.ts";

describe("Validación de contraseña con REGEXP", () => {
  it("Acepta contraseñas válidas", () => {
    expect(REGEXP.test("Abc123")).toBe(true);
    expect(REGEXP.test("A1b2c3")).toBe(true);
    expect(REGEXP.test("Password1")).toBe(true);
    expect(REGEXP.test("ZzZzZ1")).toBe(true);
  });

  it("Rechaza contraseñas con menos de 6 caracteres", () => {
    expect(REGEXP.test("Ab12")).toBe(false);
    expect(REGEXP.test("A1b2")).toBe(false);
  });

  it("Rechaza contraseñas sin minúsculas", () => {
    expect(REGEXP.test("ABC123")).toBe(false);
  });

  it("Rechaza contraseñas sin mayúsculas", () => {
    expect(REGEXP.test("abc123")).toBe(false);
  });

  it("Rechaza contraseñas sin dígitos", () => {
    expect(REGEXP.test("Abcdef")).toBe(false);
  });

  it("Rechaza contraseñas con caracteres no permitidos", () => {
    expect(REGEXP.test("Abc_123")).toBe(false);
    expect(REGEXP.test("Abc-123")).toBe(false);
    expect(REGEXP.test("Abc.123")).toBe(false);
    expect(REGEXP.test("Abc@123")).toBe(false);
  });
});
