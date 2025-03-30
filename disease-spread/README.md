# Simulación de Propagación de Enfermedad

## Descripción del Problema

En 1978, el British Medical Journal informó sobre un brote de gripe en un internado británico con 1000 estudiantes. El brote comenzó con un estudiante infectado.

Queremos estudiar la propagación de la enfermedad a través de la población de esta escuela. La población total se puede dividir en tres grupos:
-   **Susceptibles (s):** Aquellos que aún pueden contraer la enfermedad.
-   **Infectados (i):** Aquellos que actualmente tienen la enfermedad.
-   **Recuperados (r):** Aquellos que se han recuperado de la enfermedad.

## Modelo SIR

Estudiaremos la enfermedad durante un período de `tm` días utilizando el modelo SIR, que emplea 3 ecuaciones diferenciales:

```
(1) s'(t) = -b * s(t) * i(t)
(2) i'(t) =  b * s(t) * i(t) - a * i(t)
(3) r'(t) =  a * i(t)
```

Donde:
-   `s(t)`, `i(t)`, `r(t)` son el número de individuos susceptibles, infectados y recuperados en el tiempo `t`.
-   `s'(t)`, `i'(t)`, `r'(t)` son las derivadas correspondientes (tasas de cambio).
-   `b` es una constante que representa la tasa de contacto, que influye en la propagación.
-   `a` es una constante que representa la tasa de recuperación (fracción de infectados que se recuperan).

## Método de Diferencias Finitas

Podemos aproximar la solución a estas ecuaciones diferenciales utilizando el método de diferencias finitas. Dividimos el tiempo total `tm` en `n` pequeños intervalos de longitud `dt = tm / n`.

Las ecuaciones se convierten en:

```
(I)    S[k+1] = S[k] - dt * b * S[k] * I[k]
(II)   I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k])
(III)  R[k+1] = R[k] + dt * I[k] * a
```

Donde `S[k]`, `I[k]`, `R[k]` representan los recuentos en cada grupo en el paso `k`.

**Condiciones iniciales:**
-   `S0`: Número inicial de individuos susceptibles.
-   `I0`: Número inicial de individuos infectados.
-   `R0 = 0`: El número inicial de individuos recuperados siempre es 0.

## Tarea

La función `epidemic` debe devolver el número máximo de personas infectadas (`max(I)`) durante el período de simulación, truncado a un entero.

## Ejemplo

Dados:
-   `tm = 14` (días)
-   `n = 336` (pasos)
-   `s0 = 996` (susceptibles iniciales)
-   `i0 = 2` (infectados iniciales)
-   `b = 0.00206` (tasa de contacto)
-   `a = 0.41` (tasa de recuperación)

```
epidemic(tm, n, s0, i0, b, a) --> 483
```

## Notas

-   Consulta el [Método de diferencias finitas](https://es.wikipedia.org/wiki/M%C3%A9todo_de_las_diferencias_finitas#Ejemplo:_Ecuaci%C3%B3n_diferencial_ordinaria) para más detalles.
-   Este problema está inspirado en una [kata de Codewars](http://www.codewars.com/kata/56347fcfd086de8f11000014).