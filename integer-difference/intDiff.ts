/**
 * Encuentra el número de pares de enteros en el array que tienen una diferencia de n
 * @param arr Array de números enteros
 * @param n Diferencia a buscar entre los números
 * @returns Número de pares encontrados
 */
export function intDiff(arr: number[], n: number): number {
  let count = 0;

  // Iteramos sobre cada par de números posible
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Verificamos si la diferencia absoluta entre los números es n
      if (Math.abs(arr[i] - arr[j]) === n) {
        count++;
      }
    }
  }

  return count;
}
