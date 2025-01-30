export function addBinary(a: number, b: number): string {
  const sum = a + b;
  if (sum === 0) {
    return '0';
  }
  return sum.toString(2);
}
