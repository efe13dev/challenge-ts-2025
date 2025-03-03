# Reglas de Divisibilidad por 7

## Descripción del Problema

Un número m de la forma 10x + y es divisible por 7 si y solo si x - 2y es divisible por 7. En otras palabras:

1. Toma un número
2. Separa el último dígito
3. Resta el doble de este último dígito del número formado por los dígitos restantes
4. Continúa este proceso hasta obtener un número de máximo 2 dígitos

El número original es divisible por 7 si y solo si el último número obtenido mediante este procedimiento es divisible por 7.

## Ejemplos

### Ejemplo 1
**m = 371**
- 37 - (2×1) = 37 - 2 = 35
- Como 35 es divisible por 7, entonces 371 es divisible por 7
- Número de pasos: 1

### Ejemplo 2
**m = 1603**
- 160 - (2×3) = 160 - 6 = 154
- 15 - (2×4) = 15 - 8 = 7
- Como 7 es divisible por 7, entonces 1603 es divisible por 7
- Número de pasos: 2

### Ejemplo 3
**m = 372**
- 37 - (2×2) = 37 - 4 = 33
- Como 33 no es divisible por 7, entonces 372 no es divisible por 7
- Número de pasos: 1

### Ejemplo 4
**m = 477557101**
- 47755710 - (2×1) = 47755710 - 2 = 47755708
- 4775570 - (2×8) = 4775570 - 16 = 4775554
- 477555 - (2×4) = 477555 - 8 = 477547
- 47754 - (2×7) = 47754 - 14 = 47740
- 4774 - (2×0) = 4774 - 0 = 4774
- 477 - (2×4) = 477 - 8 = 469
- 46 - (2×9) = 46 - 18 = 28
- Como 28 es divisible por 7, entonces 477557101 es divisible por 7
- Número de pasos: 7

## Tarea

Tu tarea es implementar la función `seven(m)` (donde m es un entero >= 0) que devuelva un array (o un par, dependiendo del lenguaje) de números:
1. El primer elemento será el último número m con máximo 2 dígitos obtenido por tu función (este último m será divisible o no por 7)
2. El segundo elemento será el número de pasos necesarios para obtener el resultado

## Nota para Forth
Devuelve en la pila: número-de-pasos, último-número-m-con-máximo-2-dígitos

## Ejemplos de Resultados
- `seven(371)` debe devolver `[35, 1]`
- `seven(1603)` debe devolver `[7, 2]`
- `seven(477557101)` debe devolver `[28, 7]`
