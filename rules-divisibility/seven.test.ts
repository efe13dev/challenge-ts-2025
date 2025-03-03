import { describe, expect, it } from 'bun:test';
import { seven } from './seven.ts';

describe('Reglas de divisibilidad por 7', () => {
  it('Ejemplo 1: seven(371) debe devolver [35, 1]', () => {
    expect(seven(371)).toEqual([35, 1]);
  });

  it('Ejemplo 2: seven(1603) debe devolver [7, 2]', () => {
    expect(seven(1603)).toEqual([7, 2]);
  });

  it('Ejemplo 3: seven(372) debe devolver [33, 1]', () => {
    expect(seven(372)).toEqual([33, 1]);
  });

  it('Ejemplo 4: seven(477557101) debe devolver [28, 7]', () => {
    expect(seven(477557101)).toEqual([28, 7]);
  });

  it('Número pequeño: seven(7) debe devolver [7, 0]', () => {
    expect(seven(7)).toEqual([7, 0]);
  });

  it('Número de dos dígitos: seven(49) debe devolver [49, 0]', () => {
    expect(seven(49)).toEqual([49, 0]);
  });
});
