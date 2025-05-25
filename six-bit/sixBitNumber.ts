const sixBitRegex = /^(6[0-3]|[1-5][0-9]|[0-9])$/;

export function isSixBitNumber(input: string): boolean {
  return sixBitRegex.test(input);
}
