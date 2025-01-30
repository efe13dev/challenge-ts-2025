import { expect, test, describe } from 'bun:test';
import { flyBy } from './flyBy.ts';

describe('flyBy', () => {
  test('should light up all lamps when drone flies over all of them', () => {
    expect(flyBy('xxxxx', '====T')).toBe('ooooo');
  });

  test('should light up partial lamps based on drone flight length', () => {
    expect(flyBy('xxxxxx', '==T')).toBe('oooxxx');
  });

  test('should handle empty strings', () => {
    expect(flyBy('', '')).toBe('');
  });

  test('should handle drone flying beyond lamps length', () => {
    expect(flyBy('xxx', '====T')).toBe('ooo');
  });

  test('should handle single lamp and drone position', () => {
    expect(flyBy('x', 'T')).toBe('o');
  });
});
