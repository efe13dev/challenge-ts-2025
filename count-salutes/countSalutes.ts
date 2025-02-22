/**
 * Cuenta el número total de saludos que ocurrirán en el pasillo
 * @param hallway string que representa el movimiento de las personas (> para derecha, < para izquierda)
 * @returns número total de saludos
 */
export function countSalutes(hallway: string): number {
  let totalSalutes = 0;
  const people = hallway
    .split('')
    .filter((char) => char === '>' || char === '<');

  // Para cada persona moviéndose hacia la derecha
  for (let i = 0; i < people.length; i++) {
    if (people[i] === '>') {
      // Contar personas que se mueven hacia la izquierda después de esta posición
      for (let j = i + 1; j < people.length; j++) {
        if (people[j] === '<') {
          // Cada encuentro genera 2 saludos (uno de ida y otro de vuelta)
          totalSalutes += 2;
        }
      }
    }
  }

  return totalSalutes;
}
