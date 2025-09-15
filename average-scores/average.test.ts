import { describe, it, expect } from "bun:test";

import { average } from "./average.ts";

describe("average", () => {
  it("debería devolver 75 para [90, 80, 70, 60]", () => {
    expect(average([90, 80, 70, 60])).toBe(75);
  });

  it("debería devolver 2 para [1, 2, 3]", () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  it("debería devolver 15 para [10, 15, 20]", () => {
    expect(average([10, 15, 20])).toBe(15);
  });

  it("debería devolver 0 para [-1, 0, 1]", () => {
    expect(average([-1, 0, 1])).toBe(0);
  });

  it("debería devolver 4 para [4, 4, 4, 4]", () => {
    expect(average([4, 4, 4, 4])).toBe(4);
  });
});
