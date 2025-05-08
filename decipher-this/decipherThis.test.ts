import { describe, it, expect } from 'bun:test';
import { decipherThis } from './decipherThis.ts';

describe('decipherThis', () => {
  it('decodifica una palabra simple', () => {
    expect(decipherThis('72olle')).toBe('Hello');
  });

  it('decodifica varias palabras', () => {
    expect(decipherThis('72olle 103doo 100ya')).toBe('Hello good day');
  });

  it('devuelve vacío si la entrada es vacía', () => {
    expect(decipherThis('')).toBe('');
  });

  it('maneja palabras sin números iniciales', () => {
    expect(decipherThis('hello 119drlo')).toBe('hello world');
  });

  it('no intercambia si solo hay una letra después del número', () => {
    expect(decipherThis('65b 66a')).toBe('Ab Ba');
  });
});
