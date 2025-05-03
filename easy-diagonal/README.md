# Suma en la Diagonal del Triángulo de Pascal

En el siguiente dibujo tenemos una parte del triángulo de Pascal. Las líneas están numeradas desde cero (arriba).

- La diagonal izquierda en azul claro, con solo números igual a 1, es la **diagonal 0**.
- Luego, en verde oscuro (1, 2, 3, 4, 5, 6, 7) es la **diagonal 1**.
- Después, en verde claro (1, 3, 6, 10, 15, 21) es la **diagonal 2**, y así sucesivamente.

Queremos calcular la suma de los coeficientes binomiales en una diagonal dada. Por ejemplo:

- La suma en la diagonal 0 es **8** (lo escribimos como `S(7, 0)`, donde 7 es el número de la línea donde empezamos y 0 es el número de la diagonal).
- De la misma manera, `S(7, 1)` es **28**, `S(7, 2)` es **56**.

## Desafío

Escribe una función que calcule `S(n, p)`, donde:
- `n` es la línea donde empezamos
- `p` es el número de la diagonal

La función recibirá `n` y `p` como parámetros (**siempre**: `n > 0`, `p >= 0`, `n > p`) y devolverá la suma correspondiente.

### Ejemplos

```js
// Resultado esperado:
diagonal(20, 3) // => 5985
diagonal(20, 4) // => 20349
