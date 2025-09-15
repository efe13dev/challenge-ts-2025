import { expect, test, describe } from "bun:test";

import { sumin, sumax, sumsum } from "./cartesianPlane.ts";

describe("Cartesian Plane Functions", () => {
  test("should calculate correct sums for n = 6", () => {
    expect(sumin(6)).toBe(91);
    expect(sumax(6)).toBe(161);
    expect(sumsum(6)).toBe(252);
  });

  test("should calculate correct sums for n = 45", () => {
    expect(sumin(45)).toBe(31395);
    expect(sumax(45)).toBe(61755);
    expect(sumsum(45)).toBe(93150);
  });

  test("should calculate correct sums for n = 999", () => {
    expect(sumin(999)).toBe(332833500);
    expect(sumax(999)).toBe(665167500);
    expect(sumsum(999)).toBe(998001000);
  });

  test("should calculate correct sums for n = 5000", () => {
    expect(sumin(5000)).toBe(41679167500);
    expect(sumax(5000)).toBe(83345832500);
    expect(sumsum(5000)).toBe(125025000000);
  });
});
