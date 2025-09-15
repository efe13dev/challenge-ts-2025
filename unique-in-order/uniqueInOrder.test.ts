import { expect, it } from "bun:test";

import { uniqueInOrder } from "./uniqueInOrder.ts";

it("should return an empty array for an empty sequence", () => {
  expect(uniqueInOrder("")).toEqual([]);
});

it("should handle strings correctly", () => {
  expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual(["A", "B", "C", "D", "A", "B"]);
});

it("should handle arrays correctly", () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

it("should handle mixed types correctly", () => {
  expect(uniqueInOrder(["a", "a", "b", "b", "c", "a", "b", "c"])).toEqual([
    "a",
    "b",
    "c",
    "a",
    "b",
    "c",
  ]);
});

it("should handle single element sequences", () => {
  expect(uniqueInOrder("A")).toEqual(["A"]);
  expect(uniqueInOrder([1])).toEqual([1]);
});
