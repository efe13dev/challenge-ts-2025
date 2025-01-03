import { expect, test, describe } from "bun:test";
import { mean } from './mean';

describe('mean', () => {
    test('debe manejar el caso de ejemplo del README', () => {
        const input = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
        const expected: [number, string] = [3.6, "udiwstagwo"];
        expect(mean(input)).toEqual(expected);
    });

    test('debe manejar números del 0 al 9 y letras minúsculas', () => {
        const input = ['a', '1', 'b', '2', 'c', '3', 'd', '4', 'e', '5', 'f', '6', 'g', '7', 'h', '8', 'i', '9', 'j', '0'];
        const expected: [number, string] = [4.5, "abcdefghij"];
        expect(mean(input)).toEqual(expected);
    });

    test('debe manejar números repetidos', () => {
        const input = ['x', '5', 'y', '5', 'z', '5', 'a', '5', 'b', '5', 'c', '5', 'd', '5', 'e', '5', 'f', '5', 'g', '5'];
        const expected: [number, string] = [5, "xyzabcdefg"];
        expect(mean(input)).toEqual(expected);
    });

    test('debe manejar todos los números siendo cero', () => {
        const input = ['p', '0', 'q', '0', 'r', '0', 's', '0', 't', '0', 'u', '0', 'v', '0', 'w', '0', 'x', '0', 'y', '0'];
        const expected: [number, string] = [0, "pqrstuvwxy"];
        expect(mean(input)).toEqual(expected);
    });

    test('debe manejar caracteres especiales', () => {
        const input = ['@', '1', '#', '2', '$', '3', '%', '4', '&', '5', '*', '6', '!', '7', '?', '8', '+', '9', '-', '0'];
        const expected: [number, string] = [4.5, "@#$%&*!?+-"];
        expect(mean(input)).toEqual(expected);
    });
});
