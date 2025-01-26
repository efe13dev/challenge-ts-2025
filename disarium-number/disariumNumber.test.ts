import { describe, expect, test } from "bun:test";
import { disariumNumber } from "./disariumNumber";

describe("Disarium Number", () => {
	test("89 should be a Disarium number", () => {
		expect(disariumNumber(89)).toBe("Disarium !!");
	});

	test("564 should not be a Disarium number", () => {
		expect(disariumNumber(564)).toBe("Not !!");
	});

	test("1024 should not be a Disarium number", () => {
		expect(disariumNumber(1024)).toBe("Not !!");
	});

	test("135 should be a Disarium number", () => {
		expect(disariumNumber(135)).toBe("Disarium !!");
	});

	test("136586 should not be a Disarium number", () => {
		expect(disariumNumber(136586)).toBe("Not !!");
	});
});
