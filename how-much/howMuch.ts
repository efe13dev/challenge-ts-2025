export function howMuch(m: number, n: number): string[][] {
  // Nos aseguramos de recorrer desde el menor al mayor
  const min = Math.min(m, n);
  const max = Math.max(m, n);
  const res: string[][] = [];

  for (let f = min; f <= max; f++) {
    // Si f - 9*c = 1  => f - 1 divisible por 9
    // Si f - 7*b = 2  => f - 2 divisible por 7
    if ((f - 1) % 9 === 0 && (f - 2) % 7 === 0) {
      const c = (f - 1) / 9;
      const b = (f - 2) / 7;
      if (c > 0 && b > 0) {
        res.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
      }
    }
  }

  return res;
}

