# 💫 Problema de los Anillos Giratorios 💫

## 📝 Descripción

Imagina dos anillos con números en ellos:
- El anillo interior gira en sentido horario (disminuyendo en 1 cada giro) 🔄
- El anillo exterior gira en sentido antihorario (aumentando en 1 cada giro) 🔁

Comenzamos con ambos anillos alineados en 0 en la parte superior, y en cada movimiento giramos cada anillo un incremento. 

**❓ El problema:** ¿Cuántos movimientos se necesitarán antes de que ambos anillos muestren el mismo número en la parte superior nuevamente?

## ⚙️ Parámetros

- El anillo interior 🔵 tiene enteros de 0 a `innerMax`
- El anillo exterior 🔴 tiene enteros de 0 a `outerMax`
- Tanto `innerMax` como `outerMax` son enteros ≥ 1

## 📊 Ejemplos

### ✨ Ejemplo 1: `innerMax = 2, outerMax = 3`

| Movimiento | Anillo Interior 🔵 | Anillo Exterior 🔴 |
|------------|-----------------|-----------------|
| 🚀 Inicio     | 0               | 0               |
| 1️⃣          | 2               | 1               |
| 2️⃣          | 1               | 2               |
| 3️⃣          | 0               | 3               |
| 4️⃣          | 2               | 0               |
| 5️⃣          | 1               | 1               |

Después de 5 movimientos, ambos anillos muestran el mismo número (1). ✅
Por lo tanto: `spinningRings(2, 3) = 5`

### ✨ Ejemplo 2: `innerMax = 3, outerMax = 2`

| Movimiento | Anillo Interior 🔵 | Anillo Exterior 🔴 |
|------------|-----------------|-----------------|
| 🚀 Inicio     | 0               | 0               |
| 1️⃣          | 3               | 1               |
| 2️⃣          | 2               | 2               |

Después de 2 movimientos, ambos anillos muestran el mismo número (2). ✅
Por lo tanto: `spinningRings(3, 2) = 2`