## 🚗🛑 Distancia total de frenado

La distancia de frenado `d1` es la distancia que recorre un vehículo desde que comienza a frenar hasta que se detiene por completo. Depende de la velocidad inicial `v` y del coeficiente de fricción `μ` entre los neumáticos y la superficie de la carretera.

La distancia de frenado es uno de los dos componentes de la distancia total de detención. El otro componente es la distancia de reacción, que es el producto de la velocidad y el tiempo de percepción-reacción del conductor.

### 📐 Fórmulas clave
- Energía cinética: `E = 0.5 · m · v²`
- Trabajo de frenado: `W = μ · m · g · d1`
- Igualando `E = W` se obtiene la distancia de frenado: `d1 = v² / (2 · μ · g)`

Donde:
- `g = 9.81 m/s²` (gravedad terrestre)
- `m` es la masa del vehículo (se cancela en la igualdad)
- `μ` es adimensional

Conversión de unidades:
- `v[km/h]` ↔ `v[m/s]` usando `1 km/h = 1000/3600 m/s`

### 🧩 Tareas
1) Calcular la distancia total de detención `d` (en metros) dados `v` (km/h) y `μ` (con tiempo de reacción `t = 1 s`).

   `dist(v, μ) -> d`

2) Calcular `v` (en km/h) conociendo `d` (en metros) y `μ`, suponiendo `t = 1 s`.

   `speed(d, μ) -> v` tal que `dist(v, μ) = d`.

### 🧮 Ejemplos
- `dist(100, 0.7) -> 83.9598760937531`
- `speed(83.9598760937531, 0.7) -> 100.0`

### 📝 Notas
- 🔁 Recuerda convertir la velocidad entre km/h y m/s cuando sea necesario.
- ⏱️ No olvides el tiempo de reacción: `t = 1 s`.
- 📏 No redondees ni trunques los resultados. En las pruebas se usa una comparación con tolerancia.