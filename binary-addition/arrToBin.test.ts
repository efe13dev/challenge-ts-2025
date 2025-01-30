import { describe, expect, it } from 'bun:test';
import { arr2bin } from './arrToBin.ts';

describe('arr2bin', () => {
  it('debe convertir correctamente arrays a binario', () => {
    expect(arr2bin([1, 2])).toBe('11');
    expect(arr2bin([1, 2, 3, 4, 5])).toBe('1111');
    expect(arr2bin([1, 10, 100, 1000])).toBe('10001010111');
  });

  it('debe manejar casos especiales', () => {
    expect(arr2bin([])).toBe('0');
    expect(arr2bin([0])).toBe('0');
    expect(arr2bin([Number.NaN])).toBe('NaN');
    expect(arr2bin([-5])).toBe('-101');
  });
});
