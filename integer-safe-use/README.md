# Enteros Seguros en TypeScript/JavaScript

## Descripción
JavaScript/TypeScript tiene limitaciones en la representación de números enteros. Específicamente, puede representar con precisión enteros de hasta 53 bits con signo. Este ejercicio consiste en determinar si es seguro utilizar un número entero dado, utilizando las características más recientes de ES6.

## Ejemplos

```typescript
SafeInteger(9007199254740990)  // true
SafeInteger(-90)               // true
SafeInteger(9007199254740992)  // false
```

## Notas Técnicas
- Un número entero se considera "seguro" si puede ser representado con precisión en JavaScript/TypeScript
- El rango de enteros seguros es: -(2^53 - 1) a (2^53 - 1)
- Utiliza las características de ES6 para implementar la solución
