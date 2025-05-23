// Asigna tu expresión regular a REGEXP
// Debe validar:
// - Al menos 6 caracteres
// - Al menos una minúscula
// - Al menos una mayúscula
// - Al menos un dígito
// - Solo caracteres alfanuméricos
export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
