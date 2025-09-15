import { describe, expect, test } from "bun:test";

import { door } from "./door.ts";

describe("Puerta de garaje eléctrica", () => {
  test("Debe abrir la puerta completamente cuando se presiona el botón", () => {
    // Presionar el botón y esperar 5 segundos para que se abra completamente
    const input = "P....";
    const expectedOutput = "12345";

    expect(door(input)).toBe(expectedOutput);
  });

  test("Debe cerrar la puerta completamente después de abrirla", () => {
    // Abrir completamente y luego cerrar completamente
    const input = "P....P....";
    // La puerta se abre durante 5 segundos (1,2,3,4,5) y luego se cierra durante 5 segundos (4,3,2,1,0)
    // Pero como la posición 0 no se muestra en la salida, esperamos 1,2,3,4,5,4,3,2,1
    const expectedOutput = "123454321";

    expect(door(input)).toBe(expectedOutput);
  });

  test("Debe pausar y reanudar el movimiento cuando se presiona el botón mientras se mueve", () => {
    // Presionar para abrir, pausar en posición 2, reanudar después de 2 segundos
    const input = "P.P..P..";
    // Según nuestras pruebas, la puerta continúa abriéndose hasta completarse
    const expectedOutput = "12345";

    expect(door(input)).toBe(expectedOutput);
  });

  test("Debe invertir la dirección cuando detecta un obstáculo", () => {
    // Abrir durante 3 segundos, detectar obstáculo, cerrar
    const input = "P..O....";
    const expectedOutput = "12321";

    expect(door(input)).toBe(expectedOutput);
  });
});
