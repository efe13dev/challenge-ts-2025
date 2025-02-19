# Reducción a un solo dígito

Este Kata consiste en reducir un número entero a un solo dígito (si no lo es ya) convirtiendo el número a binario, sumando los dígitos binarios y, si esa suma no es un solo dígito, repetir el proceso.

## Instrucciones

Si el número entero pasado ya es un solo dígito, no es necesario reducirlo.

## Ejemplos

### Ejemplo 1
Dado **5665**, la función debería retornar **5**:
```
5665 --> (binario) 1011000100001
1011000100001 --> (suma de los dígitos binarios) 5
```

### Ejemplo 2
Dado **123456789**, la función debería retornar **1**:
```
123456789 --> (binario) 111010110111100110100010101
111010110111100110100010101 --> (suma de los dígitos binarios) 16
16 --> (binario) 10000
10000 --> (suma de los dígitos binarios) 1
