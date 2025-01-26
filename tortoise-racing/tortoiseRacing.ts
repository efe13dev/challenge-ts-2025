export function race(
	v1: number,
	v2: number,
	g: number,
): [number, number, number] | null {
	const secondsInHour = 3600;
	const minutesInHour = 60;
	// Si v1 >= v2, B nunca alcanzará a A
	if (v1 >= v2) {
		return null;
	}

	// Calculamos el tiempo en segundos para mayor precisión
	const timeInSeconds = (g * secondsInHour) / (v2 - v1);

	// Convertimos a horas, minutos y segundos
	const hours = Math.floor(timeInSeconds / secondsInHour);
	const minutes = Math.floor((timeInSeconds % secondsInHour) / minutesInHour);
	const seconds = Math.floor(timeInSeconds % minutesInHour);

	return [hours, minutes, seconds];
}
