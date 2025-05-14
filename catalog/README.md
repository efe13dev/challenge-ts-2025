# 🛒 Catálogo de Productos

## 📄 Descripción
Se te proporciona un pequeño extracto de un catálogo:

```xml
<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...
```

- `prx` significa **precio**
- `qty` significa **cantidad**
- El artículo a buscar es, por ejemplo, "saw".

---

## 🔍 ¿Cómo funciona la función?
La función `catalog(s, "saw")` devuelve la(s) línea(s) correspondiente(s) al artículo, mostrando el precio con $ delante:

```txt
 table saw > prx: $1099.99 qty: 5
 saw > prx: $9 qty: 10
 ...
```

Si el artículo no está en el catálogo, devuelve `Nothing`.

---

## 📝 Notas importantes
- Hay una línea en blanco entre dos productos del catálogo.
- Un mismo artículo puede aparecer más de una vez. Si esto ocurre, devuelve todas las líneas correspondientes (en el mismo orden que en el catálogo).
- El separador de líneas en los resultados puede variar según el lenguaje (`\n` o `\r\n`). En Pascal, `\n` se reemplaza por `LineEnding`.
- En Perl, usa `£` en lugar de `$` antes de los precios.
- Puedes ver ejemplos en los "Sample tests".

---

## 💡 Nota para Prolog
- Si el artículo no está en el catálogo, entonces `R` es igual a "" (cadena vacía).
- Las subcadenas de `R` (separadas por "\n") deben estar en orden alfabético.

---

✨ ¡Buena suerte resolviendo el reto! ✨