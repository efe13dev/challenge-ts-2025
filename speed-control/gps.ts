/**
 * Calcula la velocidad máxima por hora a partir de las distancias registradas por el GPS.
 *
 * @param s - El intervalo de tiempo en segundos entre cada registro de distancia.
 * @param x - Un array de distancias registradas.
 * @returns El valor entero (floor) de la velocidad media máxima por hora, o 0 si no hay movimiento.
 */
export function gps(s: number, x: number[]): number {
  // Si el array tiene 0 o 1 elementos, el coche no se movió
  if (x.length <= 1) {
    return 0;
  }

  // Calcular la velocidad para cada sección
  const speeds: number[] = [];

  for (let i = 1; i < x.length; i++) {
    // Calcular la distancia recorrida en esta sección
    const deltaDistance = x[i] - x[i - 1];

    // Calcular la velocidad por hora usando la fórmula: (3600 * delta_distance) / s
    const speed = (3600 * deltaDistance) / s;

    speeds.push(speed);
  }

  // Encontrar la velocidad máxima
  const maxSpeed = Math.max(...speeds);

  // Devolver el suelo (floor) de la velocidad máxima
  return Math.floor(maxSpeed);
}

// Ejemplo de uso:
// const s = 15;
// const x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
// console.log(gps(s, x)); // Debería devolver 74
