export function disariumNumber(n: number): string {
	// Convertir el número a string para procesar cada dígito
	const numStr = n.toString();

	// Calcular la suma de cada dígito elevado a su posición
	const sum = numStr
		.split("")
		.reduce(
			(acc, digit, index) => acc + Number.parseInt(digit) ** (index + 1),
			0,
		);

	// Comparar si la suma es igual al número original
	return sum === n ? "Disarium !!" : "Not !!";
}
