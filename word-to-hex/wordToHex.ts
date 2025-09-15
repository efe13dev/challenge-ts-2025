const regex = /\s+/;

export function wordToHex(words: string): string[] {
  // Separar las palabras usando espacios en blanco
  const wordList = words.trim().split(regex);

  return wordList.map((word) => {
    // Tomar los primeros 3 caracteres
    const chars = word.slice(0, 3);
    // Obtener los códigos ASCII y convertirlos a hexadecimal
    let hex = "";

    for (let i = 0; i < 3; i++) {
      if (i < chars.length) {
        hex += chars.charCodeAt(i).toString(16).padStart(2, "0");
      } else {
        hex += "00";
      }
    }

    return `#${hex}`;
  });
}
