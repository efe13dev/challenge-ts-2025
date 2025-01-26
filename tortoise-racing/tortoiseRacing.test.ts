import { describe, expect, test } from "bun:test";
import { race } from "./tortoiseRacing";

describe("Tortoise Racing", () => {
	test("debería retornar [0, 32, 18] para v1=720, v2=850, g=70", () => {
		expect(race(720, 850, 70)).toEqual([0, 32, 18]);
	});

	test("debería retornar [3, 21, 49] para v1=80, v2=91, g=37", () => {
		expect(race(80, 91, 37)).toEqual([3, 21, 49]);
	});

	test("debería retornar null cuando v1 es mayor que v2", () => {
		expect(race(100, 80, 20)).toBeNull();
	});

	test("debería retornar null cuando v1 es igual a v2", () => {
		expect(race(100, 100, 20)).toBeNull();
	});

	test("debería calcular correctamente para velocidades muy cercanas", () => {
		expect(race(820, 821, 550)).toEqual([550, 0, 0]);
	});
});
