# Carrera de Tortugas 🐢

## Descripción del Problema

Dos tortugas, A y B, deben participar en una carrera. 
- La tortuga A comienza con una velocidad promedio de 720 pies por hora
- La tortuga B es más rápida, con una velocidad de 850 pies por hora
- A tiene una ventaja inicial de 70 pies

## El Desafío

Calcular cuánto tiempo tardará B en alcanzar a A.

### Especificaciones

- **Entrada**: 
  - `v1`: velocidad de A (entero > 0)
  - `v2`: velocidad de B (entero > 0)
  - `g`: ventaja inicial (entero > 0)

- **Salida**: 
  - Un array `[hora, min, seg]` con el tiempo necesario
  - Los valores se redondean hacia abajo al segundo más cercano
  - Si v1 >= v2, retornar `null` o equivalente según el lenguaje

## Ejemplos

```
race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37)   => [3, 21, 49]
```

## Notas Importantes

- Las tortugas no se preocupan por las fracciones de segundos
- Utilizar solo números enteros en los cálculos
- Para la conversión de tiempo decimal a horas, minutos y segundos, considerar usar división de enteros
