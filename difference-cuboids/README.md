# 📦 Diferencia de Volúmenes de Cuboides

## 🎯 Descripción del Ejercicio

En este ejercicio, crearás una función que tome dos listas de enteros, `a` y `b`. Cada lista consistirá en 3 enteros positivos mayores que 0, que representan las dimensiones de los cuboides `a` y `b`. Tu tarea es encontrar la diferencia de los volúmenes de los cuboides, independientemente de cuál sea más grande.

## 📝 Ejemplo

```typescript
findDifference([2, 2, 3], [5, 4, 1])
// El volumen de a es 12 (2 * 2 * 3)
// El volumen de b es 20 (5 * 4 * 1)
// Resultado: 8 (20 - 12)
```

## ⚡ Notas
- La función será probada con ejemplos predefinidos y aleatorios
- Todos los números serán enteros positivos mayores que 0
- Si puedes, intenta escribir la solución en una sola línea de código

## 💡 Sugerencia
Piensa en cómo puedes usar el método `reduce()` para calcular el volumen de cada cuboide de manera eficiente.