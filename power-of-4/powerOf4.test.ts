import { powerOf4 } from './powerOf4.ts';
import { test, expect } from 'bun:test';

// Pruebas para la función powerOf4

test('debería devolver true para 1 (4^0)', () => {
  expect(powerOf4(1)).toBe(true);
});

test('debería devolver true para 4 (4^1)', () => {
  expect(powerOf4(4)).toBe(true);
});

test('debería devolver true para 16 (4^2)', () => {
  expect(powerOf4(16)).toBe(true);
});

test('debería devolver false para 10', () => {
  expect(powerOf4(10)).toBe(false);
});
