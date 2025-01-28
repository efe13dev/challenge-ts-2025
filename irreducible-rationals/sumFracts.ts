export function sumFracts(l: number[][]): string | null {
	// Caso especial: lista vacía
	if (l.length === 0) return null;

	// Función para calcular el MCD (Máximo Común Divisor)
	const gcd = (a: number, b: number): number => {
		if (b === 0) {
			return Math.abs(a);
		}
		return gcd(b, a % b);
	};

	// Función para calcular el MCM (Mínimo Común Múltiplo)
	const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);

	// Encontrar el denominador común (MCM de todos los denominadores)
	let commonDenom = l[0][1];
	for (let i = 1; i < l.length; i++) {
		commonDenom = lcm(commonDenom, l[i][1]);
	}

	// Convertir cada fracción al denominador común y sumar numeradores
	let sum = 0;
	for (const [num, den] of l) {
		sum += num * (commonDenom / den);
	}

	// Simplificar la fracción resultante
	const divisor = gcd(sum, commonDenom);
	const finalNum = sum / divisor;
	const finalDen = commonDenom / divisor;

	// Si el denominador es 1, retornar solo el numerador como string
	return finalDen === 1 ? `${finalNum}` : `[${finalNum}, ${finalDen}]`;
}
