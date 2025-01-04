# Suma Binaria

## Descripción
Este proyecto implementa una función que realiza la suma de números binarios. La función toma dos arrays de números binarios (0s y 1s) y devuelve su suma en formato binario.

## Funcionalidad
- Convierte arrays de números binarios en su representación decimal
- Realiza la suma de los números
- Convierte el resultado de vuelta a formato binario

## Uso
```typescript
const array1 = [1, 0, 1];  // Representa 5 en binario
const array2 = [1, 1, 0];  // Representa 6 en binario
const resultado = arrToBin(array1, array2);  // Devuelve [1, 0, 1, 1] (11 en binario)
```

## Tecnologías
- TypeScript
- Jest (para pruebas)

## Requisitos
Dado un array, suma todos los elementos numéricos y devuelve el equivalente binario de esa suma. Para hacer el código a prueba de errores, cualquier elemento que no sea un número debe ser tratado como 0 ya que no puede ser sumado.

Si tu lenguaje puede manejar binarios con decimales, asume que el array no contendrá flotantes o doubles.

### Ejemplos
```typescript
arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'
Esta es una modificación del Kata: Array2Binary addition, espero que te guste.
