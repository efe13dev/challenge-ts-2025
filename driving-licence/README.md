# Licencia de Conducir del Reino Unido 🚗

## 📑 Tabla de Contenidos
- [Introducción](#introducción)
- [Tarea](#tarea)
- [Reglas de Codificación](#reglas-de-codificación)
- [Formato de Entrada](#formato-de-entrada)

## 📖 Introducción
En el Reino Unido, la licencia de conducir es el documento oficial que autoriza a su titular a operar varios tipos de vehículos motorizados en carreteras y otras vías a las que el público tiene acceso. En Inglaterra, Escocia y Gales son administradas por la Agencia de Licencias de Conductores y Vehículos (DVLA) y en Irlanda del Norte por la Agencia de Conductores y Vehículos (DVA).

Se requiere una licencia de conducir en el Reino Unido para cualquier persona que conduzca un vehículo en cualquier carretera u otra vía definida en la sección 192 de la Ley de Tráfico Vial de 1988, independientemente de la propiedad del terreno por el que pasa la carretera.

## 🎯 Tarea
El número de licencia de conducir del Reino Unido se compone a partir de los datos personales del conductor. Las letras y dígitos individuales se pueden codificar utilizando la información que se detalla a continuación.

## 📝 Reglas de Codificación

| Posición | Descripción |
|----------|-------------|
| 1-5 | Los primeros cinco caracteres del apellido (rellenado con 9s si tiene menos de 5 caracteres) |
| 6 | El dígito de la década del año de nacimiento (ej. para 1987 sería 8) |
| 7-8 | El mes de nacimiento (7º carácter incrementado en 5 si el conductor es mujer, es decir, 51-62 en lugar de 01-12) |
| 9-10 | El día dentro del mes de nacimiento |
| 11 | El dígito del año de nacimiento (ej. para 1987 sería 7) |
| 12-13 | Las dos primeras iniciales del nombre y segundo nombre, rellenado con 9 si no hay segundo nombre |
| 14 | Dígito arbitrario - generalmente 9 |
| 15-16 | Dos dígitos de verificación por computadora - siempre usaremos "AA" |

## 📥 Formato de Entrada
Los datos se proporcionarán en un array con el siguiente formato:

```javascript
data = ["John", "James", "Smith", "01-Jan-2000", "M"]
```

Donde los elementos son:
- 0 = Nombre
- 1 = Segundo nombre (si lo hay)
- 2 = Apellido
- 3 = Fecha de nacimiento (en formato Día Mes Año, puede incluir el nombre completo del mes o abreviatura)
- 4 = M-Masculino o F-Femenino

Tu tarea es generar el número completo de licencia de conducir de 16 dígitos.

¡Buena suerte! 🍀
