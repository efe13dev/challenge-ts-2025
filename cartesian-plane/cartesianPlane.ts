export function sumin(n: number): number {
  let sum = 0;
  // Para cada coordenada (x,y), el mínimo será el menor valor entre x e y
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += Math.min(x, y);
    }
  }
  return sum;
}

export function sumax(n: number): number {
  let sum = 0;
  // Para cada coordenada (x,y), el máximo será el mayor valor entre x e y
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += Math.max(x, y);
    }
  }
  return sum;
}

export function sumsum(n: number): number {
  let sum = 0;
  // Para cada coordenada (x,y), sumamos x + y
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += x + y;
    }
  }
  return sum;
}
