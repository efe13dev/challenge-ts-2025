# ✨ Reto: ¿Es un número sin signo de 6 bits? ✨

## 📋 Descripción
Implementa `String#six_bit_number?`, que debe devolver `true` si el objeto dado es un número representable por un entero sin signo de 6 bits (0-63), o `false` en caso contrario.

## ⚠️ Restricciones
- Solo se deben aceptar números en representación canónica.
- ❌ No se permiten signos `+` al inicio, ceros extra, espacios u otros caracteres.

## 🧑‍💻 Ejemplo de uso
```ruby
"42".six_bit_number? # => true
"064".six_bit_number? # => false
"-1".six_bit_number? # => false
"63".six_bit_number? # => true
"64".six_bit_number? # => false
```

## 🚦 Rango válido
- 0 a 63 (inclusive)

---
¡Mucha suerte programando! 🚀
