export const lenCurve = (n: number): number => {
  if (n <= 0) {
    return 0;
  }
  const h = 1 / n;
  let length = 0;

  // Calcula la suma de las distancias entre puntos sucesivos
  for (let i = 0; i < n; i++) {
    const x0 = i * h;
    const x1 = (i + 1) * h;
    const y0 = x0 * x0;
    const y1 = x1 * x1;
    const dx = x1 - x0;
    const dy = y1 - y0;

    length += Math.sqrt(dx * dx + dy * dy);
  }

  return length;
};
