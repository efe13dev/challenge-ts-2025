# 🔍 Spot the Differences

> Este kata es parte de la colección "Mary's Puzzle Books".

## 📝 Descripción del Problema

Mary trajo a casa un libro de "encuentra las diferencias". El libro está lleno de problemas, y cada problema consiste en dos cadenas de texto que son similares, pero con algunos caracteres diferentes.

### Ejemplo

**String 1:** `"abcdefg"`
**String 2:** `"abcqetg"`

En este ejemplo, observa que:
- La "d" del String 1 se convirtió en "q" en el String 2
- La "f" del String 1 se convirtió en "t" en el String 2

## 🎯 Tu Tarea

Tu trabajo es ayudar a Mary a resolver los puzzles. Escribe un programa `spot_diff/Spot` que compare dos strings y devuelva una lista con las posiciones donde los dos strings difieren.

Para el ejemplo anterior, tu programa debería devolver `[3, 5]`, ya que el String 1 es diferente del String 2 en las posiciones 3 y 5.

## ⚠️ Notas Importantes

- Si ambos strings son iguales, devolver `[]`
- Ambos strings siempre tendrán la misma longitud
- Las mayúsculas/minúsculas y la puntuación son importantes
