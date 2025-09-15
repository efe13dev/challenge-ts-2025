import { describe, it, expect } from "bun:test";

import { howMuch } from "./howMuch.ts";

describe("howMuch", () => {
  it("caso 1: howMuch(1, 100)", () => {
    expect(howMuch(1, 100)).toEqual([
      ["M: 37", "B: 5", "C: 4"],
      ["M: 100", "B: 14", "C: 11"],
    ]);
  });

  it("caso 2: howMuch(1000, 1100)", () => {
    expect(howMuch(1000, 1100)).toEqual([["M: 1045", "B: 149", "C: 116"]]);
  });

  it("caso 3: howMuch(10000, 9950)", () => {
    expect(howMuch(10000, 9950)).toEqual([["M: 9991", "B: 1427", "C: 1110"]]);
  });

  it("caso 4: howMuch(0, 200)", () => {
    expect(howMuch(0, 200)).toEqual([
      ["M: 37", "B: 5", "C: 4"],
      ["M: 100", "B: 14", "C: 11"],
      ["M: 163", "B: 23", "C: 18"],
    ]);
  });
});
