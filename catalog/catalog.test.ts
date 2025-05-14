import { describe, it, expect } from 'bun:test';
import { catalog } from './catalog.ts';

const catalogSample = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>`;

describe('catalog', () => {
  it("devuelve los artículos que contienen 'saw'", () => {
    expect(catalog(catalogSample, 'saw')).toBe(
      'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10',
    );
  });

  it("devuelve el artículo 'hammer' correctamente", () => {
    expect(catalog(catalogSample, 'hammer')).toBe('hammer > prx: $10 qty: 50');
  });

  it("devuelve 'Nothing' si el artículo no existe", () => {
    expect(catalog(catalogSample, 'wrench')).toBe('Nothing');
  });

  it("devuelve todos los artículos que contienen 'dr'", () => {
    expect(catalog(catalogSample, 'dr')).toBe(
      'drill > prx: $99 qty: 5\r\nscrewdriver > prx: $5 qty: 51',
    );
  });
});
