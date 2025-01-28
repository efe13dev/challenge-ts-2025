import { describe, expect, test } from 'bun:test';
import { remove } from './removeExclamation';

describe('remove', () => {
	test('should remove the exclamation mark from the end of the string', () => {
		expect(remove('Hi!')).toBe('Hi');
	});

	test('should remove only the last exclamation mark', () => {
		expect(remove('Hi!!')).toBe('Hi!');
	});

	test('should remove the exclamation marks from the end of the string', () => {
		expect(remove('Hi!!!')).toBe('Hi!!');
	});
});
