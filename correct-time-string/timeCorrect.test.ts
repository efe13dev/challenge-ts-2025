import { expect, test } from "bun:test";

import { timeCorrect } from "./timeCorrect.ts";

test("Test case 1: Valid time", () => {
  expect(timeCorrect("09:10:01")).toBe("09:10:01");
});

test("Test case 2: Minutes overflow", () => {
  expect(timeCorrect("11:70:10")).toBe("12:10:10");
});

test("Test case 3: Seconds overflow", () => {
  expect(timeCorrect("19:99:99")).toBe("20:40:39");
});

test("Test case 4: Hours overflow", () => {
  expect(timeCorrect("24:01:01")).toBe("00:01:01");
});

test("Test case 6: Null input", () => {
  expect(timeCorrect(null)).toBe(null);
});

test("Test case 7: Empty input", () => {
  expect(timeCorrect("")).toBe("");
});
