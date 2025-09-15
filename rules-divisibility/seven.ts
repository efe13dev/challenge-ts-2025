export function seven(m: number): number[] {
  // Si el número ya tiene 2 o menos dígitos, devolvemos el número y 0 pasos
  if (m < 100) {
    return [m, 0];
  }

  // Obtenemos el último dígito
  const lastDigit = m % 10;

  // Obtenemos el resto del número sin el último dígito
  const remainingDigits = Math.floor(m / 10);

  // Aplicamos la regla: x - 2y donde x es el resto del número y y es el último dígito
  const newNumber = remainingDigits - 2 * lastDigit;

  // Llamada recursiva para continuar el proceso
  const [result, steps] = seven(newNumber);

  // Devolvemos el resultado y el número de pasos + 1
  return [result, steps + 1];
}
