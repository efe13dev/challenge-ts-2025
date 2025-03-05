import { door } from './door.ts';
import { describe, test, expect } from 'bun:test';

describe('Pruebas para la función door', () => {
  test('debería abrir completamente y permanecer abierta', () => {
    const result = door('.....P.....');
    expect(result).toBe('12345555555555');
  });

  test('debería cerrar la puerta', () => {
    const result = door('.....P.....P.....');
    expect(result).toBe('12345554321000');
  });

  test('debería revertir al detectar un obstáculo', () => {
    const result = door('.....P.....O.....');
    expect(result).toBe('1210000');
  });

  test('debería permitir pausa durante la apertura y cierre', () => {
    const result = door('.....P.....P.....O.....');
    expect(result).toBe('12345554321000');
  });

  test('debería revertir al detectar un obstáculo', () => {
    const result = door('P.O....');
    expect(result).toBe('1210000');
  });

  test('debería abrir completamente y permanecer abierta', () => {
    const result = door('P......P......');
    expect(result).toBe('12345554321000');
  });
});
