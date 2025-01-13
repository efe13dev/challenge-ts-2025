import { describe, expect, test } from "bun:test";
import { addBinary } from "./addBinary";

describe("Suma Binaria", () => {
    test("1 + 1 debería retornar '10'", () => {
        expect(addBinary(1, 1)).toBe("10");
    });

    test("5 + 9 debería retornar '1110'", () => {
        expect(addBinary(5, 9)).toBe("1110");
    });

    test("0 + 0 debería retornar '0'", () => {
        expect(addBinary(0, 0)).toBe("0");
    });

    test("2 + 2 debería retornar '100'", () => {
        expect(addBinary(2, 2)).toBe("100");
    });

    test("51 + 12 debería retornar '111111'", () => {
        expect(addBinary(51, 12)).toBe("111111");
    });
});
