import { expect, test, describe } from "bun:test";
import { lineupStudents } from "./lineupStudents.ts";

describe("lineupStudents", () => {
    test("debería ordenar los nombres japoneses por longitud y alfabéticamente", () => {
        const input = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
        const expected = [
            'Takehiko',
            'Takayuki',
            'Takahiro',
            'Takeshi',
            'Takeshi',
            'Takashi',
            'Tadashi',
            'Takeo',
            'Takao'
        ];
        expect(lineupStudents(input)).toEqual(expected);
    });

    test("debería ordenar correctamente nombres cortos con prefijos xx", () => {
        const input = "xxa xxb xxc xxd xa xb xc xd";
        const expected = ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa'];
        expect(lineupStudents(input)).toEqual(expected);
    });

    test("debería manejar nombres de igual longitud en orden alfabético inverso", () => {
        const input = "abc cba bac";
        const expected = ['cba', 'bac', 'abc'];
        expect(lineupStudents(input)).toEqual(expected);
    });

    test("debería manejar un solo nombre", () => {
        const input = "Suzuki";
        const expected = ['Suzuki'];
        expect(lineupStudents(input)).toEqual(expected);
    });

  
});
