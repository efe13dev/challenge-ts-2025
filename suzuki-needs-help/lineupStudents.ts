export function lineupStudents(students: string): string[] {
  // Dividir la cadena de entrada en un array de nombres
  return (
    students
      .trim()
      .split(' ')
      .filter((name) => name !== '')
      // Ordenar los nombres según los criterios:
      // 1. Por longitud en orden descendente
      // 2. Alfabéticamente en reversa (Z->A) para nombres de igual longitud
      .sort((a, b) => {
        // Si las longitudes son diferentes, ordenar por longitud descendente
        if (a.length !== b.length) {
          return b.length - a.length;
        }
        // Si las longitudes son iguales, ordenar alfabéticamente en reversa
        return b.localeCompare(a);
      })
  );
}
