export const findDifference = (a: number[], b: number[]): number =>
  Math.abs(
    a.reduce((acc, val) => acc * val, 1) - b.reduce((acc, val) => acc * val, 1),
  );
