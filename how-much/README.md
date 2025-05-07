# How Much?

¡Siempre pensé que mi viejo amigo John era más rico de lo que parecía, pero nunca supe exactamente cuánto dinero tenía! Un día (mientras le hacía preguntas) me dijo:

> "Imagina que tengo entre **m** y **n** Zloty... (¿o dijo Quetzal? ¡No recuerdo!)"
> 
> "Si comprara 9 autos que cuestan **c** cada uno, solo me quedaría 1 Zloty (¿o era Metical?)..."
> 
> "Y si comprara 7 barcos a **b** cada uno, solo me quedarían 2 Ringglets (¿o era Zloty?)..."

## Objetivo

En cada caso posible, responde:
- ¿Cuánto dinero (**f**) podría tener?
- ¿Cuál es el costo (**c**) de un auto?
- ¿Cuál es el costo (**b**) de un barco?

Así podré tener una mejor idea sobre su fortuna. **Nota:** Si el rango entre `m` y `n` es grande, puede haber muchas respuestas posibles.

## Formato de la respuesta

Cada respuesta debe ser de la forma:

```json
["M: f", "B: b", "C: c"]
```

Y todas las respuestas:

```json
[["M: f", "B: b", "C: c"], ...]
```

Donde:
- **M**: dinero total
- **B**: costo de cada barco
- **C**: costo de cada auto

> **Nota:** `m`, `n`, `f`, `b`, `c` son enteros positivos, donde `0 <= m <= n` o `m >= n >= 0`. Los extremos son inclusivos.

---

## Ejemplos de uso

```typescript
howmuch(1, 100)      // => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
howmuch(1000, 1100)  // => [["M: 1045", "B: 149", "C: 116"]]
howmuch(10000, 9950) // => [["M: 9991", "B: 1427", "C: 1110"]]
howmuch(0, 200)      // => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]
```

### Explicación de resultados para `howmuch(1, 100)`

- En la primera respuesta, su fortuna posible es 37:
  - Puede comprar 7 barcos de 5: `37 - 7 * 5 = 2`
  - O puede comprar 9 autos de 4: `37 - 9 * 4 = 1`
- En la segunda respuesta, su fortuna posible es 100:
  - Puede comprar 7 barcos de 14: `100 - 7 * 14 = 2`
  - O puede comprar 9 autos de 11: `100 - 9 * 11 = 1`

---

Consulta los "Sample Tests" para conocer el formato de retorno esperado.