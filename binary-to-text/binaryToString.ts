export function binaryToString(binary: string): string {
  // Si la cadena está vacía, retornamos una cadena vacía
  if (!binary) { return ''; }

  // Eliminar espacios y dividir en grupos de 8 bits
  const cleanBinary = binary.replace(/\s/g, '');
  const bytes = cleanBinary.match(/.{8}/g) || [];

  // Convertir cada grupo de 8 bits a su carácter ASCII correspondiente
  return bytes
    .map((byte) => {
      // Convertir binario a decimal
      const decimal = Number.parseInt(byte, 2);
      // Convertir decimal a carácter ASCII
      return String.fromCharCode(decimal);
    })
    .join('');
}
