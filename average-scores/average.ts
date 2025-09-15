export function average(scores: number[]): number {
  // Usamos reduce para sumar y Math.round para redondear
  const suma = scores.reduce((acc, curr) => acc + curr, 0);

  return Math.round(suma / scores.length);
}
