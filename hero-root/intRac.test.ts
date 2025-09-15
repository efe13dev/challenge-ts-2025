import { describe, expect, it } from "bun:test";

import { intRac } from "./intRac.ts";

describe("intRac", () => {
  it("debe devolver 4 para intRac(25, 1)", () => {
    expect(intRac(25, 1)).toBe(4);
  });

  it("debe devolver 3 para intRac(125348, 300)", () => {
    expect(intRac(125348, 300)).toBe(3);
  });

  it("debe devolver 3 para intRac(125348981764, 356243)", () => {
    expect(intRac(125348981764, 356243)).toBe(3);
  });

  it("debe devolver 1 si la suposición ya es suficientemente cercana intRac(16, 4)", () => {
    expect(intRac(16, 4)).toBe(1);
  });
});
