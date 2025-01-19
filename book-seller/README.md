# 📚 El Vendedor de Libros

## 🎯 Descripción del Problema

Un vendedor de libros tiene su inventario clasificado en 26 categorías, etiquetadas de la A a la Z. Cada libro tiene un código de al menos 3 caracteres, donde:
- El primer carácter es una letra mayúscula que define la categoría del libro
- En el inventario, cada código va seguido de un espacio y un número entero positivo que indica la cantidad de libros en stock

## ✨ Tarea

Dado el inventario del vendedor y una lista de categorías, debes encontrar el número total de libros para las categorías especificadas.

### Notas Importantes:
- Los códigos están en el mismo orden en ambas listas
- Si alguna de las listas de entrada está vacía, devolver una cadena vacía o un array/lista vacía

## 📝 Ejemplo

### Inventario del vendedor:
```
"ABART 20"
"CDXEF 50"
"BKWRK 25"
"BTSQZ 89"
"DRTYM 60"
```

### Lista de categorías a buscar:
```
"A", "B", "C", "W"
```

### Resultado esperado:
El resultado debe mostrar cada categoría seguida del total de libros en esa categoría.

### Explicación:
- Categoría A: 20 libros (ABART)
- Categoría B: 114 libros = 25 (BKWRK) + 89 (BTSQZ)
- Categoría C: 50 libros (CDXEF)
- Categoría W: 0 libros

### Formato de resultado:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"
