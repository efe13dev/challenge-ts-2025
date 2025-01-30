# 🚁 Drone Fly By

## 🎯 Descripción del Reto
El otro día vi un video increíble donde alguien hackeó unas bombillas WiFi controladas volando un dron cerca de ellas. ¡Brillante!

En este kata recrearemos esa hazaña... más o menos.

## 📝 Detalles
Se te proporcionarán dos strings:
- `lamps`: representa una fila de lámparas apagadas, cada una representada por `x`
- `drone`: representa la posición del dron `T` y su trayectoria de vuelo `=`

## ⚡ Funcionamiento
- Las lámparas apagadas se representan con `x`
- Las lámparas encendidas se representan con `o`
- El dron siempre vuela de izquierda a derecha
- El dron siempre comienza al inicio de la fila de lámparas
- Cualquier lugar por donde el dron haya volado, incluyendo su posición actual, hará que la lámpara en esa posición se encienda

## 🎯 Objetivo
Devolver el string `lamps` resultante después del paso del dron.

## 💡 Ejemplo
```
Input:
lamps = "xxxxxx"
drone = "====T"

Output: "ooooox"
```

¡Consulta los casos de prueba para más ejemplos!