import { describe, expect, test } from "bun:test";

import { stockList } from "./bookSeller.ts";

describe("Book Seller", () => {
  test("debería retornar string vacío cuando la lista de libros está vacía", () => {
    const result = stockList([], ["A", "B"]);

    expect(result).toBe("");
  });

  test("debería retornar string vacío cuando la lista de categorías está vacía", () => {
    const result = stockList(["ABAR 200", "CDXE 500"], []);

    expect(result).toBe("");
  });

  test("debería sumar correctamente los libros por categoría", () => {
    const art = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
    const cat = ["A", "B", "C", "D"];
    const result = stockList(art, cat);

    expect(result).toBe("(A : 200) - (B : 1140) - (C : 500) - (D : 600)");
  });

  test("debería manejar categorías sin libros", () => {
    const art = ["ABAR 200", "CDXE 500"];
    const cat = ["A", "B", "C", "X"];
    const result = stockList(art, cat);

    expect(result).toBe("(A : 200) - (B : 0) - (C : 500) - (X : 0)");
  });

  test("debería ignorar libros de categorías no solicitadas", () => {
    const art = ["ABAR 200", "CDXE 500", "ZKXP 800"];
    const cat = ["A", "C"];
    const result = stockList(art, cat);

    expect(result).toBe("(A : 200) - (C : 500)");
  });
});
