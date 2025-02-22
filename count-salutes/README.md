# 🎯 Contador de Saludos Militares

[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)

🔍 Una solución eficiente para contar saludos militares siguiendo patrones específicos de dirección y movimiento.

## 📋 Descripción

Hay un estrecho pasillo en el que las personas solo pueden ir hacia la derecha y la izquierda. Cuando dos personas se encuentran en el pasillo, por tradición deben saludarse mutuamente. Las personas se mueven a la misma velocidad hacia la derecha y la izquierda.

## 📝 Requisitos

✅ Los soldados deben saludarse solo cuando:
- 👀 Se ven directamente frente a frente
- 🚶♂️ Uno se mueve hacia la derecha (>)
- 🚶♀️ El otro se mueve hacia la izquierda (<)

## 🧮 Fórmula del Saludo

Cada par válido de soldados intercambia **2 saludos**:
- 1 saludo inicial
- 1 saludo de respuesta

## 📊 Ejemplos

### Ejemplo 1
Entrada: >----->-----<--<
Salida: 8

Explicación: Ambos soldados que se mueven hacia la derecha se encontrarán con ambos soldados que se mueven hacia la izquierda. Por lo tanto, ocurrirán un total de 4 encuentros y 8 saludos.

### Ejemplo 2
Entrada: <---<--->----<
Salida: 2

Explicación: Solo ocurre un encuentro.

## 💻 Uso

```javascript
// Ejemplo de entrada
const ejemplo = '<<>><';
console.log(countSalutes(ejemplo)); // Salida: 8
```

## 🛠 Instalación

```bash
npm install contador-saludos
```

## 🧪 Pruebas
```bash
npm test
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor sigue nuestro [Código de Conducta](CODE_OF_CONDUCT.md).

---
⌨️ con ❤️ por [Tu Nombre]
