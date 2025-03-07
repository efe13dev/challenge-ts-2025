export function powerOf4(n: number): boolean {
  // Verificar si n es un número entero
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) {
    return false;
  }

  // Crear una variable para comprobar si n es potencia de 4
  let num = n;
  while (num > 1) {
    if (num % 4 !== 0) {
      return false;
    }
    num /= 4;
  }
  return true;
}
