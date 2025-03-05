# Situación
Has sido contratado por una empresa que fabrica puertas de garaje eléctricas. Los accidentes con la línea de productos actual han resultado en numerosos coches dañados, extremidades rotas y varios animales de compañía muertos. Tu misión es escribir una versión más segura de su software de control.

## Especificación
Siempre comenzamos con la puerta cerrada. El control remoto tiene exactamente un botón, con el siguiente comportamiento:

- Si la puerta está cerrada, un pulsador comienza a abrir la puerta, y viceversa.
- Toma 5 segundos para que la puerta se abra o se cierre completamente.
- Mientras la puerta se está moviendo, un pulsador pausa el movimiento, y otro pulsador reanuda el movimiento en la misma dirección.
- Para hacer la puerta más segura, se ha equipado con detección de obstáculos basada en resistencia. Cuando la puerta detecta un obstáculo, debe revertir inmediatamente la dirección del movimiento.

## Entrada
Una cadena donde cada carácter representa un segundo, con los siguientes valores posibles:

- `.` No hay evento
- `P` Se ha presionado el botón
- `O` Se ha detectado un obstáculo (supersede a `P`)

Como ejemplo, `..P....` significa que no sucede nada durante dos segundos, luego se presiona el botón, y no hay más eventos.

## Salida
Una cadena donde cada carácter representa un segundo e indica la posición de la puerta (0 si está completamente cerrada y 5 si está completamente abierta). La puerta comienza a moverse inmediatamente, por lo que su posición cambia en el mismo segundo que el evento.

### Ejemplo
`..P...O.....` como entrada debería generar `001234321000` como salida.