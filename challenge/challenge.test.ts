import { describe, expect, test } from 'bun:test';
import { nerdify } from './challenge.ts';

describe('nerdify', () => {
  test('debe reemplazar correctamente caracteres individuales', () => {
    expect(nerdify('a')).toBe('4');
    expect(nerdify('e')).toBe('3');
    expect(nerdify('l')).toBe('1');
  });

  test('debe manejar mayúsculas correctamente', () => {
    expect(nerdify('A')).toBe('4');
    expect(nerdify('E')).toBe('3');
    expect(nerdify('L')).toBe('1');
  });

  test('debe realizar múltiples reemplazos en orden', () => {
    expect(nerdify('hello')).toBe('h311o');
    expect(nerdify('HELLO')).toBe('H311O');
    expect(nerdify('hello all')).toBe('h311o 411');
    expect(nerdify('HELLO ALL')).toBe('H311O 411');
  });

  test('debe manejar strings vacíos y sin coincidencias', () => {
    expect(nerdify('')).toBe('');
    expect(nerdify('xyz')).toBe('xyz');
  });
});
