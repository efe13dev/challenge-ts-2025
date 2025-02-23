# Diferencia de Enteros

## 🎯 Descripción del Desafío

Implementa una función que acepte dos argumentos:
- Un array/lista de números enteros
- Un número entero (n)

La función debe determinar cuántas veces dos números en el array tienen una diferencia de `n`.

## 📝 Ejemplos

### Ejemplo 1:
```javascript
Input: 
  array = [1, 1, 5, 6, 9, 16, 27]
  n = 4

Output: 3

Explicación: Los pares son (1,5), (1,5), (5,9)
```

### Ejemplo 2:
```javascript
Input:
  array = [1, 1, 3, 3]
  n = 2

Output: 4

Explicación: Los pares son (1,3), (1,3), (1,3), (1,3)
```

## 💡 Notas
- El orden de los pares no importa
- Pueden existir números duplicados en el array
- Cada par debe usar diferentes índices en el array
