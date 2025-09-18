const G = 9.81; // Gravedad terrestre en m/s²
const T = 1; // Tiempo de reacción en segundos

/**
 * Convierte la velocidad de km/h a m/s
 * @param v Velocidad en km/h
 * @returns Velocidad en m/s
 */
function kmhToMs(v: number): number {
  return v * (1000 / 3600);
}

/**
 * Convierte la velocidad de m/s a km/h
 * @param v Velocidad en m/s
 * @returns Velocidad en km/h
 */
function msToKmh(v: number): number {
  return v * (3600 / 1000);
}

/**
 * Calcula la distancia total de detención en metros dados la velocidad en km/h y el coeficiente de fricción
 * @param v Velocidad en km/h
 * @param mu Coeficiente de fricción
 * @returns Distancia total de detención en metros
 */
export function dist(v: number, mu: number): number {
  // Convertir velocidad a m/s
  const vMs = kmhToMs(v);

  // Calcular distancia de frenado
  const d1 = (vMs * vMs) / (2 * mu * G);

  // Calcular distancia de reacción
  const d2 = vMs * T;

  // Distancia total de detención
  return d1 + d2;
}

/**
 * Calcula la velocidad en km/h dados la distancia total de detención en metros y el coeficiente de fricción
 * @param d Distancia total de detención en metros
 * @param mu Coeficiente de fricción
 * @returns Velocidad en km/h
 */
export function speed(d: number, mu: number): number {
  // Resolver la ecuación cuadrática para encontrar la velocidad:
  // d = (v^2 / (2 * mu * G)) + (v * T)
  // Reorganizando: (1/(2 * mu * G)) * v^2 + T * v - d = 0
  // Coeficientes para la fórmula cuadrática: a*v^2 + b*v + c = 0
  const a = 1 / (2 * mu * G);
  const b = T;
  const c = -d;

  // Fórmula cuadrática: v = (-b ± √(b² - 4ac)) / (2a)
  // Solo necesitamos la solución positiva
  const discriminant = b * b - 4 * a * c;
  const vMs = (-b + Math.sqrt(discriminant)) / (2 * a);

  // Convertir velocidad a km/h
  return msToKmh(vMs);
}
