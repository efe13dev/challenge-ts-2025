# Control de Velocidad

## Descripción del Problema

En el coche de John, el GPS registra cada `s` segundos la distancia recorrida desde un origen (las distancias se miden en una unidad arbitraria pero consistente). 

Por ejemplo, a continuación se muestra parte de un registro con `s = 15`:

```
x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
```

Las secciones son:

- 0.0-0.19
- 0.19-0.5
- 0.5-0.75
- 0.75-1.0
- 1.0-1.25
- 1.25-1.50
- 1.5-1.75
- 1.75-2.0
- 2.0-2.25

Podemos calcular la velocidad media por hora de John en cada sección y obtenemos:

```
[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
```

## Objetivo

Dados `s` y `x`, la tarea es devolver como un entero el _suelo_ (floor) de la velocidad media máxima por hora obtenida en las secciones de `x`. 

Si la longitud de `x` es menor o igual a 1, devolver 0 ya que el coche no se movió.

## Ejemplo

Con los datos anteriores, tu función `gps(s, x)` debería devolver `74`.

## Nota

Con números de punto flotante, puede suceder que los resultados dependan del orden de las operaciones. Para calcular la velocidad por hora puedes usar:

```
(3600 * delta_distance) / s
```

¡Feliz codificación!
