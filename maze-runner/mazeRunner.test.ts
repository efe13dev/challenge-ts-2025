import { describe, expect, it } from 'bun:test';
import { mazeRunner } from './mazeRunner';

describe('mazeRunner', () => {
	const maze = [
		[1, 1, 1, 1, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 2, 0, 0, 1],
		[1, 1, 1, 1, 1],
	];

	it('should return Dead when moving up and then east into a wall', () => {
		expect(
			mazeRunner(maze, [
				'N',
				'N',
				'N',
				'N',
				'N',
				'E',
				'E',
				'S',
				'S',
				'S',
				'S',
				'S',
				'S',
			]),
		).toBe('Dead');
	});

	it('should return Dead when moving west into a wall', () => {
		expect(mazeRunner(maze, ['N', 'W', 'W', 'W', 'W'])).toBe('Dead');
	});

	it('should return Lost when moving up and down without reaching finish', () => {
		expect(
			mazeRunner(maze, [
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'S',
				'S',
				'S',
				'S',
				'S',
				'S',
				'S',
				'S',
				'S',
			]),
		).toBe('Lost');
	});

	it('should return Dead when moving east into a wall', () => {
		expect(mazeRunner(maze, ['N', 'E', 'E'])).toBe('Dead');
	});
});
