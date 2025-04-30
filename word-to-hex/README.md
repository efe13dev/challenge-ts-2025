# Word to Hex

## Descripción

A Gary le gustan las imágenes, pero también le gustan las palabras y la lectura. Hace tiempo que desea ver cómo se verían las palabras y los libros si pudieran visualizarse como imágenes.

En esta tarea, se requiere tomar una cadena continua que puede consistir en cualquier combinación de palabras o caracteres y luego convertir las palabras que componen esta cadena en valores hexadecimales que puedan ser leídos como valores de color.

Una palabra se define como una secuencia de caracteres ASCII entre dos espacios en blanco, o como la primera o última palabra de una secuencia de palabras.

Cada palabra representará un valor hexadecimal tomando las tres primeras letras de cada palabra y obteniendo el código ASCII de cada carácter. Esto te dará un valor hexadecimal que representa los colores rojo, verde o azul. Luego, combinarás estos valores en un valor RGB hexadecimal legible, por ejemplo: `#ffffff`.

Si tu palabra tiene menos de 3 letras, debes usar el valor hexadecimal `00`. Por ejemplo, "It" devolvería el valor `#497400`.

Tu respuesta debe ser un array de valores hexadecimales que correspondan a cada palabra que componía tu cadena original.

---

## Ejemplo

La siguiente cadena:

```
Hello, my name is Gary and I like cheese.
```

debería devolver el siguiente array:

```
['#48656c', '#6d7900', '#6e616d', '#697300', '#476172', '#616e64', '#490000', '#6c696b', '#636865']
```

---

## Formato y Detalles

- **Entrada:** Una cadena de texto continua.
- **Salida:** Un array de strings, donde cada string es un color hexadecimal RGB correspondiente a una palabra.
- **Reglas:**
  - Si la palabra tiene menos de 3 letras, rellena con `00` a la derecha.
  - Solo se consideran los primeros tres caracteres de cada palabra.
  - El valor hexadecimal se forma concatenando los códigos ASCII de los caracteres, convertidos a hexadecimal, en el orden en que aparecen.

---

## Ejemplo Visual

| Palabra   | ASCII (dec) | ASCII (hex) | Hexadecimal Final |
|-----------|-------------|-------------|-------------------|
| Hello,    | 72 101 108  | 48 65 6c    | #48656c           |
| my        | 109 121 0   | 6d 79 00    | #6d7900           |
| name      | 110 97 109  | 6e 61 6d    | #6e616d           |
| is        | 105 115 0   | 69 73 00    | #697300           |
| Gary      | 71 97 114   | 47 61 72    | #476172           |
| and       | 97 110 100  | 61 6e 64    | #616e64           |
| I         | 73 0 0      | 49 00 00    | #490000           |
| like      | 108 105 107 | 6c 69 6b    | #6c696b           |
| cheese.   | 99 104 101  | 63 68 65    | #636865           |

---

¡Buena suerte!