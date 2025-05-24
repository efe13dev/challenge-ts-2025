# ✨ Longitud de un Arco Parabólico

## 📐 Descripción del Problema

Queremos aproximar la longitud de una curva que representa una función $y = f(x)$ con $a \leq x \leq b$. Primero, dividimos el intervalo $[a, b]$ en $n$ subintervalos de anchuras $h_1, h_2, ..., h_n$ definiendo puntos $x_1, x_2, ..., x_{n-1}$ entre $a$ y $b$. Esto define los puntos $P_0, P_1, P_2, ..., P_n$ en la curva, cuyas coordenadas $x$ son $a, x_1, x_2, ..., x_{n-1}, b$ y las coordenadas $y$ son $f(a), f(x_1), ..., f(x_{n-1}), f(b)$. Al conectar estos puntos, obtenemos un camino poligonal que aproxima la curva.

## 🏹 Objetivo

Aproximar la longitud de un arco parabólico que representa la curva $y = x^2$ con $x$ en el intervalo $[0, 1]$. Tomaremos un paso común $h$ entre los puntos $x_i$: $h_1, h_2, ..., h_n = h = 1/n$ y consideraremos los puntos $P_0, P_1, P_2, ..., P_n$ sobre la curva. Las coordenadas de cada $P_i$ son $(x_i, y_i = x_i^2)$.

## 🧮 Función Esperada

La función `len_curve` (o similar en otros lenguajes) toma $n$ como parámetro (número de subintervalos) y retorna la longitud de la curva.

---

> 💡 **Consejo:** Utiliza la fórmula de distancia entre puntos sucesivos para aproximar la longitud total de la curva.