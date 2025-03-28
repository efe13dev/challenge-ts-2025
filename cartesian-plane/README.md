# Plano Cartesiano y Funciones

## Descripción del Problema

Consideremos coordenadas enteras x, y en el plano cartesiano y tres funciones f, g, h definidas por:

- **f(x, y)** = min(x, y)
- **g(x, y)** = max(x, y)
- **h(x, y)** = x + y

donde:
- n es un entero dado (n ≥ 1)
- x, y son enteros
- Dominio: 1 ≤ x ≤ n, 1 ≤ y ≤ n

## Ejemplo de Valores

### Tabla de valores para f(x,y) con n = 6:

| y\x | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| 6    | 1 | 2 | 3 | 4 | 5 | 6 |
| 5    | 1 | 2 | 3 | 4 | 5 | 5 |
| 4    | 1 | 2 | 3 | 4 | 4 | 4 |
| 3    | 1 | 2 | 3 | 3 | 3 | 3 |
| 2    | 1 | 2 | 2 | 2 | 2 | 2 |
| 1    | 1 | 1 | 1 | 1 | 1 | 1 |

## Objetivo

Calcular la suma de f(x, y), g(x, y) y h(x, y) para todos los enteros x e y en el dominio D: (1 ≤ x ≤ n, 1 ≤ y ≤ n).

### Funciones a Implementar

1. **sumin(n)**: Retorna la suma de min(x, y) en D
2. **sumax(n)**: Retorna la suma de max(x, y) en D
3. **sumsum(n)**: Retorna la suma de x + y en D

## Ejemplos

### Para n = 6
```markdown
sumin(6)  = 91
sumax(6)  = 161
sumsum(6) = 252
```

### Para n = 45
```markdown
sumin(45)  = 31395
sumax(45)  = 61755
sumsum(45) = 93150
```

### Para n = 999
```markdown
sumin(999)  = 332833500
sumax(999)  = 665167500
sumsum(999) = 998001000
```

### Para n = 5000
```markdown
sumin(5000)  = 41679167500
sumax(5000)  = 83345832500
sumsum(5000) = 125025000000
``` 