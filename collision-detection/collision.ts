export function collision(
  x1: number,
  y1: number,
  r1: number,
  x2: number,
  y2: number,
  r2: number,
): boolean {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return distance <= r1 + r2;
}
