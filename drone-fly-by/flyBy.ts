export function flyBy(lamps: string, drone: string): string {
	// Si no hay lámparas o dron, devolvemos las lámparas sin cambios
	if (!lamps || !drone) return lamps;

	// La longitud del vuelo del dron (incluida su posición actual)
	const droneFlightLength = drone.length;

	// Convertimos las lámparas en un array para facilitar la modificación
	const lampsArray = lamps.split('');

	// Encendemos todas las lámparas hasta donde ha llegado el dron
	for (let i = 0; i < Math.min(droneFlightLength, lamps.length); i++) {
		lampsArray[i] = 'o';
	}

	// Convertimos el array de vuelta a string
	return lampsArray.join('');
}
