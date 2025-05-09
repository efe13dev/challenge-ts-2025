import { describe, it, expect } from 'bun:test';
import { typeOfSum } from './typeSum.ts';

describe('typeOfSum', () => {
  it("debería devolver 'number' para dos números", () => {
    expect(typeOfSum(2, 3)).toBe('number');
    expect(typeOfSum(-1, 1)).toBe('number');
  });

  it("debería devolver 'string' si uno es string", () => {
    expect(typeOfSum('2', 3)).toBe('string');
    expect(typeOfSum('a', 'b')).toBe('string');
  });

  it("debería devolver 'number' para booleanos true + true", () => {
    expect(typeOfSum(true, true)).toBe('number');
  });

  it("debería devolver 'number' para null + number", () => {
    expect(typeOfSum(null, 5)).toBe('number');
  });
});
