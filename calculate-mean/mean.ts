export function mean(lst: string[]): [number, string] {
	// Arrays para almacenar números y caracteres
	const numeros: number[] = [];
	const caracteres: string[] = [];

	// Separar números y caracteres
	lst.forEach((elemento) => {
		if (!isNaN(Number(elemento))) {
			numeros.push(Number(elemento));
		} else {
			caracteres.push(elemento);
		}
	});

	// Calcular la media de los números
	const media = numeros.reduce((sum, num) => sum + num, 0) / numeros.length;

	// Unir los caracteres en una sola cadena
	const cadenaCaracteres = caracteres.join('');

	return [media, cadenaCaracteres];
}
