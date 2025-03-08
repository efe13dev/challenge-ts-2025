import { describe, expect, test } from 'bun:test';
import { travel } from './travel.ts';

describe('Travel', () => {
  const addresses =
    '123 Main Street St. Louisville OH 43071,' +
    '432 Main Long Road St. Louisville OH 43071,' +
    '786 High Street Pollocksville NY 56432,' +
    '54 Holy Grail Street Niagara Town ZP 32908,' +
    '3200 Main Rd. Bern AE 56210,' +
    '1 Gordon St. Atlanta RE 13000,' +
    '10 Pussy Cat Rd. Chicago EX 34342,' +
    '10 Gordon St. Atlanta RE 13000,' +
    '58 Gordon Road Atlanta RE 13000,' +
    '22 Tokyo Av. Tedmondville SW 43098,' +
    '674 Paris bd. Abbeville AA 45521,' +
    '10 Surta Alley Goodtown GG 30654,' +
    '45 Holy Grail Al. Niagara Town ZP 32908,' +
    '320 Main Al. Bern AE 56210,' +
    '14 Gordon Park Atlanta RE 13000,' +
    '100 Pussy Cat Rd. Chicago EX 34342,' +
    '2 Gordon St. Atlanta RE 13000,' +
    '5 Gordon Road Atlanta RE 13000,' +
    '2200 Tokyo Av. Tedmondville SW 43098,' +
    '67 Paris St. Abbeville AA 45521,' +
    '11 Surta Avenue Goodtown GG 30654,' +
    '45 Holy Grail Al. Niagara Town ZP 32918,' +
    '320 Main Al. Bern AE 56215,' +
    '14 Gordon Park Atlanta RE 13200,' +
    '100 Pussy Cat Rd. Chicago EX 34345,' +
    '2 Gordon St. Atlanta RE 13222,' +
    '5 Gordon Road Atlanta RE 13001,' +
    '2200 Tokyo Av. Tedmondville SW 43198,' +
    '67 Paris St. Abbeville AA 45522,' +
    '11 Surta Avenue Goodville GG 30655,' +
    '2222 Tokyo Av. Tedmondville SW 43198,' +
    '670 Paris St. Abbeville AA 45522,' +
    '114 Surta Avenue Goodville GG 30655,' +
    '2 Holy Grail Street Niagara Town ZP 32908,' +
    '3 Main Rd. Bern AE 56210,' +
    '77 Gordon St. Atlanta RE 13000';

  test('Caso de prueba del README #1: OH 43071', () => {
    const result = travel(addresses, 'OH 43071');
    expect(result).toBe(
      'OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432',
    );
  });

  test('Caso de prueba del README #2: NY 56432', () => {
    const result = travel(addresses, 'NY 56432');
    expect(result).toBe('NY 56432:High Street Pollocksville/786');
  });

  test('Caso de prueba del README #3: Código postal no existente', () => {
    const result = travel(addresses, 'NY 5643');
    expect(result).toBe('NY 5643:/');
  });

  test('Entradas vacías', () => {
    expect(travel('', 'AA 45522')).toBe('AA 45522:/');
    expect(travel(addresses, '')).toBe(':/');
    expect(travel('', '')).toBe(':/');
  });
});
