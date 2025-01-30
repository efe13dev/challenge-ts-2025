import { describe, expect, test } from 'bun:test';
import { sortVowels } from './sortVowels.ts';

describe('sortVowels', () => {
  test('debería manejar una cadena simple con vocales y consonantes', () => {
    expect(sortVowels('CODEWARS')).toBe('C|\n|O\nD|\n|E\nW|\n|A\nR|\nS|');
  });

  test('debería manejar una cadena con números y vocales', () => {
    expect(sortVowels('Rnd Te5T')).toBe('R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
  });

  test('debería manejar una cadena que solo contiene vocales', () => {
    expect(sortVowels('aEiOu')).toBe('|a\n|E\n|i\n|O\n|u');
  });

  test('debería manejar una cadena sin vocales', () => {
    expect(sortVowels('RHYTHM')).toBe('R|\nH|\nY|\nT|\nH|\nM|');
  });

  test('debería manejar entradas inválidas', () => {
    expect(sortVowels(null)).toBe('');
    expect(sortVowels(undefined)).toBe('');
    expect(sortVowels(123)).toBe('');
  });
});
