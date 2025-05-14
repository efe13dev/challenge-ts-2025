const blankLineRegex = /\n\s*\n/;
const nameMatchRegex = /<name>(.*?)<\/name>/;
const prxMatchRegex = /<prx>(.*?)<\/prx>/;
const qtyMatchRegex = /<qty>(.*?)<\/qty>/;

export function catalog(s: string, article: string): string {
  // Dividir el catálogo en productos usando líneas en blanco como separador
  const products = s.split(blankLineRegex);
  const results: string[] = [];

  for (const prod of products) {
    // Extraer nombre, precio y cantidad usando expresiones regulares
    const nameMatch = prod.match(nameMatchRegex);
    const prxMatch = prod.match(prxMatchRegex);
    const qtyMatch = prod.match(qtyMatchRegex);

    if (nameMatch && prxMatch && qtyMatch) {
      const name = nameMatch[1];
      const prx = prxMatch[1];
      const qty = qtyMatch[1];
      // Buscar coincidencia exacta o parcial del artículo
      if (name.includes(article)) {
        results.push(`${name} > prx: $${prx} qty: ${qty}`);
      }
    }
  }

  // Si no se encontraron resultados, devolver "Nothing"
  if (results.length === 0) {
    return 'Nothing';
  }

  // Unir los resultados por salto de línea de Windows
  return results.join('\r\n');
}
