export function singleDigit(n: number): number {
  // Si el número ya es de un solo dígito, lo retornamos
  if (n < 10) {
    return n;
  }

  // Convertir el número a binario y sumar sus dígitos
  const binary = n.toString(2);
  const sum = binary.split("").reduce((acc, digit) => acc + Number.parseInt(digit), 0);

  // Si la suma es mayor a 9, llamamos recursivamente a la función
  return sum > 9 ? singleDigit(sum) : sum;
}
