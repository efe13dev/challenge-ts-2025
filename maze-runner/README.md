# 🎮 Maze Runner Challenge

## 🎯 Introducción

¡Bienvenido, Aventurero! Tu misión es navegar por el laberinto y alcanzar el punto final sin tocar ninguna pared. ¡Ten cuidado! Tocar una pared significa muerte instantánea.

## 📋 Tarea

Se te proporcionará un array 2D que representa el laberinto y un array de direcciones. Tu objetivo es seguir las direcciones dadas y:

- Si llegas al punto final antes de usar todos tus movimientos → Retorna `"Finish"`
- Si golpeas alguna pared o sales del laberinto → Retorna `"Dead"`
- Si te quedas dentro del laberinto después de usar todos tus movimientos → Retorna `"Lost"`

## 🗺️ Estructura del Laberinto

### Ejemplo de Laberinto:

```javascript
const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];
```

### 🔑 Leyenda:

- `0` = Camino seguro
- `1` = Pared
- `2` = Punto de inicio
- `3` = Punto final

### Ejemplo de Direcciones:

```javascript
const directions = ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']; // Resultado: "Finish"
```

## 📜 Reglas

1. El laberinto siempre será cuadrado (N x N), pero su tamaño y contenido variarán en cada prueba.

2. Las posiciones de inicio y fin cambiarán en las pruebas finales.

3. Las direcciones siempre estarán en mayúsculas:

   - `N` = Norte
   - `E` = Este
   - `W` = Oeste
   - `S` = Sur

4. Resultados posibles:
   - `"Finish"` → Llegaste al final antes de usar todos los movimientos
   - `"Dead"` → Golpeaste una pared o saliste del laberinto
   - `"Lost"` → Usaste todos los movimientos pero sigues en el laberinto
