export function convert(n: string): string {
  // Dividir el string en pares de números
  const pairs = n.match(/.{2}/g) || [];

  // Convertir cada par de números en su correspondiente carácter ASCII
  return pairs
    .map((pair) => String.fromCharCode(Number.parseInt(pair)))
    .join('');
}
