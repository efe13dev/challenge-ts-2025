# Unique In Order 🔄

## Descripción
Implementa la función `unique_in_order` que toma como argumento una secuencia y devuelve una lista de elementos sin elementos repetidos consecutivos, preservando el orden original.

## Ejemplos de Uso

```typescript
uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // [1, 2, 3]
```

## Notas
- La función mantiene el orden original de los elementos
- Solo elimina elementos duplicados que están uno junto al otro
- Funciona tanto con strings como con arrays
- Distingue entre mayúsculas y minúsculas
