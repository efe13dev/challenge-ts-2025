import { describe, it, expect } from 'bun:test';
import { spinningRings } from './spinningRings.ts';

describe('🔄 Pruebas para spinningRings 🔄', () => {
  it('✅ Ejemplo 1 del README: debe devolver 5 para innerMax=2, outerMax=3', () => {
    expect(spinningRings(2, 3)).toBe(5);
  });

  it('✅ Ejemplo 2 del README: debe devolver 2 para innerMax=3, outerMax=2', () => {
    expect(spinningRings(3, 2)).toBe(2);
  });

  it('✅ Valores iguales: debe devolver el correcto número de movimientos para innerMax=5, outerMax=5', () => {
    // Tras la depuración, vemos que coinciden después de 3 movimientos
    expect(spinningRings(5, 5)).toBe(3);
  });

  it('✅ Valores pequeños: debe devolver el correcto número de movimientos para innerMax=1, outerMax=1', () => {
    // Tras la depuración, vemos que coinciden después de 1 movimiento
    expect(spinningRings(1, 1)).toBe(1);
  });

  it('✅ Valores grandes: debe manejar correctamente valores más grandes', () => {
    // Para el caso de innerMax=10, outerMax=20, la prueba mostró 27 movimientos
    expect(spinningRings(10, 20)).toBe(27);
  });
});
