import { describe, expect, test } from 'bun:test';
import { spot } from './spotDifferences';

describe('Spot Differences', () => {
	test('debe devolver un array vacío cuando los strings son iguales', () => {
		expect(spot('abcdef', 'abcdef')).toEqual([]);
	});

	test('debe encontrar una diferencia en una posición', () => {
		expect(spot('abcdef', 'abcxef')).toEqual([3]);
	});

	test('debe encontrar múltiples diferencias', () => {
		expect(spot('abcdefg', 'abcqetg')).toEqual([3, 5]);
	});

	test('debe ser sensible a mayúsculas/minúsculas', () => {
		expect(spot('abcdef', 'abCdef')).toEqual([2]);
	});

	test('debe funcionar con caracteres especiales', () => {
		expect(spot('ab!def', 'ab@def')).toEqual([2]);
	});
});
