import { test, expect } from "bun:test";

import { heavyMetalUmlauts } from "./heavyMetal.ts";

test("Reemplazo simple de vocales", () => {
  expect(heavyMetalUmlauts("Hello World!")).toBe("Hëllö Wörld!");
});

test("Mayúsculas y minúsculas", () => {
  expect(heavyMetalUmlauts("Amazing Music!")).toBe("Ämäzïng Müsïc!");
});

test("Frase con todas las letras", () => {
  expect(heavyMetalUmlauts("AEIOUY aeiouy")).toBe("ÄËÏÖÜŸ äëïöüÿ");
});

test("Sin letras a reemplazar", () => {
  expect(heavyMetalUmlauts("BCDFG")).toBe("BCDFG");
});

test("Texto largo", () => {
  expect(heavyMetalUmlauts("Rock and roll will never die!")).toBe("Röck änd röll wïll nëvër dïë!");
});
