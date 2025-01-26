export function specialNumber(n: number): string {
	// Convertir el número a string para poder analizar cada dígito
	const numStr = n.toString();

	// Verificar cada dígito
	for (const digit of numStr) {
		// Si encontramos un dígito mayor que 5, no es un número especial
		if (Number.parseInt(digit) > 5) {
			return "NOT!!";
		}
	}

	// Si llegamos aquí, todos los dígitos son 5 o menores
	return "Special!!";
}
