# Conversor Binario a Texto

## Descripción del Desafío
Escribe una función que tome una cadena binaria como entrada y devuelva el texto decodificado equivalente (el texto está codificado en ASCII).

## Especificaciones
- Cada 8 bits en la cadena binaria representan 1 carácter en la tabla ASCII
- La cadena de entrada siempre será una cadena binaria válida
- Los caracteres pueden estar en el rango de "00000000" a "11111111" (inclusive)
- En caso de una cadena binaria vacía, la función debe devolver una cadena vacía

## Ejemplos

```typescript
binaryToText("01001000") // Devuelve "H"
binaryToText("01001000 01101001") // Devuelve "Hi"
binaryToText("") // Devuelve ""
```

## Notas Técnicas
- La tabla ASCII estándar utiliza 7 bits, pero este desafío utiliza 8 bits para incluir el conjunto de caracteres ASCII extendido
- Cada carácter debe ser procesado exactamente como 8 bits
- Los espacios en la entrada binaria deben ser ignorados

## Sugerencias
1. Divide la cadena binaria en grupos de 8 bits
2. Convierte cada grupo de 8 bits a su valor decimal
3. Convierte cada valor decimal al carácter ASCII correspondiente
4. Concatena todos los caracteres para formar el resultado final
