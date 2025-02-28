# Cadenas Consecutivas

## Descripción del Problema

Dado un array (lista) `strarr` de cadenas y un entero `k`, tu tarea es devolver la primera cadena más larga que consiste en `k` cadenas consecutivas tomadas del array.

## Ejemplos

### Ejemplo 1:
```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
k = 2
```

Concatenando las cadenas consecutivas de `strarr` de 2 en 2, obtenemos:

- **treefoling** (longitud 10): concatenación de strarr[0] y strarr[1]
- **folingtrashy** (longitud 12): concatenación de strarr[1] y strarr[2]
- **trashyblue** (longitud 10): concatenación de strarr[2] y strarr[3]
- **blueabcdef** (longitud 10): concatenación de strarr[3] y strarr[4]
- **abcdefuvwxyz** (longitud 12): concatenación de strarr[4] y strarr[5]

Las dos cadenas más largas son: "folingtrashy" y "abcdefuvwxyz".
La primera que aparece es "folingtrashy", por lo tanto:
```
longest_consec(strarr, 2) debería devolver "folingtrashy"
```

### Ejemplo 2:
```
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

## Condiciones

- Si `n` es la longitud del array de cadenas:
  - Si `n = 0` o `k > n` o `k <= 0`, devolver `""` (devolver `Nothing` en Elm, `"nothing"` en Erlang).

## Nota

Cadenas consecutivas: siguen una tras otra sin interrupción.
