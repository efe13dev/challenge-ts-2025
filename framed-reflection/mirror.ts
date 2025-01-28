export function mirror(text: string): string {
	const words = text.split(' ');
	const reversedWords = words.map((word) => word.split('').reverse().join(''));

	// Encontrar la palabra más larga para determinar el ancho del marco
	const maxLength = Math.max(...reversedWords.map((word) => word.length));
	const frameWidth = maxLength + 4; // 2 espacios + 2 asteriscos

	// Crear el marco superior e inferior
	const horizontalFrame = '*'.repeat(frameWidth);

	// Crear las líneas del medio con el texto reflejado
	const mirroredLines = reversedWords.map((word) => {
		const padding = ' '.repeat(maxLength - word.length);
		return `* ${word}${padding} *`;
	});

	// Unir todas las partes
	return [horizontalFrame, ...mirroredLines, horizontalFrame].join('\n');
}
