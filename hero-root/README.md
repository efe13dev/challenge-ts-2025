# 🧮 Método de Hero para Raíz Cuadrada Entera

¡Bienvenido! Este documento explica el algoritmo conocido como **Método de Hero**, uno de los primeros métodos para aproximar la raíz cuadrada entera de un número positivo.

## 📚 ¿Qué es el Método de Hero?
El método de Hero, nombrado así por el matemático griego Hero de Alejandría (siglo I), es un algoritmo para calcular la raíz cuadrada entera de un número `n`. Este método es un precursor del método de Newton, desarrollado 16 siglos después.

## 🧑‍💻 ¿Cómo funciona?
Para aproximar la raíz cuadrada de un número `n`, se toma una suposición inicial `x` y un error `e`. Luego, se calcula repetidamente un nuevo valor aproximado de `x` usando la fórmula:

```
(x + n / x) / 2
```

El proceso termina cuando la diferencia absoluta entre el valor anterior y el nuevo es menor que `e`.

En este kata, la función `int_rac` recibe un número `n` (entero positivo) y un parámetro `guess` (entero positivo) que será nuestro valor inicial `x`. El parámetro `e` está fijado en 1.

> ⚠️ **Nota:** El algoritmo de Hero no siempre da el resultado exacto. Por ejemplo, para `n = 25` obtenemos 5, pero para `n = 26` también obtenemos 5. Sin embargo, 5 es la raíz cuadrada entera de 26.

## 🎯 Objetivo del Kata
Debes retornar la **cantidad de iteraciones** (progresiones de aproximaciones enteras) que realiza el algoritmo.

## 🔗 Referencia
[Wikipedia: Método Babilónico para raíces cuadradas](https://es.wikipedia.org/wiki/M%C3%A9todo_babil%C3%B3nico_para_ra%C3%ADces_cuadradas)

## 📝 Ejemplos

- `int_rac(25, 1)` sigue la progresión `[1, 13, 7, 5]` ⇒ la función debe retornar **4**.
- `int_rac(125348, 300)` sigue la progresión `[300, 358, 354]` ⇒ la función debe retornar **3**.
- `int_rac(125348981764, 356243)` sigue la progresión `[356243, 354053, 354046]` ⇒ la función debe retornar **3**.

Puedes usar `Math.floor` (o similar) para cada aproximación entera.

## 💡 Nota para JavaScript, Coffeescript y Typescript
No uses el operador bitwise NOT doble (`~~`) en cada iteración si quieres obtener los mismos resultados que en los tests y en otros lenguajes.

---
¡Buena suerte y disfruta programando! 🚀