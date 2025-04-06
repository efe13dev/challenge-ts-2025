export function splitTheBill(x: { [k: string]: number }): {
  [k: string]: number;
} {
  // Calcular el gasto total
  const totalGasto = Object.values(x).reduce((sum, gasto) => sum + gasto, 0);
  
  // Calcular el gasto promedio por persona
  const numPersonas = Object.keys(x).length;
  const gastoPromedio = totalGasto / numPersonas;
  
  // Crear el objeto resultado
  const resultado: { [k: string]: number } = {};
  
  // Calcular cuánto debe recibir o pagar cada persona
  for (const [persona, gasto] of Object.entries(x)) {
    // Positivo si recibe dinero, negativo si debe pagar
    const balance = gasto - gastoPromedio;
    // Redondear a dos decimales
    resultado[persona] = Math.round(balance * 100) / 100;
  }
  
  return resultado;
}
