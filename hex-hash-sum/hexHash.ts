export function hexHash(str: string): number {
  let hexSum = 0;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const hexValue = charCode.toString(16);

    for (const char of hexValue) {
      if (!Number.isNaN(Number.parseInt(char, 10))) {
        hexSum += Number.parseInt(char, 10);
      }
    }
  }

  return hexSum;
}
