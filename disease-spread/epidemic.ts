export function epidemic(
  tm: number,
  n: number,
  s0: number,
  i0: number,
  b: number,
  a: number,
): number {
  const dt = tm / n;
  let s = s0;
  let i = i0;

  let maxI = i0;

  for (let k = 0; k < n; k++) {
    const sPrev = s;
    const iPrev = i;

    s = sPrev - dt * b * sPrev * iPrev;
    i = iPrev + dt * (b * sPrev * iPrev - a * iPrev);

    if (i > maxI) {
      maxI = i;
    }
  }

  return Math.trunc(maxI);
}
