# ✨ Suma de Pares

¡Bienvenido al reto de **Suma de Pares**! 🧮🔢

---

## 📋 Descripción
Dada una lista de enteros y un valor objetivo (**sum**), devuelve los **primeros dos valores** (de izquierda a derecha) que suman dicho valor. Si hay más de un par, elige el que tenga el **índice más pequeño** en el segundo elemento.

---

## 📝 Ejemplos

```python
sum_pairs([11, 3, 7, 5], 10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4], 6)
#          ^-----^         4 + 2 = 6, índices: 0, 2 *
#             ^-----^      3 + 3 = 6, índices: 1, 3
#                ^-----^   2 + 4 = 6, índices: 2, 4
#  * La respuesta correcta es el par cuyo segundo valor tiene el índice más pequeño
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  No hay pares de valores que sumen 2.
== None/nil/undefined/Nothing (según el lenguaje)

sum_pairs([10, 5, 2, 3, 7, 5], 10)
#              ^-----------^   5 + 5 = 10, índices: 1, 5
#                    ^--^      3 + 7 = 10, índices: 3, 4 *
#  * La respuesta correcta es el par cuyo segundo valor tiene el índice más pequeño
== [3, 7]
```

---

## ⚠️ Notas
- Pueden aparecer números negativos y duplicados.
- Se probarán listas de hasta **10,000,000** elementos. ¡Asegúrate de que tu código sea eficiente y no agote el tiempo límite!

---

## 🚀 ¡Buena suerte y a programar!