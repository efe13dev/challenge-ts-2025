import { describe, expect, it } from "bun:test";

import { checkchoose } from "./checkchoose";

describe("checkchoose", () => {
  it("debe devolver 2 para m=6, n=4", () => {
    expect(checkchoose(6, 4)).toBe(2);
  });

  it("debe devolver 3 para m=35, n=7", () => {
    expect(checkchoose(35, 7)).toBe(3);
  });

  it("debe devolver -1 si no hay combinacion", () => {
    expect(checkchoose(100, 5)).toBe(-1);
  });

  it("debe devolver 1 para m=5, n=5", () => {
    expect(checkchoose(5, 5)).toBe(1);
  });
});
