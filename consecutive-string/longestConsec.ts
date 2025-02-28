export function longestConsec(strarr: string[], k: number): string {
  // Verificar casos especiales según las condiciones del problema
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  }

  let longestString = '';
  let maxLength = 0;

  // Iterar a través del array hasta n-k+1 para poder tomar k elementos consecutivos
  for (let i = 0; i <= n - k; i++) {
    // Tomar k cadenas consecutivas y concatenarlas
    const currentString = strarr.slice(i, i + k).join('');

    // Verificar si la cadena actual es más larga que la más larga encontrada hasta ahora
    if (currentString.length > maxLength) {
      maxLength = currentString.length;
      longestString = currentString;
    }
  }

  return longestString;
}
