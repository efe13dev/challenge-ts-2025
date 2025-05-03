export function diagonal(n: number, p: number): number {
  // Calcula la suma de los coeficientes binomiales en la diagonal p empezando en la línea n
  // S(n, p) = sum_{k=0}^{n-p} C(p+k, p)
  let suma = 0;
  for (let k = 0; k <= n - p; k++) {
    suma += binomial(p + k, p);
  }
  return suma;
}

// Función auxiliar para calcular el coeficiente binomial C(n, k)
function binomial(n: number, k: number): number {
  if (k < 0 || k > n) {
    return 0;
  }

  if (k === 0 || k === n) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (n - i + 1)) / i;
  }
  return Math.round(res); // Para evitar errores de precisión
}
