const MULTI_DASH_REGEX = /-+/g;
const LEADING_DASH_REGEX = /^-/;
const TRAILING_DASH_REGEX = /-$/;

export function dashatize(num: number | null): string {
  if (num === null || Number.isNaN(num)) {
    return "";
  }
  // Convertimos el número a string y eliminamos el signo negativo
  const digits = Math.abs(num).toString().split("");
  let result = "";

  for (const digit of digits) {
    if (Number.parseInt(digit) % 2 !== 0) {
      result += `-${digit}-`;
    } else {
      result += digit;
    }
  }

  // Reemplazamos múltiples guiones por uno solo y eliminamos guiones al inicio/final
  return result
    .replace(MULTI_DASH_REGEX, "-")
    .replace(LEADING_DASH_REGEX, "")
    .replace(TRAILING_DASH_REGEX, "");
}
