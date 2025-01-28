# Transformaciones de Cadenas Cuadradas

## Descripción
Se te proporciona una cadena de n líneas, donde cada subcadena tiene n caracteres de longitud.

### Ejemplo inicial:
```
s = "abcd\nefgh\nijkl\nmnop"
```

## Transformaciones

### 1. Simetría respecto a la diagonal principal (diag_1_sym)
```
Entrada:
abcd
efgh
ijkl
mnop

Salida:
aeim
bfjn
cgko
dhlp
```

### 2. Rotación en sentido horario 90 grados (rot_90_clock)
```
Entrada:
abcd
efgh
ijkl
mnop

Salida:
miea
njfb
okgc
plhd
```

### 3. Selfie y Diagonal (selfie_and_diag1)
Combina la cadena inicial con la cadena obtenida por simetría respecto a la diagonal principal.

```
Entrada:
abcd
efgh
ijkl
mnop

Salida:
abcd|aeim
efgh|bfjn
ijkl|cgko
mnop|dhlp
```

## Tarea
Implementar las siguientes funciones:
- `diag_1_sym`
- `rot_90_clock`
- `selfie_and_diag1`

Y la función de orden superior:
- `oper(fct, s)` donde:
  - `fct` es la función de una variable a aplicar a la cadena `s`
  - `fct` será una de las tres funciones anteriores

## Ejemplos de uso
```typescript
s = "abcd\nefgh\nijkl\nmnop"

oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
```

## Notas
- La forma del parámetro `fct` en `oper` cambia según el lenguaje
- Para Bash: Las cadenas de salida deben estar separadas por `\r` en lugar de `\n`
