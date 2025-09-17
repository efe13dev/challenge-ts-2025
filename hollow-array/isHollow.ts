export function isHollow(arr: number[]): boolean {
  const n = arr.length;

  // Contar no-ceros desde el inicio hasta el primer 0
  let i = 0;

  while (i < n && arr[i] !== 0) i++;

  const leftNonZeros = i;

  // Contar no-ceros desde el final hasta el último 0
  let j = n - 1;

  while (j >= 0 && arr[j] !== 0) j--;

  const rightNonZeros = n - 1 - j;

  // Longitud del bloque central de ceros
  const zeroBlockLen = j - i + 1;

  // Debe haber al menos 3 ceros consecutivos en el centro
  if (zeroBlockLen < 3) return false;

  // Los no-ceros a ambos lados deben ser iguales
  if (leftNonZeros !== rightNonZeros) return false;

  // Verificar que el bloque central sea exclusivamente de ceros
  for (let k = i; k <= j; k++) {
    if (arr[k] !== 0) return false;
  }

  return true;
}

export default isHollow;
