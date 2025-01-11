# Número Especial 🔢

## Definición
Un número es considerado **Especial** si sus dígitos consisten únicamente en 0, 1, 2, 3, 4 o 5.

## Tarea
Determinar si un número dado es especial o no.

## Notas Importantes
- El número proporcionado será siempre positivo (N > 0)
- Todos los números de un solo dígito en el intervalo [1:5] son considerados números especiales

## Ejemplos

### Ejemplo 1: Número 2
```
Input: specialNumber(2)
Output: "Special!!"
Explicación: Es un número de un solo dígito dentro del intervalo [1:5]
```

### Ejemplo 2: Número 9
```
Input: specialNumber(9)
Output: "NOT!!"
Explicación: Aunque es un número de un solo dígito, está fuera del intervalo [1:5]
```

### Ejemplo 3: Número 23
```
Input: specialNumber(23)
Output: "Special!!"
Explicación: Todos los dígitos del número están formados por dígitos del intervalo [0:5]
```

### Ejemplo 4: Número 39
```
Input: specialNumber(39)
Output: "NOT!!"
Explicación: Aunque tiene un dígito (3) dentro del intervalo, el segundo dígito no lo está
```

### Ejemplo 5: Número 59
```
Input: specialNumber(59)
Output: "NOT!!"
Explicación: Aunque tiene un dígito (5) dentro del intervalo, el segundo dígito no lo está
```

### Más Ejemplos
- `specialNumber(513)` ➡️ "Special!!"
- `specialNumber(709)` ➡️ "NOT!!"

## Regla Principal
**¡Todos los dígitos** del número deben estar dentro del intervalo [0:5] para que sea considerado especial!
