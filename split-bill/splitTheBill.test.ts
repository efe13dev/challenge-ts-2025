import { describe, expect, it } from "bun:test";

import { splitTheBill } from "./splitTheBill.ts";

describe("splitTheBill", () => {
  it("Ejemplo del README: 3 amigos con gastos diferentes", () => {
    const grupo = {
      a: 20,
      b: 15,
      c: 10,
    };

    const resultado = splitTheBill(grupo);

    expect(resultado).toEqual({
      a: 5,
      b: 0,
      c: -5,
    });
  });

  it("Todos gastaron lo mismo, nadie debe pagar", () => {
    const grupo = {
      juan: 30,
      maria: 30,
      pedro: 30,
      ana: 30,
    };

    const resultado = splitTheBill(grupo);

    expect(resultado).toEqual({
      juan: 0,
      maria: 0,
      pedro: 0,
      ana: 0,
    });
  });

  it("Maneja correctamente valores decimales", () => {
    const grupo = {
      carlos: 45.75,
      sofia: 32.25,
      luis: 27.5,
    };

    const resultado = splitTheBill(grupo);

    // Gasto promedio: (45.75 + 32.25 + 27.5) / 3 = 35.17
    // Carlos: 45.75 - 35.17 = 10.58 (redondeado a 10.58)
    // Sofía: 32.25 - 35.17 = -2.92 (redondeado a -2.92)
    // Luis: 27.5 - 35.17 = -7.67 (redondeado a -7.67)
    expect(resultado).toEqual({
      carlos: 10.58,
      sofia: -2.92,
      luis: -7.67,
    });
  });

  it("Funciona con solo dos personas", () => {
    const grupo = {
      persona1: 100,
      persona2: 50,
    };

    const resultado = splitTheBill(grupo);

    // Gasto promedio: (100 + 50) / 2 = 75
    expect(resultado).toEqual({
      persona1: 25,
      persona2: -25,
    });
  });

  it("Maneja el caso de muchas personas con gastos variados", () => {
    const grupo = {
      p1: 120,
      p2: 80,
      p3: 150,
      p4: 95,
      p5: 105,
      p6: 70,
    };

    const resultado = splitTheBill(grupo);

    // Gasto promedio: (120 + 80 + 150 + 95 + 105 + 70) / 6 = 103.33
    expect(resultado).toEqual({
      p1: 16.67,
      p2: -23.33,
      p3: 46.67,
      p4: -8.33,
      p5: 1.67,
      p6: -33.33,
    });
  });
});
