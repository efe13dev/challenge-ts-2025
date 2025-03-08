export function spinningRings(innerMax: number, outerMax: number): number {
  // Valores iniciales para ambos anillos
  let innerRing = 0;
  let outerRing = 0;
  let moves = 0;

  // Seguimos girando los anillos hasta que muestren el mismo número
  do {
    // Incrementamos el contador de movimientos
    moves++;

    // Giramos el anillo interior (sentido horario, decrementando)
    innerRing = innerRing === 0 ? innerMax : innerRing - 1;

    // Giramos el anillo exterior (sentido antihorario, incrementando)
    outerRing = (outerRing + 1) % (outerMax + 1);

    // Continuamos hasta que los anillos muestren el mismo número
  } while (innerRing !== outerRing);

  return moves;
}
