# 🕳️ Hollow Array (Arreglo hueco)

Una lista/arreglo se considera "hueca" si contiene 3 o más ceros consecutivos en el centro y está precedida y seguida por la misma cantidad de elementos distintos de cero. Además, todos los ceros deben estar en el centro (en un único bloque contiguo).

---

## 📌 Definición formal

Dado un arreglo de enteros `arr`, es "hueco" si y solo si:

- Hay un bloque central de ceros de longitud `>= 3`.
- Los elementos antes del bloque de ceros son todos `!= 0`.
- Los elementos después del bloque de ceros son todos `!= 0`.
- La cantidad de elementos no-cero a la izquierda es igual a la de la derecha.
- No existen ceros fuera del bloque central.

La lista `[0, 0, 0, 0, 0]` es considerada hueca (cero elementos no-cero a cada lado). La lista vacía `[]` no es hueca.

---

## ✅ Tu tarea

Escribe una función que reciba un arreglo de enteros y retorne `true` si es un arreglo hueco, en caso contrario `false`.

---

## 🧪 Ejemplos

```text
[2, 3, 0, 0, 0, 5, 6]           -> true
[2, 0, 0, 0, 5, 6]               -> false  (1 no-cero a la izquierda, 2 a la derecha)
[2, 3, 0, 0, 5, 6]               -> false  (menos de 3 ceros en el centro)
[0, 2, 0, 0, 0, 5, 6]            -> false  (hay un cero fuera del bloque central)
[0, 0, 0, 0, 0]                  -> true   (0 elementos no-cero a ambos lados)
[]                                -> false
```

---

## 🔎 Casos límite a considerar

- Arreglos muy pequeños (longitud < 3) nunca pueden ser huecos.
- Ceros dispersos en los extremos invalidan la condición.
- El bloque central de ceros debe ser único y contiguo.
- Cantidades desiguales de no-ceros a cada lado invalidan la condición.

---

## 🧭 Criterios de aceptación (checklist)

- [ ] Retorna `true` si hay un bloque central de `>= 3` ceros.
- [ ] No hay ceros fuera del bloque central.
- [ ] La cantidad de no-ceros a la izquierda es igual a la de la derecha.
- [ ] Funciona con entradas vacías y con todos ceros.

---

## 💡 Sugerencia de enfoque

1. Recorre desde el inicio contando no-ceros hasta encontrar el primer `0`.
2. Cuenta el número de ceros consecutivos a partir de ahí.
3. Recorre desde el final contando no-ceros hasta encontrar el último `0`.
4. Verifica: ceros `>= 3`, no-ceros izquierda = no-ceros derecha, y que no existan ceros fuera del bloque central.

---

## 📁 Estructura del repositorio

Este archivo describe el reto. Implementa tu solución en el lenguaje del reto y añade pruebas si es posible.

---

## 🧷 Notas

- Intenta que tu solución sea clara y eficiente.
- Si agregas tests, documenta cómo ejecutarlos.