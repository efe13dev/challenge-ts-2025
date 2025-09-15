import { describe, it, expect } from "bun:test";

import { isSixBitNumber } from "./sixBitNumber.ts";

describe("isSixBitNumber", () => {
  it("devuelve true para 0", () => {
    expect(isSixBitNumber("0")).toBe(true);
  });

  it("devuelve true para 63", () => {
    expect(isSixBitNumber("63")).toBe(true);
  });

  it("devuelve false para -1", () => {
    expect(isSixBitNumber("-1")).toBe(false);
  });

  it("devuelve false para 64", () => {
    expect(isSixBitNumber("64")).toBe(false);
  });

  it("devuelve true para 42", () => {
    expect(isSixBitNumber("42")).toBe(true);
  });

  it("devuelve false para un string no numérico", () => {
    expect(isSixBitNumber("abc")).toBe(false);
  });
});
