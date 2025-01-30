import { expect, test, describe } from 'bun:test';
import { rot90Clock, diag1Sym, selfieAndDiag1, oper } from './squaredStrings.ts';

describe('Squared Strings', () => {
  const s = 'abcd\nefgh\nijkl\nmnop';
  const empty = '';

  test('diag1Sym - should return diagonal symmetry', () => {
    expect(oper(diag1Sym, s)).toBe('aeim\nbfjn\ncgko\ndhlp');
    expect(oper(diag1Sym, empty)).toBe('');
  });

  test('rot90Clock - should rotate 90 degrees clockwise', () => {
    expect(oper(rot90Clock, s)).toBe('miea\nnjfb\nokgc\nplhd');
    expect(oper(rot90Clock, empty)).toBe('');
  });

  test('selfieAndDiag1 - should combine original with diagonal', () => {
    expect(oper(selfieAndDiag1, s)).toBe(
      'abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp',
    );
    expect(oper(selfieAndDiag1, empty)).toBe('');
  });

  test('multiple transformations - should work in sequence', () => {
    const rotated = oper(rot90Clock, s);
    expect(oper(diag1Sym, rotated)).toBe('mnop\nijkl\nefgh\nabcd');
  });

  test('edge case - single character', () => {
    const single = 'a';
    expect(oper(diag1Sym, single)).toBe('a');
    expect(oper(rot90Clock, single)).toBe('a');
    expect(oper(selfieAndDiag1, single)).toBe('a|a');
  });
});
