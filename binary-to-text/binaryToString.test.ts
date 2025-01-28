import { expect, test, describe } from 'bun:test';
import { binaryToString } from './binaryToString';

describe('binaryToString', () => {
	test('debería convertir un solo carácter correctamente', () => {
		expect(binaryToString('01001000')).toBe('H');
	});

	test('debería convertir múltiples caracteres correctamente', () => {
		expect(binaryToString('01001000 01101001')).toBe('Hi');
	});

	test('debería manejar cadenas vacías', () => {
		expect(binaryToString('')).toBe('');
	});

	test('debería manejar caracteres ASCII extendidos', () => {
		// Ñ en ASCII extendido es 209 (11010001)
		expect(binaryToString('11010001')).toBe('Ñ');
	});

	test('debería manejar espacios en blanco en la entrada', () => {
		expect(binaryToString('01001000  01101001\n01100001')).toBe('Hia');
	});
});
