# 🔐 Validación de Contraseña con Expresiones Regulares

¡Bienvenido! Aquí aprenderás cómo validar una contraseña utilizando expresiones regulares en TypeScript.

## 📋 Requisitos de la contraseña

La contraseña debe cumplir con los siguientes criterios:

- ✅ **Tener al menos 6 caracteres**
- 🔡 **Contener al menos una letra minúscula**
- 🔠 **Contener al menos una letra mayúscula**
- #️⃣ **Contener al menos un dígito**
- 🚫 **Solo contener caracteres alfanuméricos** *(no se permiten guiones bajos "_" ni símbolos especiales)*

---

## 💡 Ejemplo de uso

```typescript
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
console.log(regex.test('Abc123')); // true
console.log(regex.test('abc123')); // false (falta mayúscula)
console.log(regex.test('ABC123')); // false (falta minúscula)
console.log(regex.test('Abcdef')); // false (falta dígito)
console.log(regex.test('Abc_123')); // false (guión bajo no permitido)
```

---

## 🛠️ ¿Cómo funciona?

- `(?=.*[a-z])` ➡️ Al menos una minúscula
- `(?=.*[A-Z])` ➡️ Al menos una mayúscula
- `(?=.*\d)` ➡️ Al menos un número
- `[A-Za-z\d]{6,}` ➡️ Solo caracteres alfanuméricos y mínimo 6 caracteres

---

¡Listo para validar contraseñas seguras y elegantes! 🚀
