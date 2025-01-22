export function race(
  v1: number,
  v2: number,
  g: number
): [number, number, number] | null {
  // Si v1 >= v2, B nunca alcanzará a A
  if (v1 >= v2) {
    return null;
  }

  // Calculamos el tiempo en segundos para mayor precisión
  const timeInSeconds = (g * 3600) / (v2 - v1);
  
  // Convertimos a horas, minutos y segundos
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return [hours, minutes, seconds];
}
