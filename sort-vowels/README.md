# Sort the Vowels! 🎯

## Descripción del Desafío
En este kata, necesitarás ordenar las vocales en un formato especial.

## Tarea
Escribe una función que tome una cadena de texto `s` como entrada y devuelva una cadena formateada de la siguiente manera:

### Ejemplos:

```
"CODEWARS" =>    C|O
                 D|E
                 W|A
                 R|
                 S|

"Rnd Te5T" =>    R|
                 n|
                 d|
                 T|e
                 5|
                 T|
```

## Reglas
- ✔️ Todas las vocales deben estar en el lado derecho del `|`
- ✔️ Todos los demás caracteres deben estar en el lado izquierdo del `|`
- ✔️ Las vocales consideradas son: `a`, `e`, `i`, `o`, `u`
- ✔️ Mantener el caso original de cada carácter
- ✔️ Cada línea debe estar separada con `\n`
- ❌ Entrada inválida (`undefined` / `null` / `integer`) debe retornar una cadena vacía
