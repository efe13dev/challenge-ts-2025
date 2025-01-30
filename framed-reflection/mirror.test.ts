import { describe, expect, test } from 'bun:test';
import { mirror } from './mirror.ts';

describe('Mirror Function', () => {
  test('debería reflejar una palabra simple', () => {
    const resultado = mirror('hello');
    const esperado = `*********
* olleh *
*********`;
    expect(resultado).toBe(esperado);
  });

  test('debería reflejar dos palabras', () => {
    const resultado = mirror('hello world');
    const esperado = `*********
* olleh *
* dlrow *
*********`;
    expect(resultado).toBe(esperado);
  });

  test('debería manejar palabras de diferentes longitudes', () => {
    const resultado = mirror('cat dog bird');
    const esperado = `********
* tac  *
* god  *
* drib *
********`;
    expect(resultado).toBe(esperado);
  });

  test('debería manejar caracteres especiales', () => {
    const resultado = mirror('hello! world?');
    const esperado = `**********
* !olleh *
* ?dlrow *
**********`;
    expect(resultado).toBe(esperado);
  });

  test('debería manejar números', () => {
    const resultado = mirror('abc 123 xyz');
    const esperado = `*******
* cba *
* 321 *
* zyx *
*******`;
    expect(resultado).toBe(esperado);
  });
});
