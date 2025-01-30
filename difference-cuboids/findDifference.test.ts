import { describe, expect, test } from 'bun:test';
import { findDifference } from './findDifference.ts';

describe('findDifference', () => {
  test('debe retornar 8 cuando los cuboides son [2, 2, 3] y [5, 4, 1]', () => {
    expect(findDifference([2, 2, 3], [5, 4, 1])).toBe(8);
  });

  test('debe retornar 14 cuando los cuboides son [3, 2, 5] y [1, 4, 4]', () => {
    expect(findDifference([3, 2, 5], [1, 4, 4])).toBe(14);
  });

  test('debe retornar 0 cuando los cuboides tienen el mismo volumen', () => {
    expect(findDifference([2, 3, 2], [3, 2, 2])).toBe(0);
  });

  test('debe manejar números grandes correctamente', () => {
    expect(findDifference([10, 10, 10], [5, 5, 5])).toBe(875);
  });
});
