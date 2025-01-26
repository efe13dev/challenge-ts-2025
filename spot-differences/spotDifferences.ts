export function spot(string1: string, string2: string): number[] {
	// Array para almacenar las posiciones de las diferencias
	const differences: number[] = [];

	// Recorremos los strings caracter por caracter
	for (let i = 0; i < string1.length; i++) {
		// Si encontramos una diferencia, guardamos la posición
		if (string1[i] !== string2[i]) {
			differences.push(i);
		}
	}

	return differences;
}
