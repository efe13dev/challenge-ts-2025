export function stockList(listOfArt: string[], listOfCat: string[]): string {
	// Si alguna de las listas está vacía, retornamos string vacío
	if (listOfArt.length === 0 || listOfCat.length === 0) {
		return "";
	}

	// Crear un objeto para almacenar la suma de libros por categoría
	const categoryTotals: Record<string, number> = {};

	// Inicializar todas las categorías solicitadas con 0
	for (const cat of listOfCat) {
		categoryTotals[cat] = 0;
	}

	// Sumar los libros para cada categoría
	for (const item of listOfArt) {
		const [code, quantityStr] = item.split(" ");
		const category = code[0]; // Primera letra del código
		const quantity = Number.parseInt(quantityStr);

		// Solo sumamos si la categoría está en nuestra lista de categorías a buscar
		if (category in categoryTotals) {
			categoryTotals[category] += quantity;
		}
	}

	// Construir el string de resultado
	return listOfCat
		.map((cat) => `(${cat} : ${categoryTotals[cat]})`)
		.join(" - ");
}
