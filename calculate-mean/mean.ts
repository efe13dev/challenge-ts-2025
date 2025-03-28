export function mean(lst: string[]): [number, string] {
  // Arrays para almacenar números y caracteres
  const numeros: number[] = [];
  const caracteres: string[] = [];

  // Separar números y caracteres
  for (const elemento of lst) {
    if (Number.isNaN(Number(elemento))) {
      caracteres.push(elemento);
    } else {
      numeros.push(Number(elemento));
    }
  };

  // Calcular la media de los números
  const media = numeros.reduce((sum, num) => sum + num, 0) / numeros.length;

  // Unir los caracteres en una sola cadena
  const cadenaCaracteres = caracteres.join('');

  return [media, cadenaCaracteres];
}
