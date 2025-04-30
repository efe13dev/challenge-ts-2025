import { describe, it, expect } from 'bun:test';
import { wordToHex } from './wordToHex.ts';

describe('wordToHex', () => {
  it('convierte una palabra simple a hexadecimal', () => {
    expect(wordToHex('hola')).toEqual(['#686f6c']);
  });

  it('convierte varias palabras separadas por espacios', () => {
    expect(wordToHex('hola mundo')).toEqual(['#686f6c', '#6d756e']);
  });

  it('rellena con ceros si la palabra tiene menos de 3 letras', () => {
    expect(wordToHex('hi')).toEqual(['#686900']);
  });

  it('ignora espacios extra al inicio y final', () => {
    expect(wordToHex('   hola   mundo   ')).toEqual(['#686f6c', '#6d756e']);
  });

  it('funciona con palabras de longitud exacta 3', () => {
    expect(wordToHex('sol mar')).toEqual(['#736f6c', '#6d6172']);
  });
});
