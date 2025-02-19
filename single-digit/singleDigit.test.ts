import { describe, expect, test } from 'bun:test';
import { singleDigit } from './singleDigit.ts';

describe('singleDigit', () => {
  test('debería retornar el mismo número si ya es un solo dígito', () => {
    expect(singleDigit(5)).toBe(5);
  });

  test('debería reducir 5665 a 5', () => {
    expect(singleDigit(5665)).toBe(5);
  });

  test('debería reducir 123456789 a 1', () => {
    expect(singleDigit(123456789)).toBe(1);
  });

  test('debería manejar el cero', () => {
    expect(singleDigit(0)).toBe(0);
  });
});
