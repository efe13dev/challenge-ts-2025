# Odd March Bits

¡Los bits impares se están preparando para las Batallas de Bits!

Por lo tanto, los **n** bits marchan de derecha a izquierda a lo largo de un camino de 8 bits. Una vez que el bit más significativo llega a la izquierda, su marcha termina. Cada paso se guarda como un array de 8 enteros.

Devuelve un array con todos los pasos.

- **1 <= n <= 8**
- **NOTA:** n ≠ 0, porque n representa el número de unos.

## Ejemplos

Esto se asemeja a un simple "chase" de 8 LEDs:

### n = 3

```
00000111
00001110
00011100
00111000
01110000
11100000
```

### n = 7

```
01111111
11111110