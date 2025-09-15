import { describe, it, expect } from "bun:test";

import { bitMarch } from "./bitMarch.ts";

describe("bitMarch", () => {
  it("debería devolver los pasos correctos para n = 3", () => {
    expect(bitMarch(3)).toEqual([
      [0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
    ]);
  });

  it("debería devolver los pasos correctos para n = 7", () => {
    expect(bitMarch(7)).toEqual([
      [0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0],
    ]);
  });

  it("debería devolver los pasos correctos para n = 1", () => {
    expect(bitMarch(1)).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  it("debería devolver los pasos correctos para n = 8", () => {
    expect(bitMarch(8)).toEqual([[1, 1, 1, 1, 1, 1, 1, 1]]);
  });
});
