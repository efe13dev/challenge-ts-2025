// Expresión regular para extraer el código ASCII al inicio de la palabra
const asciiRegex = /^\d+/;

export function decipherThis(str: string): string {
  if (!str) {
    return "";
  }

  return str
    .split(" ")
    .map((word) => {
      const match = word.match(asciiRegex);

      if (!match) {
        return word;
      }
      const code = match[0];
      const firstChar = String.fromCharCode(Number(code));
      let rest = word.slice(code.length);

      // Si hay al menos 2 letras en el resto, intercambiar el segundo y último carácter
      if (rest.length > 1) {
        const chars = rest.split("");
        // Intercambiar segundo y último carácter
        const temp = chars[0];

        chars[0] = chars[chars.length - 1];
        chars[chars.length - 1] = temp;
        rest = chars.join("");
      }

      return firstChar + rest;
    })
    .join(" ");
}
