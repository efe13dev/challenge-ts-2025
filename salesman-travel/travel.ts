export function travel(r: string, zipcode: string): string {
  // Si faltan parámetros, devolver formato base
  if (!(r && zipcode)) {
    return `${zipcode}:/`;
  }

  // Dividir la cadena de entrada en un array de direcciones
  const addresses = r.split(',');

  // Arrays para almacenar las calles y los números de casa
  const streets: string[] = [];
  const houseNumbers: string[] = [];

  // Procesar cada dirección
  for (const address of addresses) {
    // Verificar si la dirección contiene el código postal buscado
    if (address.endsWith(zipcode)) {
      // Obtener el primer espacio para separar el número de casa
      const firstSpaceIndex = address.indexOf(' ');

      if (firstSpaceIndex !== -1) {
        // Extraer el número de casa (todo antes del primer espacio)
        const houseNumber = address.substring(0, firstSpaceIndex);

        // Extraer la calle y la ciudad (entre el número de casa y el código postal)
        // El -zipcode.length - 1 es para quitar el código postal y el espacio anterior
        const streetAndTown = address
          .substring(firstSpaceIndex + 1, address.length - zipcode.length - 1)
          .trim();

        // Añadir a los arrays correspondientes
        streets.push(streetAndTown);
        houseNumbers.push(houseNumber);
      }
    }
  }

  // Si no se encontraron direcciones para este código postal
  if (streets.length === 0) {
    return `${zipcode}:/`;
  }

  // Construir la cadena de resultado en el formato requerido
  return `${zipcode}:${streets.join(',')}/${houseNumbers.join(',')}`;
}
