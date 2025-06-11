# Color Choice Challenge

## Descripción

En este reto trabajaremos con combinaciones. Por ejemplo, si tomas 5 cartas de una baraja de 52 cartas, tienes 2,598,960 combinaciones diferentes.

En matemáticas, el número de combinaciones de x elementos que puedes tomar de un conjunto de n elementos se llama coeficiente binomial de n sobre x, o más comúnmente "n choose x". La fórmula es:

```math
n! / (x! * (n - x)!)
```

donde `!` es el operador factorial.

## Enunciado del Problema

Eres un reconocido diseñador de carteles y pintor. Te piden crear 6 carteles, todos con el mismo diseño, cada uno en 2 colores distintos. Cada cartel debe tener una combinación de colores diferente y tienes 4 colores disponibles: rojo, azul, amarillo y verde.

**¿Cuántos colores debe tener cada cartel?**

La respuesta es dos, ya que \( 4 \choose 2 = 6 \). Las combinaciones posibles son:

- {rojo, azul}
- {rojo, amarillo}
- {rojo, verde}
- {azul, amarillo}
- {azul, verde}
- {amarillo, verde}

Ahora, si tienes que hacer 35 carteles y tienes 7 colores disponibles, ¿cuántos colores debe tener cada cartel?

- Si tomas \( 7 \choose 2 = 21 \) combinaciones, no es suficiente.
- Si tomas \( 7 \choose 5 = 21 \), tampoco es suficiente.
- Pero \( 7 \choose 3 = 35 \) y \( 7 \choose 4 = 35 \). Elegirás 3 colores porque es más barato.

## Objetivo

Dado `m` (número de carteles a diseñar) y `n` (número total de colores disponibles), encuentra `x`, el número de colores por cartel, tal que cada cartel tenga una combinación única de colores y el número de combinaciones sea exactamente igual a `m`.

En otras palabras, debes encontrar `x` tal que:

```math
n \choose x = m
```

para un `m >= 0` y un `n > 0`. Si hay varias soluciones, devuelve la más pequeña. Si no hay solución, devuelve `-1`.

## Ejemplos

```text
(m = 6, n = 4)   --> 2
(m = 4, n = 4)   --> 1
(m = 4, n = 2)   --> -1
(m = 35, n = 7)  --> 3
(m = 36, n = 7)  --> -1

a = 47129212243960
(m = a, n = 50)      --> 20
(m = a + 1, n = 50)  --> -1
```

---

¡Buena suerte!
