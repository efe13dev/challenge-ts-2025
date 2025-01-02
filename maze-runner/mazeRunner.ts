/* eslint-disable complexity -- Ignore complexity */

export function mazeRunner(maze: number[][], directions: string[]): string {
  let y = maze.findIndex((r) => r.includes(2));
  let x = maze[y].indexOf(2);

  for (const d of directions) {
    if (d === 'N') y -= 1;
    if (d === 'S') y += 1;
    if (d === 'W') x -= 1;
    if (d === 'E') x += 1;

    if (
      x < 0 ||
      y < 0 ||
      x >= maze[0].length ||
      y >= maze.length ||
      maze[y][x] === 1
    ) {
      return 'Dead';
    }
    if (maze[y][x] === 3) {
      return 'Finish';
    }
  }

  return 'Lost';
}
