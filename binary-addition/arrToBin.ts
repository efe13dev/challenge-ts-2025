export function arr2bin(arr: number[]): string {
  return arr
    .filter((i) => typeof i === 'number')
    .reduce((a, b) => a + b, 0)
    .toString(2);
}
