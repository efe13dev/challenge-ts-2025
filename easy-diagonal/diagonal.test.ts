import { describe, it, expect } from "bun:test";

import { diagonal } from "./diagonal.ts";

describe("diagonal", () => {
  it("debe devolver 1 para diagonal(0, 0)", () => {
    expect(diagonal(0, 0)).toBe(1);
  });

  it("debe devolver 6 para diagonal(3, 2)", () => {
    expect(diagonal(3, 2)).toBe(4);
  });

  it("debe devolver 10 para diagonal(4, 2)", () => {
    expect(diagonal(4, 2)).toBe(10);
  });

  it("debe devolver 0 para diagonal(2, 5)", () => {
    expect(diagonal(2, 5)).toBe(0);
  });
});
