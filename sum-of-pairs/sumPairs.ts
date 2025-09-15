export function sumPairs(ints: number[], s: number): [number, number] | undefined {
  // Usamos un Set para almacenar los números vistos
  const seen = new Set<number>();

  for (const n of ints) {
    const complement = s - n;

    if (seen.has(complement)) {
      return [complement, n];
    }
    seen.add(n);
  }

  // Si no se encuentra ningún par
  return undefined;
}
