export function bitMarch(n: number): number[][] {
  // Creamos un array para guardar los pasos
  const result: number[][] = [];

  // El número de pasos es 9 - n (desde la posición más a la derecha hasta la más a la izquierda)
  for (let shift = 0; shift <= 8 - n; shift++) {
    // Creamos un array de 8 ceros
    const step = new Array(8).fill(0);

    // Ponemos n unos consecutivos, desplazados por shift
    for (let i = 0; i < n; i++) {
      step[7 - shift - i] = 1;
    }
    result.push(step);
  }

  return result;
}
