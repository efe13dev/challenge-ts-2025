export function driver(data: string[]): string {
  const [firstName, middleName, surname, birthDate, gender] = data;

  // 1-5: Primeros cinco caracteres del apellido (rellenado con 9s)
  let licenseNumber = surname.toUpperCase().padEnd(5, '9').slice(0, 5);

  // Procesar fecha de nacimiento
  const [day, monthText, year] = birthDate.split('-');

  // 6: Dígito de la década del año de nacimiento
  licenseNumber += year.charAt(2);

  // 7-8: Mes de nacimiento (ajustado para género femenino)
  const months: { [key: string]: number } = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
  };

  const monthNum = months[monthText.substring(0, 3).toLowerCase()];
  const monthFirstDigit =
    Math.floor(monthNum / 10) + (gender.toUpperCase() === 'F' ? 5 : 0);
  const monthSecondDigit = monthNum % 10;
  licenseNumber += monthFirstDigit.toString() + monthSecondDigit.toString();

  // 9-10: Día del mes
  licenseNumber += day.padStart(2, '0');

  // 11: Último dígito del año
  licenseNumber += year.slice(-1);

  // 12-13: Iniciales del nombre y segundo nombre
  licenseNumber += firstName.charAt(0).toUpperCase();
  licenseNumber += (middleName ? middleName.charAt(0) : '9').toUpperCase();

  // 14: Dígito arbitrario (9)
  licenseNumber += '9';

  // 15-16: Dígitos de verificación (AA)
  licenseNumber += 'AA';

  return licenseNumber;
}
