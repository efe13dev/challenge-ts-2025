# Generador de Tablas de Multiplicar

## Descripción del Problema
Al estudiar para un examen de matemáticas, necesitas practicar multiplicaciones pero no tienes una tabla de referencia. Crea un generador que produzca una lista ilimitada de ejemplos de tablas de multiplicar.

## Requisitos
- El generador debe tomar un parámetro `a`
- Cada llamada al generador debe retornar un string en formato: `'a x b = c'`
- `b` debe comenzar en 1 e incrementar en 1 en cada iteración

## Ejemplo de Uso
```python
gen = multiplicador(5)
print(next(gen))  # '5 x 1 = 5'
print(next(gen))  # '5 x 2 = 10'
print(next(gen))  # '5 x 3 = 15'
```

## Características
- Generación infinita de ejemplos
- Formato consistente y claro
- Fácil integración con otros códigos
