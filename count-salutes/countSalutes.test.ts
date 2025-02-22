import { describe, expect, test } from 'bun:test';
import { countSalutes } from './countSalutes.ts';

describe('countSalutes', () => {
  test('debería devolver 8 cuando dos personas a la derecha se encuentran con dos a la izquierda', () => {
    expect(countSalutes('>----->-----<--<')).toBe(8);
  });

  test('debería devolver 2 cuando una persona se encuentra con otra en dirección opuesta', () => {
    expect(countSalutes('<---<--->----<')).toBe(2);
  });

  test('debería devolver 0 cuando todas las personas van en la misma dirección', () => {
    expect(countSalutes('>>>>>>>')).toBe(0);
    expect(countSalutes('<<<<<<<')).toBe(0);
  });

  test('debería manejar correctamente espacios vacíos y posiciones aleatorias', () => {
    expect(countSalutes('>--<-->--<')).toBe(6);
  });

  test('debería devolver 0 para un pasillo vacío', () => {
    expect(countSalutes('')).toBe(0);
    expect(countSalutes('-------')).toBe(0);
  });
});
