import { expect, test } from "bun:test";

import { hexHash } from "./hexHash.ts";

test('hexHash("Yo") returns 20', () => {
  expect(hexHash("Yo")).toBe(20);
});

test('hexHash("Hello, World!") returns 91', () => {
  expect(hexHash("Hello, World!")).toBe(91);
});

test('hexHash("Forty4Three") returns 113', () => {
  expect(hexHash("Forty4Three")).toBe(113);
});

test('hexHash("") returns 0', () => {
  expect(hexHash("")).toBe(0);
});
